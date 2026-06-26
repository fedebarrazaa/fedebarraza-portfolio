import { AnimatedTestimonials } from '../ui/animated-testimonials'

import imgPerfil from '../../assets/imagenes/foto.png'
import imgPerfilDos from '../../assets/imagenes/foto-toy.png'

const testimonials = [{
    quote:
        "Soy desarrollador Frontend especializado en React, TypeScript y JavaScript. Me apasiona crear interfaces modernas, responsivas y enfocadas en brindar una excelente experiencia de usuario.",
      name: "Fede Barraza",
      designation: "Front-End Development",
      src: imgPerfil,
},
{
    quote:
        "Hincha de River y fanatico de Messi. Disfruto de pasar el tiempo con mis amigos, entrenar y jugar al CS.",
      name: "Fefa",
      designation: "Yo",
      src: imgPerfilDos,

}
]


export function DesingAbout(){
    return(
        <>
        <AnimatedTestimonials testimonials={testimonials} />
        </>
    )
}