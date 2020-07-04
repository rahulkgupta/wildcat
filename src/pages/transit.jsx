import DeckGL from 'deck.gl';
import React, { useState } from 'react';

import { ScatterplotLayer, PathLayer } from 'deck.gl';
import { StaticMap } from 'react-map-gl';
import { rgb } from 'd3-color';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoicmFodWxrZ3VwdGEiLCJhIjoiY2lmZnQ5c24yOHd2cXJzbTd5d3E1MWZsMiJ9.4LRii51YrsWrPkIJstIE0A';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.30669,
  latitude: 37.7853,
  zoom: 12,
  pitch: 40,
  bearing: 0,
};

function colorToRGBArray(color) {
  if (!color) {
    return [255, 255, 255, 0];
  }
  if (Array.isArray(color)) {
    return color.slice(0, 4);
  }
  const c = rgb(color);
  return [c.r, c.g, c.b, 255];
}
let switcher = true;
setInterval(() => {
  switcher = !switcher;
}, 1000);

const initialTimeStamp = Date.now();
function getData(results, initialTimeStamp) {
  const { data, error } = useSWR('/api/transit', fetcher, { refreshInterval: 1100 });
  // data input format
  // {id: {coordinates: []}}
  for (const num in results) {
    const id = results[num].id;
    if (!data[id]) {
      console.log(results[num]);
    } else {
      const path = results[num].path;
      const lastCoordinates = path[path.length - 1];
      if (lastCoordinates[0] != data[id].coordinates[0] || lastCoordinates[1] != data[id].coordinates[1]) {
        results[num].path.push(data[id].coordinates);
        results[num].timestamps.push(Date.now() - initialTimeStamp);
      }
    }
  }
  if (results.length == 0) {
    for (const id in data) {
      results.push({
        id: id,
        path: [data[id].coordinates],
        timestamps: [0],
      });
    }
  }
  // setResults(results);
  // final trip layer
  // [ { path: [], timestamps: [], id:...}, ...]

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

const results = [];
const TransitView = () => {
  const { data, error } = getData(results, initialTimeStamp);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  data[Symbol.iterator] = function* () {
    for (const key in this) {
      yield this[key]; // yield [key, value] pair
    }
  };

  const layer = new PathLayer({
    id: 'path-layer',
    data: results,
    pickable: true,
    widthScale: 20,
    widthMinPixels: 2,
    getPath: (d) => {
      return d.path;
    },
    dataComparator: (newData, oldData) => {
      return false;
    },
  });

  const scatterplot = new ScatterplotLayer({
    id: 'scatterplot-layer',
    data: data,
    pickable: true,
    opacity: 0.5,
    stroked: true,
    filled: true,
    getRadius: 25,
    lineWidthMinPixels: 3,
    getPosition: (d) => {
      return d.coordinates;
    },
    getFillColor: (d) => [0, 0, 0],
    getLineColor: (d) => [0, 0, 0],
    transitions: {
      getRadius: {
        duration: 500,
      },
    },
  });

  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={[layer, scatterplot]}>
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
};

export default TransitView;
