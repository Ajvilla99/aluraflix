import React from 'react'
import Button from './Button'
import Cards from './Cards'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Categories = (props) => {

    const { name, description, color } = props.data
    const card = props.dataCards
    const changeStyle = { borderColor: color }

    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3.3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 2, 
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            initialSlide: 1,
            centerMode: false,
            slidesToShow: 1, 
            slidesToScroll: 1,
            },
          },
      ],
};

  return (
    <section className='w-full flex flex-col items-center gap-4 py-5'>
            <div className='w-full flex items-center gap-4 max-[450px]:flex-col max-[450px]:items-start'>
             <Button color={color} text={ name }/>
             <p className='text-white text-[18px] font-light max-[450px]:text-[14px]'>{description}</p>
             </div>
            <Slider {...settings} className='w-full flex flex-nowrap justify-start scroll-smooth overflow-hidden'>
              { card.map((img, index) => (
                  <Cards key={index} color={changeStyle} onClick={() => props.onClick(img)} src={img.urlImage} cardData={img}/>
                ))
              }
            </Slider>
          </section>
  )
}

export default Categories