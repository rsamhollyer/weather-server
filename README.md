# Weather App

## Prerequisites

You need to have [Node](https://nodejs.org/en/download/) installed.
Alternatively, you can use these [commands](https://nodejs.org/en/download/package-manager/)

## Installation

Create a local directory. Initialize it with git

```
git init
```

Clone the repo.

```
git clone https://github.com/rsamhollyer/weather-server.git
```

Install dependecies.

```bash
npm install
```

![Weather App](/public/assets/githubimages/WeatherApp.png)

## Usage

### Creating a .env

To run the app, you will need a Postgres data base as well as an [Open Weather](https://openweathermap.org/api) api key.

Create a .env file with the dist.env and populate it will the required information.
![Env](/public/assets/githubimages/Dist.png)

### Port

The default port is 9999. If you need to change this for any reason, update the front end proxy information and rebuild the React client. Directions for that are in the [client repo](https://github.com/rsamhollyer/weather-client) .

### Run the server

```
npm run dev
```
