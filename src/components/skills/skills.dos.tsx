import { FloatingDock } from "../ui/floating-dock";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter  } from 'react-icons/fa6';
import style from '../../styles/section.module.css'

/*ICONOS*/
const links = [
  {
    title: "Linkedin",
    icon: <FaLinkedin className={style.icono}/>,
    href: "https://www.linkedin.com/in/federico-barraza/",
  },
  {
    title: "GitHub",
    icon: <FaGithub className={style.icono}/>,
    href: "https://github.com/fedebarrazaa",
  },
  {
    title: "Instragram",
    icon: <FaInstagram className={style.icono}/>,
    href: "https://www.instagram.com/fedebarraza__/",
  },
  {
    title: "Twitter",
    icon: <FaTwitter className={style.icono}/>,
    href: "https://x.com/fedebar__",
  }
];

export function DesingSkillDos(){ 
    return(
        <> 
        <FloatingDock items={links}/>
        </>
    )
}