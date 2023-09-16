import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center
    items-center flex-col'>
        <nav className='flex justify-between items-center 
        w-full mb-10 pt-3' >
            <img src={logo} alt="abrgy_logo" 
            className='w-28 object-contain'/>

            <button 
                type='button'
                onClick={()=>window.open('https://github.com/tanaythecomder')}
                className='black_btn'
            >
                GitHub
            </button>
        </nav>

        <h1 className="head_text" >
          Summarize Artcle with <br className="max-md:hidden" />
          <span className="orange_gradient" > OpenAI GPT-4</span>
        </h1>
        <h1 className="desc">
          Simplify your reading with Summize, an open-Source article summarizer that transforms 
          lengthy articles into clear and concise summaries
        </h1>
    </header>
  )
}

export default Hero