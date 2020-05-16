# URL-Shortener

This service provides short aliases redirecting to long URLs.

URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases “short links.” Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely to mistype shorter URLs.

* Check it out here: [yarurl.herokuapp.com](yarurl.herokuapp.com)

![](./static/main.png = 400x)
![](.static/response.png = 400x)

# High-level Design and Architecture

The app consists of two parts: frontend and backend. 


The frontend of the app is written in ReactJS and backed by a number of React components.


The backend is written in Go with support of the Gin framework that is used to route requests.

# Frontend

The app is built by following the concept of SPA. Thus, it doesn't need to reload the page during its use and works within a browser. The button and the text field on the page are brought by the Material-UI: A popular React UI framework. It provides nice animations and state validation out of the box.


Once the input is validated, a request to the internal API is initiated. The response from the backend is used to update the page by populating it with a short url and original url.

# Backend

The backend API contains two methods:

* `api/shorten`: the HTTP POST method that takes a JSON like `{"url": "<URL>"}` and responds with a JSON of kind `{"url": "<URL>", "key": "<KEY>"}`. The key parameter in the response body is used to map the original url and later can be used by the next API methed.
* `/<KEY>`: the HTTP GET method that, given with the key, redirects to the original page.

# Deployment

For the deployment purposes the app is contained in a Docker image.