// Създаване на Color Picker и оцветяване на div
// Създайте променливата background в state със стойност по подразбиране white. След
// което създайте color picker(това е input елемент с type=”color”). Направете div с
// размери 100px на 100px и рамка. При промяна на цвета избран от picker-a цвета на div-a
// се променя.


// import React,{useState} from 'react';

// export default function App(){
//     const [background, setBackground] = useState('white');
//     return(
//         <div>
//             <input type="color" onChange={(e)=>{
//                 setBackground(e.target.value);
//             }}/>
//             <div style={{
//                 background:background, 
//                 width:100, height:100, 
//                 border:'1px solid black'}}>


//             </div>
//         </div>

//     )
// }

import React, {useState} from 'react';
export default function App02(){
    const [color,setColor] = useState('white');

    return(
        
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', width:'100%',height:'100vh'}}>
            <h1>Choose Your Color</h1>
            <input type='color'
                onChange={(e) => {
                    setColor(e.target.value)
                }}
            />

            <div style={{width:"100px", height:"100px", background:color, border:'1px solid black'}}>
            </div>

        </div>

    )
}
