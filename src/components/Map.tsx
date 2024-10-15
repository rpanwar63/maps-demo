import {
    DirectionsRenderer,
    DirectionsService,
    GoogleMap,
    InfoWindow,
    Marker,
    useJsApiLoader,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { IMarker, MARKERS } from "../constants";
const containerStyle = {
    width: "100%",
    height: "100vh",
};
type Props = {
    center: { lat: number; lng: number };
    directionSource: { lat: number; lng: number } | null;
    directionDestination: { lat: number; lng: number } | null;
};
const Map = ({ center, directionSource, directionDestination }: Props) => {
    const [infoWindowData, setInfoWindowData] = useState<IMarker | null>(null);
    const [directions, setDirections] =
        useState<google.maps.DirectionsResult | null>(null);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "",
    });
    const directionsCallback = (
        result: google.maps.DirectionsResult | null,
        status: google.maps.DirectionsStatus
    ) => {
        if (result) {
            if (result.routes.length) {
                if (status === "OK") {
                    setDirections(result);
                }
            }
        }
    };
    useEffect(() => {
        setDirections(null);
    }, [directionSource, directionDestination]);
    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
            {MARKERS.map(marker => (
                <Marker
                    key={marker.id}
                    title={marker.title}
                    icon={{
                        url: marker.markerIcon,
                    }}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => {
                        setInfoWindowData(marker);
                    }}
                ></Marker>
            ))}
            {infoWindowData && (
                <InfoWindow
                    position={{
                        lat: infoWindowData.lat,
                        lng: infoWindowData.lng,
                    }}
                    onCloseClick={() => setInfoWindowData(null)}
                >
                    <Box sx={{ width: 300, p: "8px" }}>
                        <img
                            src={infoWindowData.image}
                            alt={infoWindowData.title}
                            style={{
                                width: 284,
                                height: 200,
                                borderRadius: 10,
                            }}
                        />
                        <Typography variant="h5" sx={{ mb: 1, mt: 1 }}>
                            {infoWindowData.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1, mt: 1 }}>
                            {infoWindowData.description}
                        </Typography>
                    </Box>
                </InfoWindow>
            )}
            {directionDestination && directionSource && !directions ? (
                <DirectionsService
                    options={{
                        origin: directionSource,
                        destination: directionDestination,
                        travelMode: google.maps.TravelMode.DRIVING,
                    }}
                    callback={directionsCallback}
                />
            ) : (
                <></>
            )}
            {!!directions ? (
                <DirectionsRenderer directions={directions} />
            ) : (
                <></>
            )}
        </GoogleMap>
    ) : (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress />
        </Box>
    );
};
export default Map;
