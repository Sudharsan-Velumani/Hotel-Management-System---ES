var elasticsearch = require("elasticsearch");
const fs = require("fs");
var client = new elasticsearch.Client({
    host: "localhost:9200",
    log: "trace",
    apiVersion: "7.2", // use the same version of your Elasticsearch instance
});