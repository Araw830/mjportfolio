import React,{ useEffect,useRef } from 'react';
import lottie from 'lottie-web'; 
import { SocialIcon } from 'react-social-icons';

function Doing(){
    const container2=useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container:container2.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../do.json'),
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
        });
        return () => {
            lottie.destroy();
          };
    },[])
    return (

        <div>
            <div className="flex justify-evenly items-between flex-col sm:flex-row">
            <div className="mt-10 h-200 w-200" ref={container2}></div>
                <div className="lg:mt-20 mt-14 ">
                <h1 className="lg:text-justify lg:text-7xl font-extrabold text-4xl font-bold">What I do</h1>
      <p className="lg:text-justify font-bold lg:text-2xl text-gray-400 mt-2">CRAZY Android DEVELOPER</p>
      <div className="grid grid-cols-4 lg:justify-items-start gap-x-2 gap-y-4 mt-2">
          <div > <SocialIcon url="https://github.com/mayank" />   </div>
          <div> <SocialIcon url="https://linkedin.com/mayank" />  </div>
          <div> <SocialIcon url="https://twitter.com/mayank" />   </div>
          <div><SocialIcon url="https://youtube.com/mayank" /></div>
          
         
          </div>
          <div className="lg:text-justify mt-4">
          <button class="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg uppercase">
  Contact me
</button>
<button class="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-4 uppercase">
  see my resume
</button>

              </div>

                </div>
              
            </div>


          {/* What i do */}

          <div className="grid grid-cols-2 mt-40">
              <div>A</div>
              <div>B</div>
          </div>
        </div>

     





    )
}

export default Doing;