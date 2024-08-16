import './App.css'
import VictorImage from './assets/victor_ny.png'

function App() {
  return (
    <>
      <div id="main-content" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-20">
        <div className="mx-auto max-w-3xl">
          <div className="sm:flex">
            <div className="h-36 w-36 rounded-full overflow-hidden mr-6">
              <img
                className="h-full w-full bg-center bg-cover"
                style={{ backgroundImage: `url(${VictorImage})` }}
              // alt="Victor Anderssén"
              ></img>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-left">Victor Anderssén</h4>
              <p className="mt-1 text-left text-lg font-medium">
                Master of Science <br />
                <span className='text-sm font-light leading-relaxed'>
                  <p>(Technology) </p>
                  <p>(Computer Engineering)</p>
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-md font-light text-justify leading-relaxed">
              I am a software developer with a passion for web development and graphics programming including game development. I have been writing games in C#, C and C++ for a while. I have been working with web development for over 5 years. I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills.
            </p>

            <div className="mt-8 ">
              <a
                href="https://www.linkedin.com/in/victoranderssen/"
                target="_blank"
                rel="noreferrer"
                className="mr-2 text-sm font-bold text-blue-500 hover:underline mr-6">
                LinkedIn
              </a>
              <a
                href="https://github.com/Avicted/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold text-blue-500 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
