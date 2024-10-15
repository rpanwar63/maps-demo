import { useState } from "react";
import "./App.css";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
export type MarkerType = {
    id: number;
    cord: { lat: number; long: number };
    text: string;
};
const defaultCenter = {
    lat: 19.117372778034447,
    lng: 72.86934443447336,
};
export type Markers = MarkerType[];
function App() {
    const [dirSource, setDirSource] = useState<{
        lat: number;
        lng: number;
    } | null>(null);
    const [dirDestination, setDirDestination] = useState<{
        lat: number;
        lng: number;
    } | null>(null);
    const updateDirectionSource = (
        source: { lat: number; long: number } | null
    ) => {
        setDirSource(source ? { lat: source.lat, lng: source.long } : null);
    };
    const updateDirectionDestination = (
        source: { lat: number; long: number } | null
    ) => {
        setDirDestination(
            source ? { lat: source.lat, lng: source.long } : null
        );
    };
    return (
        <div className="App">
            <Sidebar
                updateDirectionSource={updateDirectionSource}
                updateDirectionDestination={updateDirectionDestination}
            />
            <Map
                center={defaultCenter}
                directionSource={dirSource}
                directionDestination={dirDestination}
            />
        </div>
    );
}

export default App;
