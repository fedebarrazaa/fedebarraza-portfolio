/*
IMPORTO: 
1. ROUTER SI VA A VER o SIMPLEMENTES IMPORTO LAS PAGES 
*/
//import { DesingHeader } from './components/header/header'
import { DesingSection } from './components/section/section'
import { DesingAbout } from './components/about/about'
import { DesingProyects } from './components/proyects/proyects'
import { DesingSkill } from './components/skills/skills'
import {DesingWork} from './components/work-us/work'
import { DesingRedes } from './components/redes/redes'
import {DesingFooter} from './components/footer/footer'
import AnimatedCursor from "react-animated-cursor"




function App() {
  return (
    <>
   <div className="p-10">
    <DesingSection /></div>
  <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  innerStyle={{ backgroundColor: '#7C3AED' }}
  outerStyle={{ border: '2px solid #7C3AED' }}
/>
    <DesingAbout />
      <DesingSkill />{/* */} 
    <DesingProyects />  
    <DesingWork />
     <DesingRedes />
    <DesingFooter />
    </>
  )
}

export default App
