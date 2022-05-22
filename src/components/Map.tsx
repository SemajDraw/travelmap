import { useState } from 'react';
import {
    MapContainer, TileLayer, Marker, Popup
} from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

// Map Layer Urls
const mapLayerUrls = {
    satelite: 'https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}@2x.jpg?key=Anh4h0YsAYHxUN84Fy1a',
    pastelle: 'https://api.maptiler.com/maps/pastel/256/{z}/{x}/{y}@2x.png?key=Anh4h0YsAYHxUN84Fy1a',
    street: 'https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}@2x.png?key=Anh4h0YsAYHxUN84Fy1a'
}

export const Map = () => {

    const [center, setCenter] = useState<number[]>([53.350140, -6.266155]);

    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: '100vh', width: '80vw', borderRadius: '10px' }} >
            <TileLayer
                url={mapLayerUrls.satelite}
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            <Marker position={[53.350140, -6.266155]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer >
    )
}

export default Map