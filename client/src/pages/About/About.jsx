import Nicky from '../../assets/nickycrop.jpg';
import Skills from '../../components/Skills/Skills';

import './About.scss';

function About() {
  return (
    <div className='about'>
      <div className='about__left'>
      <img className='about__img' src={Nicky} alt='nicky' />

      </div>
      <div className='about__right'>
        <h1 className='about__greeting'>
          Hello!
        </h1>
        <p className='about__name'>
          My name is Nicteha, or Nicky as my friends call me...
        </p>
        <p className='about__blurb'>
        I'm a Full-Stack Web Developer based in Vancouver, BC.
        </p>
        <p className='about__blurb'>
        I discovered my passion for web development in middle school when I learned to create Myspace layouts. I find it fascinating that there are endless ways we can augment a user's experience when surfing the web.  As a Web Developer I am eager to build complex applications that will positively impact others.  
        </p>
        <p className='about__blurb'>
        Take a peek below at my favourite tools, and if you like what you see go right ahead and send me a message!
        </p>
      <Skills/>
      </div>
    </div>
  )
}

export default About;