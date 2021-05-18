import './Home.scss';

function Home() {
  return (
    <div className='home'>
      <div className='home__left'>
        <div className='home__title'>
        <h1 className='home__fname'>Nicteha</h1>
        <h1 className='home__lname'>Pinkus</h1>
        </div>
      </div>
      <div className='home__right'>
        <h3 className='home__position'>
          Full-Stack Developer
        </h3>
        <p className='home__location'>
          Raised in Toronto.
        </p>
        <p className='home__location'>
        Based in Vancouver.
        </p>
        <p className='home__location'>
        Rooted in Innovation.
        </p>
      </div>
    </div>
  )
}

export default Home;