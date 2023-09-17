// import React, {useState} from 'react';

// export default function App(){
//     const [state, setState] = useState('off');
//     return(
//         <div>
//             <button style={{color: state == 'on' ? 'green' : 'red'}
//         }
//         onClick={()=>{
//             if(state == 'off')
//             {
//                 setState('on');
//             }
//             else{
//                 setState('off');
//             }
//         }}>{state}</button>
//         </div>

//     );
// }


// 4. Създайте бутон за включване и изключване (On/Off)
// Създайте бутон с текст, като по подразбиране показва Off с червен цвят. При
// натискане на бутона текста се променя на On и цвета става зелен.


//When button text == on then text green otherwise text-color red

import React,{useState} from 'react';
import './App01.css';

export default function App01(){
    const [btn, setBtn] = useState('off');

    return(
        <div className='container'>
            <button className='btn-container' style={{color:btn == 'on' ? 'green' : 'red' }} onClick={() => {
                if(btn=='off'){
                    setBtn('on');
                }
                else{
                    setBtn('off');
                }
            }}>
                {btn}
            </button>
        </div>
    )
}

