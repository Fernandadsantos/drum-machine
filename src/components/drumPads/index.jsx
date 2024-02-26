import { useEffect } from 'react';
import './drumPads.css';


export default function DrumPads({id, name, audio, idAudio, setCurrentAudio}){ 
    
    const handleClick = () => {
        setCurrentAudio(id);
        document.querySelector(`#${idAudio}`).play()
    };

    useEffect(() => {
        document.querySelector(`#${idAudio}`).load();
        document.addEventListener('keydown', handleBtn);
        return ()=>{
            document.removeEventListener('keydown', handleBtn);
        }
        // eslint-disable-next-line
    },[audio]);
    
    const handleBtn = (e) => {
        if(e.key === name.toLowerCase() 
        || e.key === name.toUpperCase()){ 
            handleClick();  
        }
    };

    return(
        <div>
            <button 
                className='drum-pad' 
                id={id}
                onClick={()=>handleClick()}
            > 
                {name}
                <audio 
                    src={audio} 
                    id={idAudio}
                    className='clip'   
                ></audio>
            </button>
        </div>
    )
};