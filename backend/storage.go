package main

import (
	"bufio"
	"os"
	"strings"
)

const storagePath = "storage.db"

func initStorage() ([]string, []string) {
	createStorageIfNeeded()

	storage, _ = os.OpenFile(storagePath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	scanner := bufio.NewScanner(storage)

	keys := make([]string, 0)
	urls := make([]string, 0)

	for scanner.Scan() {
		entry := scanner.Text()
		entryParts := strings.Split(entry, " ")

		key := entryParts[0]
		url := entryParts[1]

		keys = append(keys, key)
		urls = append(urls, url)
	}

	return keys, urls
}

func createStorageIfNeeded() {
	storage, err := os.OpenFile(storagePath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)

	if err != nil {
		storage = createStorage()
		_ = storage.Close()
	} else {
		_ = storage.Close()
	}
}

func createStorage() *os.File {
	storage, _ := os.Create(storagePath)
	return storage
}

