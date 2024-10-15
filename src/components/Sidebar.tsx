import { Autocomplete, Paper, TextField, Typography } from "@mui/material";
import styles from "./Sidebar.module.css";
import { useState } from "react";
import { IMarker, MARKERS } from "../constants";
type Props = {
    updateDirectionSource: (
        source: { lat: number; long: number } | null
    ) => void;
    updateDirectionDestination: (
        source: { lat: number; long: number } | null
    ) => void;
};
const Sidebar = ({
    updateDirectionSource,
    updateDirectionDestination,
}: Props) => {
    const [source, setSource] = useState<IMarker>();
    const [direction, setDirection] = useState<IMarker>();
    return (
        <Paper className={styles.sidebar}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Find Routes
            </Typography>
            <Autocomplete
                fullWidth
                disablePortal
                options={[
                    { id: 0, title: "Current Location", lat: 0, lng: 0 },
                    ...MARKERS,
                ].filter(item => item.id !== Number(direction?.id))}
                renderInput={params => <TextField {...params} label="Source" />}
                getOptionLabel={option => option.title}
                value={source}
                onChange={(_default, val) => {
                    setSource(val ? (val as IMarker) : undefined);
                    if (val?.id === 0) {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(pos => {
                                updateDirectionSource({
                                    lat: pos.coords.latitude,
                                    long: pos.coords.longitude,
                                });
                            });
                        }
                        return;
                    }
                    updateDirectionSource(
                        val ? { lat: val.lat, long: val.lng } : null
                    );
                }}
            />
            <Autocomplete
                sx={{ mt: 2 }}
                fullWidth
                disablePortal
                options={[
                    { id: 0, title: "Current Location", lat: 0, lng: 0 },
                    ...MARKERS,
                ].filter(item => item.id !== Number(source?.id))}
                renderInput={params => (
                    <TextField {...params} label="Destination" />
                )}
                getOptionLabel={option => option.title}
                value={source}
                onChange={(_default, val) => {
                    setDirection(val ? (val as IMarker) : undefined);
                    if (val?.id === 0) {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(pos => {
                                updateDirectionDestination({
                                    lat: pos.coords.latitude,
                                    long: pos.coords.longitude,
                                });
                            });
                        }
                        return;
                    }
                    updateDirectionDestination(
                        val ? { lat: val.lat, long: val.lng } : null
                    );
                }}
            />
        </Paper>
    );
};
export default Sidebar;
