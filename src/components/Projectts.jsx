import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 }
        }
    };

    const projectVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    const Project = ({ title, subtitle }) => {
        const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey
                                z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
        const [projectImage, setProjectImage] = useState('');

        useEffect(() => {
            // Dynamically import the image based on the title
            import(`../assets/${title}.jpeg`)
                .then((image) => setProjectImage(image.default))
                .catch((error) => console.error('Image not found', error));
        }, [title]);

        return (
            <motion.div className="relative" variants={projectVariants}>
                <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">{title}</p>
                    <p className="mt-7">{subtitle}</p>
                </div>
                
                {projectImage && <img src={projectImage} alt={title} />}
            </motion.div>
        );
    };

  
};

export default Projects;
