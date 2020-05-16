package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"net/http"
)

type ShortenRequest struct {
	URL string `json:"url"`
}

type ShortenResponse struct {
	URL string `json:"url"`
	Key string `json:"key"`
}

func handleShortenRequest(context *gin.Context) {
	body, err := getBody(context.Request)

	if err != nil {
		_ = context.Error(err)
	}

	var shortenRequest ShortenRequest
	err = json.Unmarshal(body, &shortenRequest)

	fmt.Println(body)

	if err != nil {
		_ = context.Error(err)
	}

	key, ok := dbReadKeyByURL(shortenRequest.URL)

	if !ok {
		key = generateUniqueKey()
		dbWrite(key, shortenRequest.URL)
	}

	shortenResponse := ShortenResponse{URL: shortenRequest.URL, Key: key}
	data, err := json.Marshal(shortenResponse)

	if err != nil {
		_ = context.Error(err)
	}

	context.Writer.Header().Set("Content-Type", "application/json")
	_, err = context.Writer.Write(data)

	if err != nil {
		_ = context.Error(err)
	}
}

func getBody(request *http.Request) ([]byte, error) {
	body, err := ioutil.ReadAll(request.Body)

	defer func() {
		_ = request.Body.Close()
	}()

	if err != nil {
		return nil, err
	}

	return body, nil
}