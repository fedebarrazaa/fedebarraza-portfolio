import { Timeline } from '../ui/timeline'
import '../../styles/proyecto.module.css'

/*IMPORTACION DE IMG*/
import imgText from '../../assets/text/text.png'
import imgTextTwo from '../../assets/text/text-dos.png'

import imgIa from '../../assets/ia/ia-dos.png'
import imgIaTwo from '../../assets/ia/ia.png'
import imgIaThree from '../../assets/ia/ia-tres.png'

import imgTask from '../../assets/task/task.png'
import imgTaskTwo from '../../assets/task/task-dos.png'
import imgTaskThree from '../../assets/task/task-tres.png'
import imgTaskFour from  '../../assets/task/task-cuatro.png'
 
import imgPoke from '../../assets/poke/poke.png'
import imgPokeDos from '../../assets/poke/poke-dos.png'

import { BiSolidChevronRight } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";





 const data = [
    {
      title: "Notis Board",
      content: (
        <div>
          <p className="mb-8 text-sm text-gray-500 dark:text-neutral-500">  {/*mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200*/}
            Ordena tus tareas a tu manera. Estilo parecido a Trello, consiste en registrarte, confirmar tu 
            email y manejar tus tareas. Agregas las listas que quieras y ordena la cards a tu importancia.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={imgTask}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={imgTaskTwo}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={imgTaskThree}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={imgTaskFour}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mt-2 md:mt-4 w-full flex flex-row gap-4">
           <a 
            href='https://notis-board.vercel.app/' 
            target="_blank" 
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors duration-300">Demo <BiSolidChevronRight/></a>
           
           <a 
            href='https://github.com/fedebarrazaa/task-flow' 
            target="_blank" 
            className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-black hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg border border-white-500 transition-colors duration-300 ">Repo <FaGithub/></a>
           </div>
        </div>
      ),
    },
    {
      title: "Troki IA",
      content: (
        <div>
          <p className="mb-8 text-sm text-gray-500 dark:text-neutral-500">
            Un chat con IA para recolectar informacion. App con implementacion de API Key de Claude Code, 
            consiste en interactuar con la IA mediante un chat, hasta el momento solo respondes texto. Aclaracion: en 
            caso de no funcionar el chat es porque el proyecto se quedo sin tokens.
          </p>
          {/*<p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>*/}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={imgIa}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={imgIaTwo}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={imgIaThree}
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mt-2 md:mt-4 w-full flex flex-row gap-4">
           <a 
            href='https://ai-content-generator-beta-sable.vercel.app/' 
            target="_blank" 
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors duration-300">Demo <BiSolidChevronRight/></a>
           
           <a 
            href='https://github.com/fedebarrazaa/ai-content-generator' 
            target="_blank" 
            className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-black hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg border border-white-500 transition-colors duration-300">Repo <FaGithub/></a>
           </div>
        </div>
      ),
    },
    {
      title: "Text Scrambler",
      content: (
        <div>
          <p className="mb-8 text-sm text-gray-500 dark:text-neutral-500">
            Una herramienta interactiva para desordenar palabras y frases. El usuario podra ingresar 
            cualquier palabra o frase al input y se devolver el texto desornado.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={imgText}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={imgTextTwo}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mt-2 md:mt-4 w-full flex flex-row gap-4">
           <a 
            href='https://fedebarrazaa.github.io/text-scrambler/' 
            target="_blank" 
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors duration-300">Demo <BiSolidChevronRight/></a>
           
           <a 
            href='https://github.com/fedebarrazaa/text-scrambler' 
            target="_blank" 
            className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-black hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg border border-white-500 transition-colors duration-300">Repo <FaGithub/></a>
           </div>
        </div>
      ),
    },
    {
      title: "PokeScan",
      content: (
        <div>
          <p className="mb-8 text-sm text-gray-500 dark:text-neutral-500">
            Permite explorar Pokémon, ver su informacion: nombre, imagen, tipo, altura y peso. Solamente ingresa
            un numero o nombre al input y te devolvera la informacion. Esta hecho con la API oficial de Pokemon.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={imgPoke}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={imgPokeDos}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mt-2 md:mt-4 w-full flex flex-row gap-4">
           <a 
            href='https://fedebarrazaa.github.io/pokemon-api-app/' 
            target="_blank" 
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors duration-300">Demo <BiSolidChevronRight/></a>
           
           <a 
            href='https://github.com/fedebarrazaa/pokemon-api-app' 
            target="_blank" 
            className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-black hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg border border-white-500 transition-colors duration-300">Repo <FaGithub/></a>
           </div>
        </div>
      ),
    },
  ];


export function DesingProyects(){
    return(
        <>
        <Timeline data={data}/>
        </>
    )
}