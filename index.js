
// 1.import json-server
const jsonServer = require("json-server")

// 2. Create Server for running Json file
const RBServer = jsonServer.create()

// 3.set up 
const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

const PORT = 3000

RBServer.use(middleware)
RBServer.use(router)

RBServer.listen(PORT, () => {
    console.log(`Server started at PORT : ${PORT}`);
})