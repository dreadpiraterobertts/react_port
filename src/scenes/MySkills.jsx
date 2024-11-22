import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import {motion } from 'framer-motion'
import SkillsImage from '../assets/skills-image.png'

const MySkills = () => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id="skills" className='pt-10 pb-24'>
        {/* Header and image section */}
        <div className='md:flex md:justify-between md:gap-16 mt-32'>
            <motion.div
                className='md:w-1/3'
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: -50 },
                   visible: { opacity: 1, x: 0 },
                 }}
            >
                <p className='font-playfair font-semibold text-4xl mb-5'>My <span className='text-red'>Skills</span></p>
                 <LineGradient width='w-1/3'/>
                 <p className='mt-10 mb-7 '>
                 I build responsive and intuitive websites that are user friendly, usind modern frameworks and technologies.

                 </p>
         </motion.div>

            <div className='mt-16 md:mt-0'>
                {isAboveMediumScreens ?(
                    <div
                    className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                                before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]  '   
                >
                    <img 
                    className=' z-10 '
                    src={SkillsImage}/>
                    </div>
                ):(
                    <img 
                    className=' z-10 '
                    src={SkillsImage}/>
                )}

            </div>
        </div>

        {/* skills */}
        <div className='md:flex justify-between mt-16 gap-32'>
                {/* frontend */}
            <motion.div
            className='md:w-1/3 mt-10'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                <div className='relative h-32'>
                    <div className='z-10'>
                        <p className='font-playfair font-semibold text-5xl'>01</p>
                        <p className='font-playfair font-semibold text-3xl mt-3'>Frontend </p>
                    </div>
                    <div className='w-1/2 md:w3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]'/>
                </div>
            <p className='mt-5'>
            ReactJs, TailwindCSS, FramerMotion, HTML,CSS, Javascript
            </p>
            </motion.div>
             {/* backend */}
             <motion.div
            className='md:w-1/3 mt-10'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2,duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                <div className='relative h-32'>
                    <div className='z-10'>
                        <p className='font-playfair font-semibold text-5xl'>02</p>
                        <p className='font-playfair font-semibold text-3xl mt-3'>Backend </p>
                    </div>
                    <div className='w-1/2 md:w3/4 h-32 bg-red absolute right-0 top-0 z-[-1]'/>
                </div>
            <p className='mt-5'>
            NodeJs, ExpressJs, MongoDB, RestAPIs, Payment Gateways(Stripe and Chappa)
            </p>
            </motion.div>
               {/* other */}
               <motion.div
            className='md:w-1/3 mt-10'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.4,duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                <div className='relative h-32'>
                    <div className='z-10'>
                        <p className='font-playfair font-semibold text-5xl'>03</p>
                        <p className='font-playfair font-semibold text-3xl mt-3'>Other</p>
                    </div>
                    <div className='w-1/2 md:w3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]'/>
                </div>
            <p className='mt-5'>
            WebScrapping, deployment , linux command line, Git,
            </p>
            </motion.div>
        </div>
    </section>
  )
}

export default MySkills