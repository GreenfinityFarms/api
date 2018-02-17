## Greenfin Realtime API

For a list of dependencies see the `package.json` file. The most important
libraries are:

| name | description |
| :------------- | :------------- |
| Hapi | A nicer API that's focused on configurability |
| Nes | A Hapi wrapper for interacting with web sockets |

See Nes' [protocol documentation](https://github.com/hapijs/nes/blob/master/PROTOCOL.md)
for more information on allowed values in sender/receivers.


### Current TODO's

- [ ] Add payload validation
- [ ] Add error logging
- [ ] Add query sanitization
- [ ] Handle opening and closing connection pool
- [ ] Add a load balancer


## Development instructions

1. Create a file called `env.json` and populate it with your database credentials, for example:

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

```bash
yarn global add nodemon         # install nodemon, optional
yarn [npm install]              # install dependencies
yarn dev                        # runs nodemon (process monitor)
[yarn start]                    # start server (without nodemon)
```


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

## Roadmap

#### Phase 1
- [ ] A new sensor can be registered
- [ ] JSON records can be received over HTTP
- [ ] Messages are pushed to Postgres/Timescale
- [ ] Messages can be retrieved from database by sensor/owner
- [ ] Historical data can be retrieved for a particular sensor

#### Phase 2
- [ ] Users of the web/native client can view graphs of historical data

#### Phase 3
- [ ] Sensors/Clients/MC's can connect securely over a websocket
- [ ] Clients can subscribe to particular sensors and receive live updates
- [ ] Users of the web/native client can view graphs of live-updating data

#### Phase 4
- [ ] Create a GraphQL API endpoint

#### Phase 5
- [ ] Add notifications / alerts


## Data Model

```
Client {
  id
  name
  lat
  lon
}

Sensor {
  id
  owner (id in Client)
  type ['temp' | 'humidity' | 'pH' | '']
}

Record {
  sensor_id (id in Sensor)
  time
  value
}
```


[database]: https://github.com/GreenfinityFarms/database
