## Greenfin Realtime API

For a list of dependencies see the `package.json` file. The most important
libraries are:

| name | description |
| :------------- | :------------- |
| Hapi | A nicer API that's focused on configurability |
| Nes | A Hapi wrapper for interacting with web sockets |

See Nes' [protocol documentation](https://github.com/hapijs/nes/blob/master/PROTOCOL.md)
for more information on allowed values in sender/receivers.

## Development instructions

1. Create a file called `env.json` and populate it with your database credentials:

```json
{
  "DB_HOST": "127.0.0.1",
  "DB_PORT": 5432,
  "DB_USER": "postgres",
  "DB_PASS": ""
}
```

Note: You'll need to have postgres running locally, see the [database] repo for
more instructions.


[database]: https://github.com/GreenfinityFarms/database
