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

          <div className="mt-16">
            <p className="text-md font-medim text-justify leading-relaxed">
              I have a master's degree in Computer Engineering and a bachelor's degree in Electrotechnics. with a passion for web development and graphics programming including game development. I have been writing games in C#, C and C++ for a while. I have been working with web development for over 5 years. I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills.
            </p>

            <p className="mt-8 text-md font-medim text-justify leading-relaxed">
              Regarding embedded systems, I have developed a complete system for monitoring the temperature and humidity of a room, or guitar case. Everything is documented here:
              <a href="https://github.com/Avicted/Skogsnet" className="text-blue-500 hover:underline"> Skogsnet</a>. Primarily to keep my instruments (guitars and bases) at the right humidity.
            </p>

            <p className="mt-8 text-md font-medim text-justify leading-relaxed">
              During my time at Åbo Akademi as a student I developed a 3D, C style C++ application for visualizing 100k galaxies + 100k randomly distributed galaxies, using the the OpenGL abstraction layer Raylib. The project is documented here: <a href="https://github.com/Avicted/galaxy_visualization_raylib" className="text-blue-500 hover:underline"> Galaxy Visualization</a> The real challenge in the course was to calculate 10.000.000.000 angles (10 Billion (In Swedish tio miljarder)) between the galaxies. The project was a success. The runtime of the program was roughly 2.3 seconds.
            </p>

            <p className="mt-8 text-md font-medim text-justify leading-relaxed">
              I am currently working on a game, written in C++ using <a href="https://www.raylib.com/" className="text-blue-500 hover:underline">Raylib</a> as the OpenGL abstraction layer. Please contact me if you are interested in hearing more about this project.
            </p>

            <p className="mt-8 text-md font-medim text-justify leading-relaxed">
              My Master's Thesis: <a href="https://urn.fi/URN:NBN:fi-fe2024042321241" className="text-blue-500 hover:underline">Converting CUDA programs to run on AMD GPUs</a>. This work focuses on adapting very important legacy CUDA code for compatibility with both Nvidia and AMD hardware using AMD’s Heterogeneous-Computing Interface for Portability (HIP). The thesis presents a method for converting CUDA code and libraries to run on both platforms. This method was validated using a Quasi-Minimal Residual method (QMR) solver with test data from the <a href="https://ft.nephy.chalmers.se/dream/" className="text-blue-500 hover:underline">DREAM</a> (Disruption and Runaway Electron Analysis Model), which simulates unstable electrons in Tokamak fusion reactors. The test results showed comparable performance on AMD and Nvidia GPUs, demonstrating the effectiveness of the conversion process.
            </p>

            <div className="mt-24">
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
