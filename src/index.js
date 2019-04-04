import "./index.css"
import * as d3 from "d3"

fetch(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
)
  .then(response => response.json())
  .then(data => {
    let DATA = data
    d3DisplayData(DATA)
  })

let d3DisplayData = DATA => {
  console.log("this is the data", DATA)
}
