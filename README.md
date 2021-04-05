# Weather App

## About

This is a simple Weather App using [Open Weather API](https://openweathermap.org/api) for the [Varsity Hype](https://www.varsityhype.com/) coding challenge.
![Weather App](/public/assets/githubimages/WeatherApp.png)

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Open Weather](https://openweathermap.org/api) API key
- [PostgreSQL Database](https://www.postgresql.org/) (I used a free [ElephantSQL](https://www.elephantsql.com/) database.)

## Installation

Clone the repo.

```bash
git clone https://github.com/rsamhollyer/weather-server.git
cd weather-server
```

Install dependecies.

```bash
npm install
```

## Usage

### Create a .env config file

To run the app, you will need a [PostgreSQL database](https://www.postgresql.org/) and an [Open Weather API](https://openweathermap.org/api) key.
In the project's root directory, create a `.env` file from the `dist.env` and populate it with the required information.

```bash
cp dist.env .env
```

![Env](/public/assets/githubimages/Dist.png)

### Change the port (optional)

The default port is 9999. If you need to change this for any reason, update the front-end proxy information and rebuild the React client. Directions for that are in the [client repo](https://github.com/rsamhollyer/weather-client).

### Run the server

```bash
npm run dev
```

### Developing the application

`Nodemon` is used for the development server, so make needed changes to the code files, save, and the server should restart automatically.
Note: The client build files live in the `public/` directory. Directions for updating the client code are also in the [client repo](https://github.com/rsamhollyer/weather-client).
