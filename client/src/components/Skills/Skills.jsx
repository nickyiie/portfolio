import Firebase from '../../assets/firebase-1.svg';
import Css from '../../assets/css-5.svg';
import Html from '../../assets/html5-1.svg';
import Javascript from '../../assets/logo-javascript.svg';
import ReactLogo from '../../assets/react-2.svg';
import Sass from '../../assets/sass-1.svg';
import Node from '../../assets/nodejs-1.svg';
import Express from '../../assets/express-109.svg';

import './Skills.scss';

function Skills () {
  return (
    <div className='skills'>
      <img className='skills__logo' src={Firebase} alt='firebase'/>
      <img className='skills__logo' src={Css} alt='css'/>
      <img className='skills__logo' src={Html} alt='html'/>
      <img className='skills__logo' src={Javascript} alt='javascript'/>
      <img className='skills__logo' src={ReactLogo} alt='react'/>
      <img className='skills__logo' src={Sass} alt='sass'/>
      <img className='skills__logo' src={Node} alt='node'/>
      <img className='skills__logo' src={Express} alt='express'/>
    </div>
  )
}

export default Skills;