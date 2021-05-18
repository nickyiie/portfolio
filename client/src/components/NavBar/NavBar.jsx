import { Link, withRouter } from 'react-router-dom';

import './NavBar.scss';


function NavBar(props) {
  const { location } = props

  const hidden = () => {
    if (location.pathname === '/') {
      return 'hidden'
    }
  }

  console.log(location.pathname)

  return (
    <div className='nav'>
      <div className='nav__left'>
        <Link className={'nav__link nav__title ' + hidden()} to='/'>Nicteha Pinkus</Link>
      </div>
      <div className='nav__right'>
        <Link className='nav__link' to='/projects' >Projects</Link>
        <Link className='nav__link' to='/about' >About</Link>
        <Link className='nav__link' to='/contact' >Contact</Link>
      </div>
    </div>
  )
}

export default withRouter(NavBar);