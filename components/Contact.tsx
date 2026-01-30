import { socialMedia } from '@/data'
import React from 'react'
import ContactImg from "@/public/exp4.svg"
import Image from 'next/image'
import { AnimatedBorderLine } from './ui/MovingBorder'

const Contact = () => {
  return (
    <section id="contact" className='py-5 w-full'>
      <div className='max-w-5xl mx-auto px-8'>
        <h1 className='text-3xl lg:text-2xl font-bold text-center mb-4 text-purple'>
          Ready to take <span className='text-white'>your</span> digital presence to the next level?
        </h1>
        
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='flex-1 space-y-4'>
            <p className='text-sm lg:text-base text-gray-300 leading-relaxed'>
              I'm currently looking to join a cross-functional team that values improving people's lives
              through accessible design. Have a project in mind? Let's connect.
            </p>

   

            {/* Email Button */}
            <a 
              href="mailto:kolawoleabdulazeez5@gmail.com"
              className='inline-block mt-6 px-8 py-3 bg-purple text-white rounded-lg hover:bg-purple/90 transition-colors duration-300'
            >
              Get in Touch
            </a>
          </div>

          {/* Right Side - Image */}
          <div className='flex-1 flex items-center justify-center'>
            <div className='relative w-full max-w-sm aspect-square'>
              <Image 
                src={ContactImg} 
                alt="contact illustration" 
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>

        {/* Footer */}
<div className="mt-4 pt-8 text-center">
  <AnimatedBorderLine />

  <p className="mt-6 text-sm text-gray-400">
    Copyright © 2024 Abdulazeez Kolawole
  </p>
</div>


      </div>
    </section>
  )
}

export default Contact