package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"sync"
)

type Database struct {
	keys map[string]string
	urls map[string]string
}

var (
	database Database
	mtx      sync.Mutex
)

func initDatabase() {
	keys := make(map[string]string)
	urls := make(map[string]string)
	database = Database{keys: keys, urls: urls}
}

func main() {
	initDatabase()

	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./web", true)))

	api := r.Group("/api")

	api.POST("/shorten", handleShortenRequest)
	api.GET("/*any", handleGoRequest)

	_ = r.Run()
}
