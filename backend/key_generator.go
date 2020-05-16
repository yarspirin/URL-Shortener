package main

import (
	"bytes"
	"math/rand"
)

func generateUniqueKey() string {
	key := generateRandomKey()

	for {
		ok := dbKeyExists(key)

		if !ok {
			break
		}

		key = generateRandomKey()
	}

	return key
}

func generateRandomKey() string {
	var buffer bytes.Buffer

	for i := 0; i < 6; i++ {
		letter := generateRandomByte()
		buffer.WriteByte(letter)
	}

	return buffer.String()
}

func generateRandomByte() byte {
	letter := rand.Int()%26 + 'a'
	return byte(letter)
}
