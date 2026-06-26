import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import { FaGithub, FaHtml5, FaCss3Alt , FaReact,  FaFigma } from 'react-icons/fa6';
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";

const testimonials = [
  {
    icon: <FaHtml5 />,
  },
  {
    icon: <FaCss3Alt  />,
  },
  {
    icon: <SiJavascript  />,
  },
  {
    icon: <SiTypescript  />,
  },
  {
    icon: <FaReact />,
  },
  {
    icon: <RiSupabaseFill />,
  },
  {
    icon: <IoLogoVercel />,
  },
  {
    icon: <FaGithub />,
  },
  {
    icon: <FaFigma />,
  },


];

export function DesingSkill(){
    return(
        <>
        <section className="w-full flex flex-col items-center justify-center py-10"> 
          <InfiniteMovingCards items={testimonials}
        direction="right"
        speed="slow"/>
        </section>
        
        </>
    )
}



/*
-----ORIGINAL-------
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];




*/ 
