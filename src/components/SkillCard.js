import './tailwind.config.js';
export default function SkillCard(props){
    return (
        // <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-11/12  p-4 text-center justify-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-48">
             <div  className="w-10/12  p-4 text-center justify-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-40">
         <img src={props.img} className=" w-20 max-h-20 mx-auto animate-waving-hand " alt={props.name}></img>
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <p className="font-light text-xs md:text-lg">{props.experience}</p>
            </div>
        </div>
    )
}
