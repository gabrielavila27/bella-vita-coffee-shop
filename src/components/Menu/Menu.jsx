import styles from './Menu.module.css'
import CardMenu from '../CardMenu/CardMenu'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-flip'
import {EffectFlip} from 'swiper/modules'

function Menu(){

    const data = [
        {id: 1, image: 'src/assets/images/pexels-chevanon-photography-302899.jpg', title: 'Cappuccino', text: 'Experimente a perfeição em uma xícara. Nosso Cappuccino é uma obra de arte, seja servido quente para abraçar sua alma ou gelado para refrescar seu paladar. A harmonia equilibrada entre café, leite e espuma vai transformar cada gole em uma experiência cativante.'},
        {id: 2, image: 'src/assets/images/tyler-nix-OPDy4nYsIQU-unsplash.jpg', title: 'Cold Brew', text: 'Uma revolução no mundo do café gelado. Nosso Cold Brew é preparado lentamente para extrair sabores suaves e robustos. Com notas acentuadas, é a escolha ideal para quem busca uma bebida refrescante, mas com toda a intensidade do café.'},
        {id: 3, image: 'src/assets/images/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg', title: 'Iced Latte', text: 'A combinação perfeita de café e frescor. Nosso Iced Latte é a resposta para os dias quentes. Café expresso suave sobre gelo, misturado com leite cremoso, resultando em uma bebida gelada que satisfaz o paladar e acalma os sentidos.'},
        {id: 4, image: 'src/assets/images/mae-mu-m9pzwmxm2rk-unsplash.jpg', title: 'Croissant', text: 'Uma viagem direto para Paris em cada mordida. Nossos croissants são amanteigados, dourados e irresistíveis. Com camadas crocantes e um interior macio, são o acompanhamento perfeito para seu café da manhã ou lanche.'},
        {id: 5, image: 'src/assets/images/beth-macdonald-V6LEV6CBVLw-unsplash.jpg', title: 'Cinnamon Rolls', text: 'Um abraço de canela em forma de espiral. Nossos Cinnamon Rolls são feitos com amor e canela, criando uma deliciosa combinação de doçura e especiarias. Prepare-se para uma explosão de sabor em cada mordida.'},
        {id: 6, image: 'src/assets/images/cake-2001781_1280.jpg', title: 'Bolo de Chocolate', text: 'Nosso Bolo de Chocolate é uma tentação irresistível. A textura macia e o sabor intenso do chocolate fazem dele a escolha perfeita para aqueles momentos em que você merece um deleite especial.'},
        {id: 7, image: 'src/assets/images/anastasiia-chepinska-qZ6uvJHLHFc-unsplash.jpg', title: 'Donut', text: 'Feitos com uma massa leve e fofa, essas deliciosas rosquinhas são cuidadosamente preparadas e cobertas com uma variedade de coberturas tentadoras. Desde o clássico esmalte de açúcar até os sabores mais inovadores, cada mordida é uma explosão de sabor.'}
    ]

    return(
        <section className={styles.sectionMenu} id='menu'>

            <div className={styles.divTxtMenu}>

                    <h2 className={styles.tituloMenu}>O Menu</h2>
               
             
                    <p className={styles.txtMenu}>
                        Bem-vindo à Cafeteria Bella Vita, onde cada xícara conta uma história de qualidade excepcional. Nossos cafés premium,
                         cuidadosamente selecionados e torrados, oferecem uma experiência única. Acompanhados por delícias gastronômicas artesanais,
                         nosso menu celebra a culinária como uma forma de arte. Em um ambiente acolhedor, cada detalhe foi pensado para aprimorar sua
                         experiência. Seja para uma pausa rápida ou uma reunião descontraída, a Bella Vita é mais do que uma cafeteria - é um convite
                         para saborear a vida com elegância e autenticidade.
                    </p>
     
            </div>

            <Swiper
                className={styles.swiperComponent}
                slidesPerView={1}
                navigation
                pagination
                modules={[EffectFlip]}
                effect='flip'
                autoplay={{delay: 3000, disableOnInteraction: true}}
            >
                {
                    data.map((item) => (
                        <SwiperSlide className={styles.swiperSlideComponent} key={item.id} >
                            <CardMenu  image={item.image} title={item.title} text={item.text} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    )
}
export default Menu