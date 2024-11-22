import LineGradient from "../components/LineGradient"
import {motion} from 'framer-motion'
import project1 from '../assets/project-1.PNG'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'
import project4 from '../assets/project-4.png'
import project5 from '../assets/project-5.png'
import project6 from '../assets/comingsoon.png'
import project7 from '../assets/comingsoon.png'



const Projects = () => {

    const container = {
        hidden:{},
        visible:{
            transition:{staggerChildren : 0.2 }
        }
    }

    const projectVariants = {
        hidden:{opacity:0,scale:0.8},
        visible : {opacity:1,scale:1}
    }

    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey
                                z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
   
    
  return (
    <section id = "projects"className="pt-48 pb-48">    
    {/* Headings */}
    <motion.div
                className='md:w-2/5 mx-auto text-center'
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, y: -50 },
                   visible: { opacity: 1, y: 0 },
                 }}
            >
                <div>
                <p className='font-playfair font-semibold text-4xl mb-5'>PRO<span className='text-red'>JECTS</span></p>
                <div className="flex justify-center mt-5">
                <LineGradient width='w-1/3'/>
                </div>
                </div>
                 
                 <p className='mt-10 mb-10 '>
                    Some hands on projects that are practical, and hobby projects.
                 </p>
         </motion.div>

        {/* Projects */}
         <div className="flex justify-center">
            <motion.div
                    className='sm:grid sm:grid-cols-3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/* row 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACE
                    </div>
                    <motion.div className="relative"
                                 variants={projectVariants}
                    >
                    <div className={overlayStyles}>
                    <a href="https://github.com/dreadpiraterobertts/Ecommerce" target="_blank"><p className="text-2xl font-playfair">Ecommerce Site</p></a>
                    <p className="mt-7 ">with payment gateway  (to github)</p>
                    </div>
                    <img src={project1} alt="" />
                    </motion.div>

                    <motion.div className="relative"
                                 variants={projectVariants}
                    >
                    <div className={overlayStyles}>
                    <a href="https://mussieg.netlify.app/" target="_blank"><p className="text-2xl font-playfair">Gym Website</p></a>
                    <p className="mt-7 ">Responsive Elegant Simple </p>
                    </div>
                    <img src={project2} alt="" />
                    </motion.div>

                    <motion.div className="relative"
                                 variants={projectVariants}
                    >
                    <div className={overlayStyles}>
                    <a href="https://github.com/dreadpiraterobertts/facemash" target="_blank"><p className="text-2xl font-playfair">Facemash</p></a>
                    <p className="mt-7 ">uses the chess ranking algorithm to rank two options presented</p>
                    </div>
                    <img src={project3} alt="" />
                    </motion.div>

                    <motion.div className="relative"
                                 variants={projectVariants}
                    >
                    <div className={overlayStyles}>
                    <a href="https://admin-odin.netlify.app/" target="_blank"><p className="text-2xl font-playfair">Admin Dashboard</p></a>
                    <p className="mt-7 ">Pure HTML and CSS nothing other than vanilla</p>
                    </div>
                    <img src={project4} alt="" />
                    </motion.div>

                    <motion.div className="relative"
                                 variants={projectVariants}
                    >
                    <div className={overlayStyles}>
                    <a href="https://github.com/dreadpiraterobertts/exchangerate"><p className="text-2xl font-playfair">Exchange Rate</p></a>
                    <p className="mt-7 ">Scrapes the web from 4 banks to display the data on the frontend</p>
                    </div>
                    <img src={project5} alt="" />
                    </motion.div>
                    
                    <motion.div className="relative"
                                 variants={projectVariants}
                    >
                    <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">Coming Soon</p>
                    <p className="mt-7 ">upcoming projects</p>
                    </div>
                    <img src={project6} alt="" />
                    </motion.div>

                    <motion.div className="relative"
                                 variants={projectVariants}
                    >
                    <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">Coming Soon</p>
                    <p className="mt-7 ">upcoming projects</p>
                    </div>
                    <img src={project7} alt="" />
                    </motion.div>
                <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        SMOOTH USER EXPERIENCE
                    </div>
        </motion.div>
         </div>

    </section>
  )
}

export default Projects