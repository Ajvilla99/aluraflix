import React from 'react'
import Button from './Button'
import Cards from './Cards'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Categories = (props) => {

    const { name, description, color } = props.data
    const card = props.dataCards
    const changeStyle = { borderColor: color }

    const breakpoints = {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
    }


  return (
    <section className='w-full flex flex-col items-center gap-4 py-5'>
            <div className='w-full flex items-center gap-4 max-[450px]:flex-col max-[450px]:items-start'>
             <Button color={color} text={ name }/>
             <p className='text-white text-[18px] font-light max-[450px]:text-[14px]'>{description}</p>
             </div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              breakpoints={breakpoints}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className='flex flex-row w-full'
             >
              { card.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Cards color={changeStyle} onClick={() => props.onClick(img)} src={img.urlImage} cardData={img}/>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            {/* </Slider> */}
          </section>
  )
}

export default Categories