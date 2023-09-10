import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };






      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
      return (
        <div className='w-full h-fit flex text-center align-center justify-center bg-slate-400 '>
          <div className='flex flex-col h-[60vh] max-w-[80%] justify-center align-center text-center '>
        <h2 className='text-black text-2xl font-bold mb-4'>Clients Testimonials</h2>
        <Slider {...settings}>
        {/* #183c71 */}
          <div className='py-[6%] bg-[#202020]  text-gray-300 border-l-8 border-r-8 border-[#021F49]'>
             <p className='text-2xl'>"They had deep understanding of our industry, which was fundamental to shaping our product."</p>
                    <div>
                       <p>Aaron A</p>
                       <p>Capabl – USA</p>
                   </div>
          </div>
          <div className='py-[6%]  bg-[#202020] text-gray-300 border-l-8 border-r-8 border-[#021F49]'>
             <p className='text-2xl'>"They had deep understanding of our industry, which was fundamental to shaping our product."</p>
                    <div>
                       <p>Aaron A</p>
                       <p>Capabl – USA</p>
                    </div>
          </div>
          <div className='py-[6%] bg-[#202020] text-gray-300  border-l-8 border-r-8 border-[#021F49]'>
             <p className='text-2xl'>"They had deep understanding of our industry, which was fundamental to shaping our product."</p>
                    <div>
                       <p>Aaron A</p>
                        <p>Capabl – USA</p>
                   </div>
          </div>
          <div className='py-[6%] bg-[#202020] text-gray-300 border-l-8  border-r-8 border-[#021F49] '>
             <p className='text-2xl'>"They had deep understanding of our industry, which was fundamental to shaping our product."</p>
                    <div>
                        <p>Aaron A</p>
                        <p>Capabl – USA</p>
                   </div>
          </div>
          
        </Slider>
      </div>
        </div>

    
       );
  
}

export default Testimonial