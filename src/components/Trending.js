import React from 'react'
import Slider from "react-slick";
import './trending.css'


const Trending = () => {
    const settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 6,
        slidesToScroll: 1,
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
    return (
        <>
            <div className="container-fluid shadow-lg mt-4 mb-3 py-5">
                <Slider {...settings}>
                    <div>
                        <img src="./images/item1.jpg" className="img-fluid custom-img" alt="" />
                    </div>
                    <div>
                        <img src="./images/item2.jpg" className="img-fluid custom-img" alt="" />
                    </div>
                    <div>
                        <img src="./images/item3.jpg" className="img-fluid custom-img" alt="" />
                    </div>
                    <div>
                        <img src="./images/item4.jpg" className="img-fluid custom-img" alt="" />
                    </div>
                    <div>
                        <img src="./images/item5.jpg" className="img-fluid custom-img" alt="" />
                    </div>
                    <div>
                        <img src="./images/item6.jpg" className="img-fluid custom-img" alt="" />
                    </div>
                    <div>
                        <img src="./images/item2.jpg" className="img-fluid custom-img" alt="" />
                    </div>
                    <div>
                        <img src="./images/item3.jpg" className="img-fluid custom-img" alt="" />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Trending
