import { BackgroundRippleEffect } from '../ui/background-ripple-effect'
import style from '../../styles/section.module.css'

export function DesingSection(){
    
    return (
        <>
        <section className={style.section}> 
            <BackgroundRippleEffect />
            <div className={style.section_div}> 
                <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500" style={{ color: '#7C3AED', fontSize: '16px', backgroundColor: '#7c3aed28', width: '240px', padding:'5px', border: '1px solid transparent', borderRadius:'2em', fontWeight:'600'}}>Disponible para trabajar </p>
                <h1 className="relative z-10  text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">Frontend Developer</h1>
                <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">Transformo ideas en aplicaciones web modernas utilizando React, TypeScript y tecnologías del ecosistema JavaScript.</p>
            </div>
            
        </section>
        </>
    )
}
