import './App.css'

import { Home } from './Home'
import { About } from './About'
import { Projects } from './Projects'
import { Contacts } from './Contacts'
import { SectionName } from './SectionName'
import { useEffect, useState } from 'react'

interface MousePosition {
  x: number;
  y: number;
}

export const App: React.FC = () => {
  {/* HANDLE CUSTOM ALERT */}

  {/* HANDLE GLOWING CIRCLE FOLLOWING THE CURSOR */}
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const style: React.CSSProperties = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundImage: `radial-gradient(800px circle at ${mousePosition.x }px ${mousePosition.y }px, rgba(255, 255, 255, 0.05), transparent 50%)`,
    zIndex: "-1",
  };

  return (
    <>
      <div className='circle invisible md:visible' style={style}></div>
      <div className='max-w-[1100px]'>
          <Home></Home>
          
          <SectionName sectionName='About me' emoji="&#128075;"></SectionName>
          <About></About>
          
          <SectionName sectionName='Featured Projects' emoji="&#128640;"></SectionName>
          <Projects></Projects>

          <SectionName sectionName='Contact me' emoji="&#128172;"></SectionName>
          <Contacts></Contacts>
      </div>
    </>
    
  )
}