package main

import (
	"errors"
	"github.com/gin-gonic/gin"
	"net/http"
	"strings"
)

func handleGoRequest(context *gin.Context) {
	parts := strings.Split(context.Request.URL.String(), "/")
	key := parts[len(parts)-1]
	url, ok := dbReadURLByKey(key)

	if !ok {
		err := errors.New("URL not found")
		_ = context.Error(err)
		context.Status(404)
		return
	}

	context.Writer.Header().Set("Location", url)
	context.Writer.WriteHeader(http.StatusFound)
}