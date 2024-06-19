// import { Pane } from "tweakpane";
import * as mapblibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./main.css";

function main() {
  const style = {
    id: "raster",
    version: 8,
    name: "Raster style",
    center: [0, 0],
    zoom: 0,
    sources: {
      "raster-tiles": {
        type: "raster",
        tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
        minzoom: 0,
        maxzoom: 19,
      },
    },
    layers: [
      {
        id: "background",
        type: "background",
        paint: {
          "background-color": "#ff0000",
          "background-opacity": 0.5,
        },
      },
      {
        id: "simple-tiles",
        type: "raster",
        source: "raster-tiles",
      },
    ],
  };

  const map = new maplibregl.Map({
    container: "map",
    // style:
    // "https://api.maptiler.com/maps/backdrop/style.json?key=mpMljMg7hFdFp6ez02pj", // style URL
    style: style,
    // "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
    center: [30.3, 60],
    zoom: 15,
  });

  map.on("load", () => {
    map.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            [30.3, 60],
            [30.3, 61],
            [30.5, 60],
          ],
        },
      },
    });
    map.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#FF0000",
        "line-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          // zoom is 5 (or less) -> circle radius will be 1px
          5,
          0,
          // zoom is 10 (or greater) -> circle radius will be 5px
          6,
          1,
        ],
        "line-width": 8,
      },
    });
  });
}

window.addEventListener("load", () => {
  main();
});
