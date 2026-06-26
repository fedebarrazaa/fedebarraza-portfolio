import { FloatingDock } from '../ui/floating-dock'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter  } from 'react-icons/fa6';
import style from '../../styles/section.module.css'


/*ICONOS*/
const links = [
  {
    title: "Linkedin",
    icon: <FaLinkedin className={style.icono} style={{ width: '100%', height: '100%' }}/>,
    href: "https://www.linkedin.com/in/federico-barraza/",
  },
  {
    title: "GitHub",
    icon: <FaGithub className={style.icono} style={{ width: '100%', height: '100%' }}/>,
    href: "https://github.com/fedebarrazaa",
  },
  {
    title: "Instragram",
    icon: <FaInstagram className={style.icono} style={{ width: '100%', height: '100%' }}/>,
    href: "https://www.instagram.com/fedebarraza__/",
  },
  {
    title: "Twitter",
    icon: <FaTwitter className={style.icono} style={{ width: '100%', height: '100%' }}/>,
    href: "https://x.com/fedebar__",
  }
];

export function DesingRedes(){
    return (
        <>
        <article className="w-full flex justify-center h-[10rem]">
    <div className="max-w-max mx-auto">
        <FloatingDock items={links} />
    </div>
</article>

        
        </>
    )
}