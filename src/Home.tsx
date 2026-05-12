import './Home.css'
import IKnotes from './assets/IK_notes.png'
import logangster from './assets/logangster.png'
import circuit from './assets/circuit.png'

function Home() {

  return (
    <>
      <h1>IDEA Project: Robot Arm</h1>
      <div className="page-boxes">
        <div className='grid-box'>
          <h2>Who am I?</h2>
          <p>Hi, I'm Logan, an 8th grader at De Anza middle school.</p>
        </div>
        <img src={logangster} className='gallery-image' />
        <img src={IKnotes} className='gallery-image' />
        <div className='grid-box'>
          <h2>This Website</h2>
          <p>This project is a very big and important project so I have created this website to show things all about my project</p>
        </div>
        <div className='grid-box'>
          <h2>Time Span</h2>
          <p>This project started in early october and ended very recently, may 2026</p>
        </div>

        <img src={circuit} className='gallery-image' />
      </div>
    </>
  )
}

export default Home