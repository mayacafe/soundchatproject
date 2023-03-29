import React, { useState, useCallback, useEffect } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
import HeaderBottamSection from "../compontes/header/HeaderBottamSection";
import FooterSection from "../compontes/layout/FooterSection";
import OwlCarousel from "react-owl-carousel";
import { NavLink } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from "axios";

export default function MediyGallery() {
  const { promiseInProgress } = usePromiseTracker();
  console.log(promiseInProgress)
  const state = {
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 2,
      },
      450: {
        items: 3,
      },
      767: {
        items: 4,
      },
      768: {
        items: 4,
      },
      991: {
        items: 5,
      },
      1200: {
        items: 8,
      },
    }
  };
  
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const photos = [];

  const [GalleryScroll, setGalleryScroll] = useState([]);
   const [GalleryImg, setGalleryImg] = useState([]);




  useEffect(() => {
    trackPromise(
    axios
      .post(`https://app.soundchatradio.com:3000/api/v1/auth/listgallery`)
      .then((response) => {
        setGalleryScroll(response.data.data);
        setGalleryImg(response.data.data[0].galleryimages);
      })
      .catch((error) => {
        console.log(error);
      })
    )
  }, []);

  for (let i = 0; i < GalleryImg.length; i++) {
    photos.push({src:"https://app.soundchatradio.com/soundradiobackend/images/gallery/"+GalleryImg[i].image_name,width: 2,
     height: 2,})
  }
  return (
    <>
      <HeaderBottamSection />
      <section className="bg-color">
      { (promiseInProgress === true) ?
               <div
               className="spinner"
               style={{
                 display: "flex",
                 justifyContent: "center",
                 alignIitems: "center",
               }}
             >
               <ThreeDots
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
             </div>
              :
            <>

        <div className="mediy-gallery-div">
          <div className="heading-h4-div">
            <h4>Mediy Gallery</h4>
          </div>
          <OwlCarousel
            items={3}
            className="owl-carousel owl-theme "
            // loop
            nav
            autoplay={true}
            dots={false}
            touchDrag={true}
            lazyLoad={true}
            responsive={state.responsive} // add this line
            margin={60}
          >
            {GalleryScroll.map((gallerydata) => {
              return (
                <>
                  <NavLink
                    // key={"/GalleryPage"}
                    // to="/GalleryPage"
                    // state={gallerydata.galleryimages}
                    onClick={()=>{
                      setGalleryImg(gallerydata.galleryimages)
                    }}
                  >
                    <div className="podcast-div"v>
                      <div className="podcast-img  effect-image-1 radious-effect radius-effct-next">
                        <img
                          src={
                            "https://app.soundchatradio.com/soundradiobackend/images/gallery/" +
                            gallerydata.feature_img
                          }
                          alt=""
                        />{" "}
                      </div>
                      <div className="podcast-box">
                        <h6>{gallerydata.post_title}</h6>
                        <p className="div-podcast">VIEW ALBUM</p>
                      </div>
                    </div>
                  </NavLink>
                </>
              );
            })}
          </OwlCarousel>
        </div>

        <div className="gallery">
          <div className="gallery-div">
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </div>
         </>}
      </section>
      <FooterSection />
    </>
  );
}
