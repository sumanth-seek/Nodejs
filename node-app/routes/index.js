const routes = require('express').Router();
const node = require('./passenger');

routes.get("/getAllRoles", node.getAllRoles);
routes.get("/hc", node.getHealthCheck);
routes.post("/proxyTest", node.proxyTest)
// routes.get("/app", node.getApplications)

module.exports = routes;