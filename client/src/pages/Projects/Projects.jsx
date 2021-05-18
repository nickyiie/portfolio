import { useState } from 'react';
import {BsArrowRight} from 'react-icons/bs';
import './Projects.scss';

function Projects() {
  const [main, setMain] = useState(true)
  const [workOne, setWorkOne] = useState(false);
  const [workTwo, setWorkTwo] = useState(false);
  const [workThree, setWorkThree] = useState(false);
  const [workFour, setWorkFour] = useState(false);

  const toggleOne = () => {
    setMain(false)
    setWorkOne(!workOne)
    setWorkTwo(false)
    setWorkThree(false)
    setWorkFour(false)    
}

const toggleTwo = () => {
    setMain(false)
    setWorkOne(false)
    setWorkTwo(!workTwo)
    setWorkThree(false)
    setWorkFour(false)  
}

const toggleThree = () => {
    setMain(false)
    setWorkOne(false)
    setWorkTwo(false)
    setWorkThree(!workThree)
    setWorkFour(false)  
}

const toggleFour = () => {
    setMain(false)
    setWorkOne(false)
    setWorkTwo(false)
    setWorkThree(false)
    setWorkFour(!workFour)  
}

  return (
    <div className='pro'>
      <div className='pro__left'>
        <ul className='pro__list'>
          <li className='pro__work' onClick={toggleOne}>Bandsite</li>
          <li className='pro__work' onClick={toggleTwo}>Brainflix</li>
          <li className='pro__work' onClick={toggleThree}>Discover</li>
          <li className='pro__work' onClick={toggleFour}>I'll Write</li>
        </ul>
      </div>
      <div className='pro__right'>
        { main ? 
        <div className='pro__container'>
          <h1 className='pro__title'>
            Projects
          </h1>
          <h2 className='pro__description'>A variety of my latest works. </h2>
          <p className='pro__technology'>This section is constantly being updated so make sure to come back soon!</p>
        </div> 
        : null}
        { workOne ? 
        <div className='pro__container'>
        <a className='pro__title' href='https://github.com/nickyiie/nicteha-pinkus-bandsite'>
          <h1>Bandsite</h1>
          <BsArrowRight className='pro__arrow'/>
        </a>
        <h2 className='pro__description'>Fully responsive showcase site, displaying a band's biography, latest concert photo gallery, as well as upcoming show's ticket sales and music player.</h2>
        <p className='pro__technology'> HTML5, CSS3, SASS, JAVASCRIPT, AXIOS</p>
      </div> 
        : null}
        { workTwo ? 
        <div className='pro__container'>
        <a className='pro__title' href='https://github.com/nickyiie/nicteha-pinkus-brainflix'>
          <h1>Brainflix</h1>
          <BsArrowRight className='pro__arrow'/>
        </a>
        <h2 className='pro__description'>Fully responsive video streaming service, complete with a view counter, comment section, and seperate uploading page. </h2>
        <p className='pro__technology'> HTML5, CSS3, SASS, JAVASCRIPT, REACT.JS, NODE.JS, EXPRESS, AXIOS</p>
      </div> 
        : null}
        { workThree ? 
        <div className='pro__container'>
        <a className='pro__title' href='https://github.com/nickyiie/dictionary-app'>
          <h1>Discover</h1>
          <BsArrowRight className='pro__arrow'/>
        </a>
        <h2 className='pro__description'>A mobile dictionary, with a text-to-voice feature meant to help you find and save that word that's right at the tip of your tongue!</h2>
        <p className='pro__technology'> HTML5, CSS3, SASS, JAVASCRIPT, REACT.JS, NODE.JS, EXPRESS, AXIOS</p>
      </div> 
        : null}
        { workFour ? 
        <div className='pro__container'>
        <a className='pro__title' href='https://github.com/nickyiie/write-journal-app'>
          <h1>I'll Write</h1>
          <BsArrowRight className='pro__arrow'/>
        </a>
        <h2 className='pro__description'>A user-based gamefied journaling app meant to keep you motivated inorder to create a habit of self-reflection.</h2>
        <p className='pro__technology'> HTML5, CSS3, SASS, JAVASCRIPT, REACT.JS, NODE.JS, EXPRESS, FIREBASE AUTH, AXIOS</p>
        </div>
       : null}
      </div>
    </div>
  )
}

export default Projects;