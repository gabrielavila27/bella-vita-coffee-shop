import styles from './Slider.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {register} from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'



function Slider(){

    const data = [
        {id: '1', image: 'src/assets/images/pexels-afta-putta-gunawan-683039.jpg'},
        {id: '2', image: 'src/assets/images/pexels-viktoria-alipatova-2074130.jpg'},
        {id: '3', image: 'src/assets/images/pexels-nader-ayman-19286173.jpg'}
    ]


    return(
        <div className={styles.mainSwiper}>
            
            <Swiper 
            slidesPerView={1}
            pagination={{clickable: true}}
            // navigation
            className={styles.swiperComponent}
            autoplay={{delay: 3000, disableOnInteraction: true}}
            >
                {
                    data.map((item) => ( 
                        // O primeiro item dentro do map recebe a propriedade KEY
                        <SwiperSlide key={item.id}>
                            <img src={item.image}
                            alt='Foto cafeteria'
                            className={styles.swiperSlide}
                            />
                           
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Slider