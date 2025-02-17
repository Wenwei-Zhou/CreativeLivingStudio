import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageSlider.css";
import WEWESHOP from "../images/WEWESHOP.png"
import homepage from "../images/homepage.png"
import homepage2 from "../images/homepage2.png"


export const ImageSlider = () => {

  //const [currentSlide, setCurrentSlide] = useState(0);
  const [index, setIndex] = useState(0);

  const images = [WEWESHOP, homepage, homepage2];
  
  const imagesSize = [
    {width: '100%', height: '100%', position: 'relative'},
    {width: '100%', height: '100%', position: 'relative'},
    {width: '100%', height: '100%', position: 'relative'},
  ];


  useEffect(() => {
    if(index < 0)
      {
        setIndex(images.length - 1);
      }
    else if(index > images.length - 1)
      {
        setIndex(0);
      }
  }, [index, images.length]);

  useEffect(() => {
    let timer = setInterval(() => {
      setIndex(index + 1);
    }, 2500);
    return () => clearInterval(timer);
    }, [index]);

    function handlePrevious(){
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
        //if the current slide is at the first slide which is 0, then set the CurrentSlide equal to images.length - 1 which is the last slide. otherwide is currentSlide - 1 which is the pervious slide
    }

    function handleNext(){
        setIndex((nextIndex) => (nextIndex === images.length - 1 ? 0 : nextIndex + 1))
        //if the current slide is at the last slide which is images.length - 1, then set the CurrentSlide equal to 0 which is the first slide. otherwide is currentSlide + 1 which is the next slide
    }

  return(
    <div className="slider">
        <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
        />

      <img src={images[index]} alt={`Slide ${index}`} style={imagesSize[index]} className="slide-image"/>
      
      {/* {images.map((_, index) => {
          
      })} */}
      
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
    </div>
  )
}





// export default function ImageSlider() {

//     //const [images, setImages] = useState([]);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const images = [
//         <img src={creativeImage} alt="CREATIVELIVINGSTUDIO" />,
//         <img src={homepage} alt="homepage" />,
//         <img src={homepage2} alt="homepage2" />,
//     ];

//     async function fetchImages(getUrl){
//         try{
//             setLoading(true)

//             const response = await fetch('${getUrl}?page=${page}&limit=${limit}');
//             const data = await response.json();

//             if(data){
//                 setImages(data);
//                 setLoading(false);
//             }

//         }catch(e){
//             setErrorMsg(e.message);
//             setLoading(e.message);
//         }
//     }

//     useEffect(()=>{
//         if(url !== "") fetchImages(url);
        
//     },[url])

//     console.log(images);

    // function handlePrevious(){
    //     setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    //     //if the current slide is at the first slide which is 0, then set the CurrentSlide equal to images.length - 1 which is the last slide. otherwide is currentSlide - 1 which is the pervious slide
    // }

    // function handleNext(){
    //     setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    //     //if the current slide is at the last slide which is images.length - 1, then set the CurrentSlide equal to 0 which is the first slide. otherwide is currentSlide + 1 which is the next slide
    // }

//     if(loading) {
//         return <div>Loading data! Please wait</div>
//     }

//     if(errorMsg !== null) {
//         return <div>Error occured ! {errorMsg}</div>
//     }

//     return <div className="container">


//             <BsArrowLeftCircleFill
//         onClick={handlePrevious}
//         className="arrow arrow-left"
//       />
//       {images && images.length
//         ? images.map((imageItem, index) => (
//             <img
//               key={imageItem.id}
//               alt={imageItem.alt}
//               src={imageItem.src}
//               className={
//                 currentSlide === index
//                   ? "current-image"
//                   : "current-image hide-current-image"
//               }
//             />
//           ))
//         : null}
//       <BsArrowRightCircleFill
//         onClick={handleNext}
//         className="arrow arrow-right"
//       />
//       <span className="circle-indicators">
//         {images && images.length
//           ? images.map((_, index) => (
//               <button
//                 key={index}
//                 className={
//                   currentSlide === index
//                     ? "current-indicator"
//                     : "current-indicator inactive-indicator"
//                 }
//                 onClick={() => setCurrentSlide(index)}
//               ></button>
//             ))
//           : null}
//       </span>
//     </div>
// }