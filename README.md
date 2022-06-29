# Hex2048

## RNG server.

Use `npm run start-server` command to start rng server.It uses 13337 port by default.

To request cell data from server use post request to the server with radius from 2 to 20, with radius passed in url path. For example: `http://localhost:13337/3`.

Cells data should be passed as array of cell data in body. Like this:

`[
  {
    "x": 1,
    "y": -1,
    "z": 0,
    "value": 2
  },`

  `{
    "x": 0,
    "y": -1,
    "z": 1,
    "value": 2
  },`

  `{
    "x": -1,
    "y": 0,
    "z": 1,
    "value": 2
  }
]`
