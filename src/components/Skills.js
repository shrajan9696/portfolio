import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import kvm from "../assets/skills/kvm.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import mikrotik from "../assets/skills/mikrotik.svg"
import kubernetes from "../assets/skills/kubernetes.svg"
import ansible from "../assets/skills/ansible.svg"
import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"
import cisco from "../assets/skills/cisco.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"
import firebase from "../assets/skills/firebase.svg"
import github from "../assets/skills/github.svg"



import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4 grid grid-cols-3 md:grid-cols-8 gap-y-3.5">
                {/* <Slider {...settings}> */}
                <SkillCard name="C language" experience="Intermediate" img={linux} />
                <SkillCard name="C++" experience="Advance" img={kvm} />
                <SkillCard name="javascript" experience="Advance" img={javascript} />
                <SkillCard name="HTML" experience="Intermediate" img={mikrotik} />
                <SkillCard name="CSS" experience="Intermediate" img={kubernetes} />
                <SkillCard name="react" experience="Intermediate" img={reactIcon} />
                <SkillCard name="Node" experience="Intermediate" img={ansible} />
                <SkillCard name="express" experience="Intermediate" img={express} />
                <SkillCard name="jquery" experience="Intermediate" img={docker} />
                <SkillCard name="MongoDB" experience="Intermediate" img={cisco} />
                <SkillCard name="MySql" experience="Intermediate" img={windows} />
                <SkillCard name="git" experience="Intermediate" img={git} />
                <SkillCard name="Next" experience="Basic" img={gitlab} />
                <SkillCard name="tailwind" experience="Basic" img={tailwind} />
                <SkillCard name="firebase" experience="Basic" img={firebase} />
                <SkillCard name="github" experience="Intermediate" img={github} />
                {/* <SkillCard name="C++ language" experience="1 years" img={bash} />
                <SkillCard name="C++ language" experience="1 years" img={bash} />
                <SkillCard name="python" experience="1 years" img={python} /> */}
              
               
           
                
               
                
                
             
                {/* <SkillCard name="react" experience="1 years" img={react} /> */}
              
              
              
            
               
                {/* </Slider> */}
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}