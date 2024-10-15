import {
    DirectionsRenderer,
    DirectionsService,
    GoogleMap,
    InfoWindow,
    Marker,
    useJsApiLoader,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import {
    Box,
    Button,
    CircularProgress,
    Divider,
    IconButton,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Typography,
} from "@mui/material";
import { IMarker, MARKERS, STEPS } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Add, Directions, Reviews, Save, Share } from "@mui/icons-material";
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
    // const [thumbsSwiper, setThumbsSwiper] = useState<any>();
    const [markerDir, setMarkerDir] = useState<
        { id: Number; directions: google.maps.DirectionsResult }[]
    >([]);
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
    const markerDirectionsCallback = (
        result: google.maps.DirectionsResult | null,
        status: google.maps.DirectionsStatus,
        id: number
    ) => {
        if (result) {
            if (result.routes.length) {
                if (status === "OK") {
                    setMarkerDir(prev => [
                        ...prev,
                        { id: id, directions: result },
                    ]);
                }
            }
        }
    };
    useEffect(() => {
        setDirections(null);
    }, [directionSource, directionDestination]);
    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
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
                >
                    {markerDir.find(item => item.id === marker.id) ? (
                        markerDir.find(item => item.id === marker.id) ? (
                            <DirectionsRenderer
                                directions={
                                    markerDir.find(
                                        item => item.id === marker.id
                                    )?.directions
                                }
                                options={{
                                    suppressMarkers: true,
                                    preserveViewport: true,
                                    polylineOptions: {
                                        strokeColor: marker.color,
                                        strokeWeight: 8,
                                    },
                                }}
                            />
                        ) : (
                            <></>
                        )
                    ) : (
                        <DirectionsService
                            options={{
                                origin: {
                                    lat: marker.nearby.lat,
                                    lng: marker.nearby.lng,
                                },
                                destination: {
                                    lat: marker.lat,
                                    lng: marker.lng,
                                },
                                travelMode: google.maps.TravelMode.DRIVING,
                            }}
                            callback={(r, s) => {
                                markerDirectionsCallback(r, s, marker.id);
                            }}
                        />
                    )}
                </Marker>
            ))}
            {infoWindowData && (
                <InfoWindow
                    position={{
                        lat: infoWindowData.lat,
                        lng: infoWindowData.lng,
                    }}
                    onCloseClick={() => setInfoWindowData(null)}
                >
                    <Box
                        sx={{
                            width: 300,
                            p: "8px",
                            maxHeight: "500px",
                            overflowX: "hidden",
                            overflowY: "auto",
                        }}
                        className="infowindow-content"
                    >
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation={true}
                            modules={[Navigation]}
                            style={{
                                borderRadius: 10,
                            }}
                        >
                            {infoWindowData.image.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={item}
                                        alt={infoWindowData.title}
                                        style={{
                                            width: 300,
                                            height: 200,
                                            objectFit: "cover",
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                            {infoWindowData?.video &&
                                infoWindowData.video.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <video
                                            src={item}
                                            style={{
                                                width: 300,
                                                height: 200,
                                                borderRadius: 10,
                                            }}
                                            controls
                                        />
                                    </SwiperSlide>
                                ))}
                        </Swiper>

                        <Typography variant="h5" sx={{ mb: 1, mt: 1 }}>
                            {infoWindowData.title}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ mb: 1, mt: 1 }}>
                            {infoWindowData.subtitle}
                        </Typography>
                        <Divider sx={{ mt: 2, mb: 2 }} />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <IconButton
                                sx={{
                                    background: "#36a0ff",
                                    ":hover": { background: "#36a0ff" },
                                }}
                            >
                                <Directions sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton
                                sx={{
                                    background: "#36a0ff",
                                    ":hover": { background: "#36a0ff" },
                                }}
                            >
                                <Save sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton
                                sx={{
                                    background: "#36a0ff",
                                    ":hover": { background: "#36a0ff" },
                                }}
                            >
                                <Reviews sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton
                                sx={{
                                    background: "#36a0ff",
                                    ":hover": { background: "#36a0ff" },
                                }}
                            >
                                <Add sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton
                                sx={{
                                    background: "#36a0ff",
                                    ":hover": { background: "#36a0ff" },
                                }}
                            >
                                <Share sx={{ color: "white" }} />
                            </IconButton>
                        </Box>
                        <Divider sx={{ mt: 2, mb: 2 }} />
                        <Typography variant="body2" sx={{ mb: 1, mt: 1 }}>
                            {infoWindowData.description}
                        </Typography>
                        <Divider sx={{ mt: 2, mb: 2 }} />
                        <Stepper
                            activeStep={infoWindowData.steps.length}
                            orientation="vertical"
                            sx={{ mb: 2 }}
                        >
                            {STEPS.map(step => (
                                <Step key={step.label}>
                                    <StepLabel>{step.label}</StepLabel>
                                    <StepContent>
                                        <Typography>
                                            {step.description}
                                        </Typography>
                                        <Box sx={{ mb: 2 }}>
                                            <Button
                                                variant="contained"
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Continue
                                            </Button>
                                        </Box>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
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
                <DirectionsRenderer
                    directions={directions}
                    options={{ preserveViewport: true }}
                />
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
