import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';

import './Footer.scss';


function Footer() {
  return (
    <div className='foot'>
      <a className='foot__link' target='_blank' rel='external' href='https://www.linkedin.com/in/nictehapinkus158/'><AiOutlineLinkedin/></a>
      <a className='foot__link' target='_blank' rel='external' href='https://www.instagram.com/nictehahaha/'><AiOutlineInstagram/></a>
      <a className='foot__link' target='_blank' rel='external' href='https://www.github.com/nickyiie'><AiOutlineGithub/></a>
    </div>
  )
}

export default Footer;