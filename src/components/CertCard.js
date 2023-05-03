

export default function CertCard(props){
    let live = props.live;
    let github = props.github;
    const handleClick = (event) => {
        let action= event.target.value;
        if(action === 'live') window.open(live);
        else window.open(github);
        
      };
      
    return (
        
    
        <div  className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
           <a href={live} target="_blank">   <img src={props.img} className="w-full h-56  " alt={props.name}></img>  </a>
          
          
          
            <div className="mt-2">
            <div>
                <h1 className="font-bold md:text-xl">{props.name}</h1>
              
                <p className="font-light text-gray-400">{props.desc}</p>

                <h2 className="font-bold">{props.tech}</h2>
             </div>
              
                <div className="flex gap-x-6 mt-2.5">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick} value="live"> Live</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick} value="github"> Github</button>
                </div>
            </div>
        </div>
        
    )
}
