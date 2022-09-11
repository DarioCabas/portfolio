import React, { FC, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { MapContainer, Circle, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import { Card } from '@mui/material';

interface PropMap {
  coordinates: LatLngTuple
  zoom: number
}

const Map: FC<PropMap> = (props) => {
  const { coordinates, zoom } = props
  const theme = useTheme();
  const position = coordinates;
  const fillBlueOptions = { fillColor: theme.palette.primary.main };
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      setInterval(function () {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);

  return (
    <Card>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        whenReady={() => setMap}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Circle
          center={position}
          pathOptions={fillBlueOptions}
          radius={50}
        />
      </MapContainer>
    </Card>

  );
};
export default Map;