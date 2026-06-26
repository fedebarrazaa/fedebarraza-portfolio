import { TypewriterEffect } from '../ui/typewriter-effect'
import { useState } from 'react'

//import style from '../../styles/work.module.css'


const words = [
    {
      text: "Trabajemos",
    },
    {
      text: "juntos.",
    },
    {
      text: "Creemos",
    },
    {
      text: "algo",
    },
    {
      text: "increible.",
      className: "text-violet-500 dark:text-violet-500", //antes blue x red
    },
]


export function DesingWork() {
    const email = "fedebarraza97@gmail.com"
    const [showemail, setShowEmail] = useState<boolean>(false)

    const handleClick = () => {
    setShowEmail(!showemail)
    } 

    return (
        <>
        <div className="flex flex-col items-center justify-center h-[20rem] text-center">
         <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base text-center px-4">
          ¿Tenés una idea?
         </p>
        <TypewriterEffect words={words}   className="w-full flex justify-center"
/>
        <div className="flex flex-col items-center">
        <button 
         className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm cursor-pointer mt-4" 
         onClick={handleClick} style={{backgroundColor: 'transparent', color:'#7C3AED', fontWeight:'600', border:'1px solid #7C3AED'}}>
         Mostrar email
        </button>
  
        <div className={`transition-all duration-300 ease-out transform ${
        showemail ? "opacity-100 translate-y-0 max-h-10" : "opacity-0 -translate-y-2 max-h-0 overflow-hidden"}`}>
       <p className="text-gray-700 dark:text-gray-300">{email}</p>
       </div>
</div>

    </div>    
        </>
    )
}


      //  ¿Tenés una idea? ¿queres hacer una landing page? o ¿simplemente un form?
