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
  "PGHOST": "127.0.0.1",
  "PGPORT": 5432,
  "PGUSER": "postgres",
  "PGPASSWORD": "",
  "PGDATABASE": "tutorial"
}
```

Note: You'll need to have postgres running locally, see the [database] repo for
more instructions.


## Simplistic diagram

1. API receives an HTTP PUT request from client
2. Server does two things after authenticating:
  - Publishes an event with that value to all subscribed clients
  - Pushes the value TimescaleDB
3. The dashboard receives published event and updates the view
4. Historical data is displayed by asking API for a view from the database


```
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐         ┌────────────────────────┐           
       API Server       ─────────▶│   Client (Dashboard)   │           
│                       │         └────────────────────────┘           
 ┌─────────────────────┐                                               
││    WebSocket API    ││◀───┐                                         
 └─────────────────────┘     │                                         
│                       │    │     ┌──────────────────────────────────┐
 ─ ─ ─ ─ ─ ─ ─▲─ ─ ─ ─ ─     └─────│    Client/Server (BeagleBone)    │
            │ │                    └───────▲──────────────────▲───────┘
            │ │                            │                  │        
            │ │                            │                  │        
            │ │                            │                  │        
            │ │                      ┌───────────┐      ┌───────────┐  
            │ │                      │ pH Sensor │      │Temperature│  
            │ │                      └───────────┘      └───────────┘  
            │ │                                                        
  ┌─────────▼─┴───────┐                                                
  │Timeseries Database│                                                
  │                   │                                                
  └───────────────────┘                                                

```


[database]: https://github.com/GreenfinityFarms/database
