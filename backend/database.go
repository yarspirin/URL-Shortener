package main

func dbURLExists(url string) bool {
	_, ok := database.keys[url]
	return ok
}

func dbReadKeyByURL(url string) (string, bool) {
	key, ok := database.keys[url]

	if !ok {
		return "", ok
	}

	return key, ok
}

func dbReadURLByKey(key string) (string, bool) {
	url, ok := database.urls[key]

	if !ok {
		return "", ok
	}

	return url, ok
}

func dbKeyExists(key string) bool {
	_, ok := database.urls[key]
	return ok
}

func dbWrite(key string, url string) {
	mtx.Lock()
	database.keys[url] = key
	database.urls[key] = url
	_, _ = storage.WriteString(key + " " + url + "\n")
	mtx.Unlock()
}

func dbStartUpWrite(keys []string, urls []string) {
	for index := range keys {
		key := keys[index]
		url := urls[index]
		database.keys[url] = key
		database.urls[key] = url
	}
}