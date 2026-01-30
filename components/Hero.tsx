import { Grid } from "./ui/Grid"
import { Spotlight } from "./ui/spotlight"

const Hero = () => {
  return (
    <section id="home" className='relative w-full'>
      {/* Spotlights */}
      <Spotlight 
        className='absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen' 
        fill='white'
      />
      <Spotlight 
        className='absolute top-10 left-full h-[80vh] w-[50vw]' 
        fill='purple'
      /> 
      <Spotlight 
        className='absolute top-28 left-80 h-[80vh] w-[50vw]' 
        fill='blue'
      />
      
      <Grid />
    </section>
  )
}

export default Hero