const planeIcon = require("./assets/plane.png");
const trainIcon = require("./assets/train.png");
export type IMarker = {
    id: number;
    title: string;
    markerIcon: any;
    description: string;
    image: string;
    lat: number;
    lng: number;
};
export const MARKERS: IMarker[] = [
    {
        id: 1,
        title: "Delhi Airport",
        markerIcon: planeIcon,
        description:
            "Indira Gandhi International Airport (IATA: DEL, ICAO: VIDP) is the primary international airport serving New Delhi, the capital of India, and the National Capital Region (NCR).",
        image: "https://imgs.search.brave.com/pSIMgMCOSpERF8cITFAjTJweJ-GtbXNV2GuDg4I-734/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/MzMwNDA1Ny9waG90/by9pbmRpcmEtZ2Fu/ZGhpLWludGVybmF0/aW9uYWwtYWlycG9y/dC1pbi1uZXctZGVs/aGktaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUdY/ZGI1NGQ2ZEp2Nmt2/UlpwVW15Z2FVTFVu/T1JNNTBZRGlRWjdf/eDdkWTg9",
        lat: 28.5561624,
        lng: 77.0999578,
    },
    {
        id: 2,
        title: "Mumbai Airport",
        markerIcon: planeIcon,
        description:
            "Indira Gandhi International Airport (IATA: DEL, ICAO: VIDP) is the primary international airport serving New Delhi, the capital of India, and the National Capital Region (NCR).",
        image: "https://imgs.search.brave.com/pSIMgMCOSpERF8cITFAjTJweJ-GtbXNV2GuDg4I-734/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/MzMwNDA1Ny9waG90/by9pbmRpcmEtZ2Fu/ZGhpLWludGVybmF0/aW9uYWwtYWlycG9y/dC1pbi1uZXctZGVs/aGktaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUdY/ZGI1NGQ2ZEp2Nmt2/UlpwVW15Z2FVTFVu/T1JNNTBZRGlRWjdf/eDdkWTg9",
        lat: 19.0902,
        lng: 72.8628,
    },
    {
        id: 3,
        title: "Chennai Airport",
        markerIcon: planeIcon,
        description:
            "Indira Gandhi International Airport (IATA: DEL, ICAO: VIDP) is the primary international airport serving New Delhi, the capital of India, and the National Capital Region (NCR).",
        image: "https://imgs.search.brave.com/pSIMgMCOSpERF8cITFAjTJweJ-GtbXNV2GuDg4I-734/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/MzMwNDA1Ny9waG90/by9pbmRpcmEtZ2Fu/ZGhpLWludGVybmF0/aW9uYWwtYWlycG9y/dC1pbi1uZXctZGVs/aGktaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUdY/ZGI1NGQ2ZEp2Nmt2/UlpwVW15Z2FVTFVu/T1JNNTBZRGlRWjdf/eDdkWTg9",
        lat: 12.9822,
        lng: 80.1642,
    },
    {
        id: 4,
        title: "Lucknow Railway Station",
        markerIcon: trainIcon,
        description:
            "Indira Gandhi International Airport (IATA: DEL, ICAO: VIDP) is the primary international airport serving New Delhi, the capital of India, and the National Capital Region (NCR).",
        image: "https://imgs.search.brave.com/pSIMgMCOSpERF8cITFAjTJweJ-GtbXNV2GuDg4I-734/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/MzMwNDA1Ny9waG90/by9pbmRpcmEtZ2Fu/ZGhpLWludGVybmF0/aW9uYWwtYWlycG9y/dC1pbi1uZXctZGVs/aGktaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUdY/ZGI1NGQ2ZEp2Nmt2/UlpwVW15Z2FVTFVu/T1JNNTBZRGlRWjdf/eDdkWTg9",
        lat: 26.8311,
        lng: 80.9244,
    },
];
