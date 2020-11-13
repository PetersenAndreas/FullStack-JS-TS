//http://geojson.io/#map=15/55.7908/12.5649
const gameArea = {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                12.56561279296875,//Longitude
                55.798386318617226//Latitude
              ],
              [
                12.552223205566406,
                55.79143827447144
              ],
              [
                12.562179565429688,
                55.78313759712576
              ],
              [
                12.577972412109373,
                55.787770751411436
              ],
              [
                12.579689025878906,
                55.79510545223691
              ],
              [
                12.56561279296875,
                55.798386318617226
              ]
            ]
          ]
        }
}

const players = [{
      "type": "Feature",
      "properties": {
        "name": "John-outside"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.554798126220703,
          55.796263436639116
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Simone-outside"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.550077438354492,
          55.78815682273133
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"name": "Kim-inside"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.564926147460938,
          55.79433344350657
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"name": "Henning-inside"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.563209533691404,
          55.79114874573145
        ]
      }
    }
]
  
module.exports = {
    gameArea,
    players
}