import DeckGL from 'deck.gl';
import React, { useState } from 'react';

import { PathLayer, ScatterplotLayer } from 'deck.gl';
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
  pitch: 60,
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

// Data to be used by the LineLayer

const TransitView = () => {
  const layer = new PathLayer({
    id: 'path-layer',
    data: '/bart-lines.json',
    pickable: true,
    widthScale: 20,
    widthMinPixels: 2,
    getPath: (d) => d.path,
    getWidth: (d) => 5,
    getColor: (d) => colorToRGBArray(d.color),
  });

  const { data, error } = useSWR('/api/transit', fetcher, { refreshInterval: 1100 });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

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
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={[scatterplot]}>
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
};

export default TransitView;
