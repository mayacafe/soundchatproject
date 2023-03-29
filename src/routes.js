import React from "react";
import "./App.css";
import "swiper/css";
import App from "../src/compontes/container/App";
import "swiper/css";
import "swiper/css/pagination";
import "../src/asstes/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-lightbox/style.css";
import Podcat from "./pages/Podcat";
import Shop from "./pages/Shop";
import ProductDetails from "./compontes/shop/ProductDetails";
import RecapTV from "../src/pages/RecapTV";
import Interview from "./pages/Interview";
// import MawninVibes from "./compontes/viewmorepages/MawninVibes";
// import SoundchatTalkOne from "./compontes/viewmorepages/SoundchatTalkOne";
// import WinnerCircle from "./compontes/viewmorepages/WinnerCircle";
// import TalkAnythinkFri from "./compontes/viewmorepages/TalkAnythinkFri";
// import SupaFridge from "./compontes/viewmorepages/SupaFridge";
// import SoundchatTvRandom from "./compontes/viewmorepages/SoundchatTvRandom";
// import TimeTravelSeries from "./compontes/viewmorepages/TimeTravelSeries";
// import ShoundchatTalkTow from "./compontes/viewmorepages/ShoundchatTalkTow";
// import MawninVibesVideoOne from "./compontes/RecapVideoSection/mawninvibesvideopages/MawninVibesVideoOne";
// import SoundChatTalkShowMonday from "./compontes/RecapVideoSection/soundchattalkshowmonday/SoundChatTalkShowMonday";
// import TimeTravelSeriesVideo from "./compontes/RecapVideoSection/timetervalserise/TimeTravelSeriesVideo";
// import SoundChatRandomOne from "./compontes/RecapVideoSection/shoundchatrandom/SoundChatRandomOne";
// import SoundChatTalkShowVideo from "./compontes/RecapVideoSection/soundchattalkshow/SoundChatTalkShowVideo";
// import TalkAnythingFridaysVideo from "./compontes/RecapVideoSection/talkanythingfridaysvideo/TalkAnythingFridaysVideo";
// import SupafridgeVideo from "./compontes/RecapVideoSection/supafridgevideo/SupafridgeVideo";
// import WinnersCircleSportsVideo from "./compontes/RecapVideoSection/winnerscirclesportsvideo/WinnersCircleSportsVideo";
import RecapTVShowsVideo from "./compontes/RecapVideoSection/latestrecaptvshows/RecapTVShowsVideo";
import MediyGallery from "./pages/MediyGallery";
import Listen from "./pages/Listen";
import Contact from "./pages/Contact";
// import Events from "./compontes/InterviewVideoSection/Events";
// import InStudio from "./compontes/InterviewVideoSection/InStudio";
// import YellowTent from "./compontes/InterviewVideoSection/YellowTent";
import SoundSystemCulture from "./compontes/InterviewVideoSection/SoundSystemCulture";
// import PhoneInterview from "./compontes/InterviewVideoSection/PhoneInterview";
// import LatestInterviewVideo from "./compontes/InterviewVideoPages/LatestInterviewVideo";
import SoundSystemViewVideo from "./compontes/InterviewVideoPages/SoundSystemViewVideo";
import Watch from "./pages/Watch";
import Login from "./pages/Login";
import GalleryPage from "./compontes/gallery/GalleryPage";
import { useRoutes } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import RecapViewMoreVideo from "./compontes/viewmorepages/RecapViewMoreVideo";



export default function Router() {
  return useRoutes([
    { path: "/", element: <App /> },
    { path: "/RecapTV", element: <RecapTV /> },
    // { path: "/MawninVibes", element: <MawninVibes /> },
    // { path: "/SoundchatTalkOne", element: <SoundchatTalkOne /> },
    // { path: "/WinnerCircle", element: <WinnerCircle /> },
    // { path: "/TalkAnythinkFri", element: <TalkAnythinkFri /> },
    // { path: "/SupaFridge", element: <SupaFridge /> },
    // { path: "/SoundchatTvRandom", element: <SoundchatTvRandom /> },
    // { path: "/TimeTravelSeries", element: <TimeTravelSeries /> },
    // { path: "/ShoundchatTalkTow", element: <ShoundchatTalkTow /> },
    // { path: "/MawninVibesVideoOne", element: <MawninVibesVideoOne /> },
    // { path: "/SoundChatTalkShowMonday", element: <SoundChatTalkShowMonday /> },
    // { path: "/TimeTravelSeriesVideo", element: <TimeTravelSeriesVideo /> },
    // { path: "/SoundChatRandomOne", element: <SoundChatRandomOne /> },
    // { path: "/SoundChatTalkShowVideo", element: <SoundChatTalkShowVideo /> },
    // //{
    //   path: "/TalkAnythingFridaysVideo",
    //   element: <TalkAnythingFridaysVideo />,
    // },
    // { path: "/SupafridgeVideo", element: <SupafridgeVideo /> },
    // {
    //   path: "/WinnersCircleSportsVideo",
    //   element: <WinnersCircleSportsVideo />,
    // },
    { path: "/RecapTVShowsVideo", element: <RecapTVShowsVideo /> },
    {path:"/RecapViewMoreVideo",element:<RecapViewMoreVideo/>},
    { path: "/Shop", element: <Shop /> },
    { path: "/ProductDetails", element: <ProductDetails /> },
    { path: "/Interview", element: <Interview /> },
    { path: "/Podcat", element: <Podcat /> },
    { path: "/MediyGallery", element: <MediyGallery /> },
    { path: "/Listen", element: <Listen /> },
    { path: "/Contact", element: <Contact /> },
    // { path: "/Events", element: <Events /> },
    // { path: "/InStudio", element: <InStudio /> },
    // { path: "/YellowTent", element: <YellowTent /> },
    { path: "/SoundSystemCulture", element: <SoundSystemCulture /> },
    {path:"/SoundSystemViewVideo",element:<SoundSystemViewVideo/>},
    // { path: "/PhoneInterview", element: <PhoneInterview /> },
    // { path: "/LatestInterviewVideo", element: <LatestInterviewVideo /> },
    { path: "/Watch", element: <Watch /> },
    { path: "/Login", element: <Login /> },
    { path: "/GalleryPage", element: <GalleryPage /> },
    { path: "/Cart", element: <Cart /> },
    {path:"/Checkout",element:<Checkout/>},
    {path:"/Register",element:<Register/>},
   

  ]);
}
