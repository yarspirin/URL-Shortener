package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"os"
	"sync"
)

type Database struct {
	keys map[string]string
	urls map[string]string
}

var (
	storage *os.File
	database Database
	mtx      sync.Mutex
)

func initDatabase() {
	keys := make(map[string]string)
	urls := make(map[string]string)
	database = Database{keys: keys, urls: urls}
}

func startUp() {
	keys, urls := initStorage()
	initDatabase()
	dbStartUpWrite(keys, urls)
}

func main() {
	startUp()

	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./web", true)))

	api := r.Group("/api")
	prod := r.Group("/")

	api.POST("/shorten", handleShortenRequest)
	prod.GET("/*any", handleGoRequest)

	_ = r.Run()
}
