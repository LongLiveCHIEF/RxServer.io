# RxServer.io

A Reactive, real-tim, asynchronously composable socket.io and http server

I wanted a server that:

- did not require you to compose or configure before startup
- allows the addition and removal of server configurations/extensions after startup,
without requiring a restart
- allows modularization and isolation of server components, such that application design is up to the developer
- doesn't try to fit real-time two-way communication methods to try to fit into the http request/response
lifecycle paradigm
- makes it easy to use reactive, functional javascript techniques to handle all events

For example:

- Defining auth strategies shouldn't have to be defined either before or after startup, but whenever it makes sense
for the application developer to register them
- auth strategies can be applied at a "global" level, and either ignored, or overriden within server modules
