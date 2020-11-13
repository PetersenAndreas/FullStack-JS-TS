const express = require('express')
const app = express()
const gju = require('geojson-utils');
app.get('/', (req, res) => res.send('Geo Demo!'))

const players = require('./gameData.js').players;
const gameArea = require('./gameData.js').gameArea.geometry;

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/geoapi/isuserinarea/:lon/:lat', (req, res) => {
    const {lon, lat} = req.params
    const point = {"type":"Point","coordinates":[lon,lat]}

    const status = gju.pointInPolygon(point,gameArea);

    const msg = status ? "Point was inside the tested polygon" : "Point was NOT inside the tested polygon"
    const response = {
        status,
        msg
    }
    res.send(response)
})

app.get('/geoapi/findNearbyPlayers/:lon/:lat/:rad', (req, res) => {
    const {lon, lat, rad} = req.params
    const point = {"type":"Point","coordinates":[lon,lat]}
    const status = []
  
    for (var i in players) {
        if (gju.geometryWithinRadius(players[i].geometry, point, rad)) {
            status.push(players[i])
        }
    }
    res.send(status)
})

app.get('/geoapi/distanceToUser/:lon/:lat/:username', (req, res) => {
    const {lon, lat, username} = req.params
    const point = {"type":"Point","coordinates":[lon,lat]}
    
    let findUser = players.find((findUser) => {
        return findUser.properties.name == username
    })

    if(findUser == undefined) {
        res.statusCode = 404;
        res.send({
            "msg": "User not found"
        })
    }
    const playerDistance = gju.pointDistance(point, findUser.geometry)
    res.send({
        "distance": playerDistance,
        "to": username
    })
    
})