// 3. Създаване на брояч
// Създайте брояч с първоначална стойност 0 и два бутона „+“ и „-”. При натискане на
// бутоните брояча се увеличава или намаля. Стойността на брояча трябва да се
// визуализира в div.

// import React, {useState} from 'react';

// export default function App(){

//     const [counter,setCounter] = useState (0);

//     return(
//         <div>
//             <div>
//                 <button onClick={() =>{
//                     setCounter(counter + 1);
//                 }}>+</button>
//                 <button onClick={() =>{
//                     setCounter(counter -1);
//                 }}>-</button>
//             </div>
//             <div>   
//                 {counter}
//             </div>
//         </div>
//         )
// }


import React,{useState} from "react";
export default function App(){
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <button onClick={() => {
                setCounter(counter +1);
            }}>
                +
            </button>

            <button onClick={() => {
                if(counter <= 0){
                    setCounter(0);
                }
                else{
                    setCounter(counter -1);

                }

            }}>
                -
            </button>
            <div>
                {counter}
            </div>
        </div>
    )
}

