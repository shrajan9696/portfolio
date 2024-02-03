import {useState} from 'react'

import profile from '../assets/profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'
import Codechef from '../assets/Coding/Codechef.svg';
import GFG from '../assets/Coding/GFG.svg';

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {/* {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        } */}
       
            {/* <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div> */}
            <div className='md:w-3/6'  style={{width:"100%"}} >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold" style={{color:"aqua"}}>Shrajan Jain</h1>
                    <p class="text-xl font-bold text-gray-300">Mern Stack Developer, Algorithms and Competetive Programmer</p>
                    <p className="text-md font-light text-gray-400 ">Hello, I'm Shrajan Jain. Currently, I am a final year student pursuing a Bachelor of Technology in Computer Science and engineering at Kamla Nehru Institute of Technology, Sultanpur.</p>
                    <p className="text-md font-light text-gray-400 ">
I am an MERN Stack Developer and have designed and built so many websites for personal, group,and worked for more multiple startups using differet tech Stacks. I am also a competitive programmer on Codechef, Codeforces, and Leetcode. I am very passionate about learning new Technologies, Algorithms and Data Structures.</p>
                </div>
                {/* <a href='http://blog.dama.ink' className='mt-2 block'>Go to My Blog <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a> */}
                
                <ul className='flex  gap-4 items-center  my-6' style={{color:"aqua",}}>
                   <li>
                        <a href='https://github.com/shrajan9696' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    {/* <li>
                        <a href='https://instagram.com/damaasth' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li> */}
                    <li>
                        <a href='https://www.linkedin.com/in/shrajan-jain-a89353201/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
           
            {/* <br></br>
            <br></br>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" /> */}
       
        <div  className='flex gap-x-3.5  ' style={{color:"red"}}>
               <a href='https://www.codechef.com/users/coderunner22' target="_blank"> <div class=""><img src={Codechef}/></div> </a>
               <a href='https://codeforces.com/profile/shrain_22' target="_blank"><div class="  "><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/000000/external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo.png"/></div></a>
              <a href='https://auth.geeksforgeeks.org/user/jainshrajan482' target="_blank"> <div class="  "><img src={GFG}/></div></a>
               <a href='https://leetcode.com/shrajan1234/' target="_blank"><div class=" "><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/null/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png"/></div></a>
               <a href='https://www.hackerrank.com/jainshrajan482?hr_r=1' target="_blank"> <div class=" "><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/null/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png"/></div></a>
            </div>
        </>
    )
}
