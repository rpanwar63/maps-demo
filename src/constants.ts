const pinRed = require("./assets/pin-red.png");
const pinGreen = require("./assets/pin-green.png");
const pinOrange = require("./assets/pin-orange.png");
// const pinBlue = require("./assets/pin-blue.png");
export type IMarker = {
    id: number;
    title: string;
    subtitle: string;
    markerIcon: any;
    description: string;
    image: string[];
    video?: string[];
    lat: number;
    lng: number;
    nearby: { lat: number; lng: number };
    steps: { id: number; status: "PENDING" | "DONE" }[];
    color: string;
};
export const STEPS = [
    {
        id: 1,
        label: "Site Visit",
        description: `Visit the site for verification.`,
    },
    {
        id: 2,
        label: "Phase 1",
        description: "Document verification & KYC.",
    },
    // {
    //     id: 3,
    //   label: 'Phase 2',
    //   description: '',
    // },
];
export const MARKERS: IMarker[] = [
    {
        id: 1,
        title: "JP Infra Mumbai Private Limited",
        subtitle: "Real Estate Builders & Construction Company",
        markerIcon: pinRed,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
            "https://lh5.googleusercontent.com/p/AF1QipPDbu63mUW229OX8Mc9qiAlXUghu57aZ5hAX1sP=w408-h544-k-no",
            "https://lh5.googleusercontent.com/p/AF1QipMDpiakckmQkMx5UEuHYs1hI8LuUkQZgpe64Ivv=w426-h240-k-no",
        ],
        video: [
            "https://r2---sn-qxaeen7l.googlevideo.com/videoplayback?expire=1729002326&ei=Nl8OZ6u7JKjfg8UPnaykkAo&ip=2405:201:4024:a0b2:2c9f:e237:b3a3:8bf2&id=497dbc3030ea497f&itag=18&source=picasa_otf&begin=0&requiressl=yes&xpc=Eghoy-b0JXoBAQ==&met=1728995126,&mh=Ry&mm=32&mn=sn-qxaeen7l&ms=su&mv=m&mvi=2&pl=49&rms=su,su&sc=yes&susc=ph&app=fife&ic=945&pcm2=yes&mime=video/mp4&vprv=1&prv=1&rqh=1&otf=1&otfp=1&dur=0.000&lmt=1662606923718413&mt=1728994846&cpn=mzxGMm0o-iIXykkh&txp=0010224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,app,ic,pcm2,mime,vprv,prv,rqh,otf,otfp,dur,lmt&sig=AJfQdSswRAIgasEMxD7H03N_jocMBRFYCSBfX9JelSNVA_IhaMceRuUCIC0OVSMif65pAUv1gnhHZC1xpIFiTyQJBANMJ7fPFRk4&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,sc&lsig=ACJ0pHgwRQIgfn2qzQNCLoaRBgzMlokhHLQSdsCtf3U_-4vyQq8S9HsCIQCpcSs6Fk0MRiHzDgqHNirJ8AOV6QVYRYlUl6K2Uv7YIg==",
        ],
        lat: 19.118443700550063,
        lng: 72.85595071682044,
        nearby: {
            lat: 19.12201891399205,
            lng: 72.85652624336313,
        },
        steps: [{ id: 1, status: "DONE" }],
        color: "#c64722",
    },
    {
        id: 2,
        title: "ATUL PROJECTS",
        subtitle: "Real Estate Builders & Construction Company",
        markerIcon: pinGreen,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
            "https://lh5.googleusercontent.com/p/AF1QipMD0K0Eg-rW_vTAGCJPyIcywG_k_yDqRAB0dufl=w648-h240-k-no",
            "https://lh5.googleusercontent.com/p/AF1QipPDbu63mUW229OX8Mc9qiAlXUghu57aZ5hAX1sP=w408-h544-k-no",
        ],
        lat: 19.111090149250053,
        lng: 72.85970679979637,
        nearby: {
            lat: 19.11100428064882,
            lng: 72.86146375950908,
        },
        steps: [
            { id: 1, status: "DONE" },
            { id: 2, status: "DONE" },
        ],
        color: "#287f59",
    },
    {
        id: 3,
        title: "New India Construction Company",
        subtitle: "Real Estate Builders & Construction Company",
        markerIcon: pinOrange,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: [
            "https://lh5.googleusercontent.com/p/AF1QipMDpiakckmQkMx5UEuHYs1hI8LuUkQZgpe64Ivv=w426-h240-k-no",
            "https://lh5.googleusercontent.com/p/AF1QipMD0K0Eg-rW_vTAGCJPyIcywG_k_yDqRAB0dufl=w648-h240-k-no",
            "https://lh5.googleusercontent.com/p/AF1QipPDbu63mUW229OX8Mc9qiAlXUghu57aZ5hAX1sP=w408-h544-k-no",
        ],
        lat: 19.118512117968415,
        lng: 72.8805839950509,
        nearby: {
            lat: 19.119279912516614,
            lng: 72.88026557622898,
        },
        steps: [],
        color: "#de9816",
    },
];
