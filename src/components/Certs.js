import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import mtcna from "../assets/certs/mtcna.jpg"
import adinusa from "../assets/certs/adinusa.png"
import dicodingAws from "../assets/certs/dicoding-aws.png"
import dicodingJs from "../assets/certs/dicoding-js.png"
import dicodingNetwork from "../assets/certs/dicoding-network.png"
import progateHtml from "../assets/certs/progate-htmlcss.png"
import Kontest_Khazana from "../assets/certs/Kontest_Khazana.png"
import Details_Generator from "../assets/certs/Details_Generator.png"
import quotopedia from "../assets/certs/quotopedia.png"
import The_Indian_Kitchen from "../assets/certs/The_Indian_Kitchen.png"
import DrumKit from "../assets/certs/DrumKit.png"
import To_Do_Keeper from "../assets/certs/To_Do_Keeper.png"
import Simmons from "../assets/certs/Simmons.png"
import dicee_game from "../assets/certs/dicee_game.png"
import college from "../assets/certs/college.png"
import mySql from "../assets/certs/mySql.png"
import puzzle from "../assets/certs/puzzle.png"

// import

export default function Certs() {
return (
<div id="certs" className="mt-4 text-white">
    <h1 className="text-2xl font-bold">Projects</h1>
    <p className="font-light text-gray-400">Here are some of my Projects</p>

    {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-5">
            <CertCard name="Quotopedia24" img={quotopedia} desc="• Quotopedia 24 is a user-friendly blog website ,that enables users to easily share their thoughts and ideas through blog posts,
complete with images. The website offers a convenient login/signup feature that allows users to create and manage their accounts
with ease." live="https://quotopedia24.cyclic.app/" github="https://github.com/shrajan9696/Quotopedia24" tech="HTML, CSS, javascript, NodeJs, expressJS, MongoDB, EJS, cloudinary" />
            <CertCard name="The Indian Kitchen" img={The_Indian_Kitchen} live="https://the-indian-kitchen.netlify.app/" github="https://github.com/shrajan9696/The-Indian-Kitchen" desc=" A complete React.js based , food delivery website, It allows users to easily order food online, with the added convenience of being
able to save meals in a cart and complete the order at a later time.
• The website generates professional-looking invoice receipts using JSpdf, a npm module that allows users to download and preview
their bill" tech="React.js, Firebase, pdfJS " />
  <CertCard name="The Puzzle Game" img={puzzle} desc="It is a basic puzzle game made for the elitmus assignement where user will face a series of queries to be answered in form of quizes and puzzles, everything is nicely presented with the help of music and animations, hope you will enjoy the game." live="https://puzzle-game-sw40.onrender.com/login" github="https://github.com/shrajan9696/puzzle_game" tech="HTML, CSS, NodeJS, expressJs, MongoDB, EJS"></CertCard>
            <CertCard name="The Drum Kit" img={DrumKit} live="https://gorgeous-taiyaki-4e1163.netlify.app/" github="" tech="HTML, CSS, Javascript"
                desc="A drum kit project built using HTML, CSS, and JavaScript is a fun and interactive web application that simulates a virtual drum kit. The real magic of the project comes from JavaScript, which handles the interaction between the user and the drum kit. JavaScript would be used to detect when a user clicks on a drum kit component and then play the corresponding sound using audio files" />
            <CertCard name="To Do Keeper" img={To_Do_Keeper} tech="React.js NodeJs, ExpressJS, MongoDB"
                desc="
A to-do keeper app built using React is a simple yet effective tool for managing tasks. The app allows users to create, edit, and delete tasks, with the ability to filter them by various criteria, such as year or month. The app's intuitive interface and  make it easy to stay organized and on top of daily tasks."
                live="https://magical-granita-094513.netlify.app/" github="https://github.com/shrajan9696/To_Do_Keeper_App_Internship"/>
            <CertCard name="The Simmons Game" img={Simmons} desc="It is a virtual implementation of famous Simmons game based on the memory of user to remeber pattern of colors pressed by him,The project is a virtual version of the classic Simon game built using HTML, CSS, and jQuery. Players must remember the pattern of colors pressed by the game and repeat it. To make the game more engaging, several features have been be added, such as different difficulty levels, sound effects etc" tech="HTML, CSS, jquery" live="https://shrajan9696.github.io/simmons-game/" github="https://github.com/shrajan9696/simmons-game" />
            <CertCard name="Detail Generator " img={Details_Generator} tech="MongoDB, react.js, React-Tables, Express.JS, REST API"
                desc="The application is a user details display system that presents data in a tabular format based on various queries. The user data is stored in a MongoDB database and accessed using REST API and CRUD operations. The application allows users to create, read, update, and delete user details from the database."
                live="https://mobilic-intern-details-generator.netlify.app/" github="https://github.com/shrajan9696/Mobilic_India_Internship" />
            <CertCard name="Kontest Khazana" img={Kontest_Khazana}
                desc="The website is a comprehensive source of information about upcoming coding contests across various coding platforms. The website uses JavaScript to fetch data from the API of different coding platforms to display a list of upcoming contests"
                live="https://shrajan9696.github.io/Kontest_Khazana/" github="https://github.com/shrajan9696/Kontest_Khazana" tech="HTML, CSS, javascript, bootstrap, API Fetching" />
            <CertCard name="Dicee Game" img={dicee_game}
                desc="Dicee game is a simple game where the player wins points based on the numbers rolled on two virtual dice. Each time the player refreshes the screen, the dice change, and the game starts anew. "
                live="https://shrajan9696.github.io/Dicee-game/dicee%20project/index.html" github="https://github.com/shrajan9696/Dicee-game" tech="HTML, CSS, javascript " />

<CertCard name="The College Finder" img={college}
                desc=" The College Finder is a website designed to assist students in discovering their ideal college and academic program. Built with HTML, CSS, and JavaScript, the website offers a user-friendly interface that allows students to search and filter through a comprehensive database of colleges and programs. "
                live="https://shrajan9696.github.io/Find-Your-College-/college.html" github="https://github.com/shrajan9696/Find-Your-College-" tech="HTML, CSS, javascript " />

                
<CertCard name="My Sql crud App" img={mySql}
                desc="The website is designed to perform CRUD operations on a MySQL database. It is built using HTML, and css. The website provides a user-friendly interface to manage the database records. "
                live="https://github.com/shrajan9696/sql_project" github="https://github.com/shrajan9696/sql_project" tech=" HTML, CSS, MySql " />
        </div>
        <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
    )
    }