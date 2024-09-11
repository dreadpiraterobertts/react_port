import React from 'react'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'


const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7 '>
        <a 
            className='hover:opacity-50 transition duration-500 '
            href="https://www.linkedin.com"
            target='_blank'
            rel='noreferrer'>
                <img src={linkedin} alt="" />
        </a>
        <a 
            className='hover:opacity-50 transition duration-500 '
            href="https://www.twitter.com"
            target='_blank'
            rel='noreferrer'>
                <img src={twitter} alt="" />
        </a>
        <a 
            className='hover:opacity-50 transition duration-500 '
            href="https://www.facebook.com"
            target='_blank'
            rel='noreferrer'>
                <img src={facebook} alt="" />
        </a>
        <a 
            className='hover:opacity-50 transition duration-500 '
            href="https://www.instagram.com"
            target='_blank'
            rel='noreferrer'>
                <img src={instagram} alt="" />
        </a>
    </div>
  )
}

export default SocialMediaIcons