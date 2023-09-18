


// 6. Създайте форма за регистрация
// Създайте форма за регистрация с име, имейл, парола, повтори паролата, радио бутон
// за пол, падащо меню за град, чекбокс за видове музика (Rock, Pop, Rap) и бутон за
// регистрация. При натискане на бутона се валидира името да е поне 4 символа,
// паролата и повтори паролата трябва да съвпадат всички полета трябва да имат
// стойности. Съобщенията за грешка ги изписва под всяко поле. 


import React,{useState} from 'react';
import './App03.css';


export default function App03(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repeatPass,setRepeatPass] = useState('');
    const [gender,setGender] = useState('');
    const [city,setCity] = useState('');
    const [music,setMusic] = useState ([]);
    const [errors,setErrors] = useState({
        name:'',
        email:'',
        password: '',
        city:'',
        gender:'',
        music:''
    });
    const color = {color: 'red'};



    return(
    <div className="main-container">

        <form className="form-container">

            <div className="name-container">
                <label>Name:</label>
                <input style={{ marginLeft: "1rem" }} type="text" placeholder='Enter name'
                    onInput={(e) => { setName(e.target.value) }}></input>
                <span style={color}>{errors.name}</span>
            </div>
            <div>
                <label>Email:</label>
                <input style={{ marginLeft: "1rem" }} type="text" placeholder='Enter email'
                    onInput={(e) => { setEmail(e.target.value) }}></input>
                <span style={color}>{errors.email}</span>

            </div>
            <div>
                <label>Password:</label>
                <input style={{ marginLeft: "1rem" }} type="password" placeholder='Enter password'
                    onInput={(e) => { setPassword(e.target.value) }}></input>
                <span style={color}>{errors.password}</span>

            </div>
            <div>
                <label>Confirm Password:</label>
                <input style={{ marginLeft: "1rem" }} type="password" placeholder='Enter password'
                    onInput={(e) => { setRepeatPass(e.target.value) }}></input>
                <span style={color}>{errors.password}</span>

            </div>
            <div>
                <span>Choose gender :</span><br></br>
                <label>Male</label>
                <input type="radio" onClick={() => {
                    setGender('Male');
                }}></input>
                <label>Female</label>
                <input type="radio" onClick={() => {
                    setGender('Female');
                }}></input>
                <span style={color}>{errors.gender}</span>

            </div>
            <div>
                <label>Choose city :</label> <br></br>
                <select onChange={(e) => {
                    setCity(e.target.value);
                }}>
                    <option value="Plovidv">Plovdiv</option>
                    <option value="Sofia">Sofia</option>
                    <option value="Pernik">Pernik</option>
                    <option value="Varna">Varna</option>
                    <option value="Burgas">Burgas</option>
                    <option value="Haskovo">Haskovo</option>
                </select>
                <span style={color}>{errors.city}</span>

            </div>
            <div>
                <label>Choose music type : </label><br></br>
                <label>Rap</label>
                <input onClick={(e) => {
                    if (e.target.checked == true) {
                        setMusic([...music, 'rap']);
                    }
                    else {
                        setMusic(music.filter(m => m != 'rap'));
                    }
                }} type="checkbox"></input>

                <label>Pop</label>
                <input type="checkbox" onClick={(e) => {
                    if (e.target.checked == true) {
                        setMusic([...music, 'pop']);
                    }
                    else {
                        setMusic(music.filter(m => m != 'pop'))
                    }
                }}></input>
                <label>Jaz</label>
                <input type="checkbox" onClick={(e) => {
                    if (e.target.checked == true) {
                        setMusic([...music, 'jaz']);
                    }
                    else {
                        setMusic(music.filter(m => m != 'pop'))
                    }
                }}></input>
                <label>Rock</label>
                <input type="checkbox" onClick={(e) => {
                    if (e.target.checked == true) {
                        setMusic([...music, 'rock']);
                    }
                    else {
                        setMusic(music.filter(m => m != 'rock'))
                    }
                }}></input>
                <label>Classic</label>
                <input type="checkbox" onClick={(e) => {
                    if (e.target.checked == true) {
                        setMusic([...music, 'classic']);
                    }
                    else {
                        setMusic(music.filter(m => m != 'classic'))
                    }
                }}></input>
                <span style={color}>{errors.music}</span>

            </div>
            <div>
            <button onClick={()=>{
                         let err = errors;
                         if(name.length < 4){
                             err.name = 'Invalid name!';
                         }
                         else{
                             err.name = '';
                         }
                         if(email == ''){
                             err.email = 'Invalid email';
                         }
                         else{
                             err.email = '';
                         }
                         if(password == '' || password != repeatPass){
                             err.password = 'Invalid password';
                         }
                         else{
                             err.password = '';
                         }
                         if(city == ''){
                             err.city = 'Invalid city';
                         }
                         else{
                             err.city = '';
                         }
                         if(gender == ''){
                             err.gender = 'Invalid gender';
                         }
                         else{
                             err.gender = '';
                         }
                         if(music.length == 0){
                             err.music = 'Invalid music';

                         }
                         else{
                             err.music = '';
                         }
                         setErrors({...errors,err});
                     }} type="button">Registrate</button>
            </div>


        </form>
    </div>
    )
}
































// import React, {useState} from 'react';



// export default function App(){

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPass, setConfirmPass] = useState('');
//     const [gender, setGender] = useState('');
//     const [city, setCity] = useState('');
//     const [music, setMusic] = useState([]);
//     const [errors, setErrors] = useState ({
//         name:'',
//         email:'',
//         password:'',
//         city:'',
//         gender: '',
//         music:'',
//     });

//     const color = {color: 'red'};
//         return(
//         <div>
//             <form>
//                 <div>
//                     <label>Name:</label>
//                     <input type="text" onInput={(e)=>{
//                         setName(e.target.value)
//                     }}/>
//                     <span style={color}>{errors.name}</span>
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input type="text" onInput={(e)=>{
//                         setEmail(e.target.value)
//                     }}/>
//                     <span style={color}>{errors.email}</span>
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input type="password" onInput={(e)=>{
//                         setPassword(e.target.value)
//                     }}/>
//                     <span style={color}>{errors.password}</span>
//                 </div>
//                 <div>
//                     <label>Confirm Password:</label>
//                     <input type="password" onInput={(e)=>{
//                         setConfirmPass(e.target.value)
//                     }}/>
//                 </div>
//                 <div>
//                     <label>Male</label>
//                     <input type="radio" onClick={()=>{
//                         setGender('male')
//                     }} name="gender"/>
//                     <label>Female</label>
//                     <input type="radio" onClick={()=>{
//                         setGender('female')
//                     }} name="gender"/>
//                     <span style={color}>{errors.gender}</span>
//                 </div>
//                 <div>
//                     <label>City: </label>
//                     <select onChange={(e)=>{
//                         setCity(e.target.value)
//                     }}>
//                         <option value="Burgas">Burgas</option>
//                         <option value="Plovdiv">Plovdiv</option>
//                         <option value="Sofia">Sofia</option>
//                         <option value="Velingrad">Velingrad</option>
//                         <option value="Varna">Varna</option>
//                     </select>
//                     <span style={color}>{errors.city}</span>
                    
//                 </div>
//                 <div>
//                     <label>Rap</label>
//         	        <input onClick={(e)=>{
//                         if(e.target.checked == true){
//                             setMusic([...music,'rap']);
//                         }
//                         else{
//                             setMusic(music.filter(m => m != 'rap'));
//                         }
//                     }} type="checkbox"/>
//                     <label>Pop</label>
//         	        <input onClick={(e)=>{
//                         if(e.target.checked == true){
//                             setMusic([...music,'pop']);
//                         }
//                         else{
//                             setMusic(music.filter(m => m != 'pop'));
//                         }
//                     }} type="checkbox" />
//                     <label>Jaz</label>
//         	        <input onClick={(e)=>{
//                         if(e.target.checked == true){
//                             setMusic([...music,'jaz']);
//                         }
//                         else{
//                             setMusic(music.filter(m => m != 'jaz'));
//                         }
//                     }} type="checkbox"/>
//                     <label>Rock</label>
//         	        <input onClick={(e)=>{
//                         if(e.target.checked == true){
//                             setMusic([...music,'rock']);
//                         }
//                         else{
//                             setMusic(music.filter(m => m != 'rock'));
//                         }
//                     }} type="checkbox"/>
//                     <span style={color}>{errors.music}</span>

//                 </div>
//                 <div>
//                     <button onClick={()=>{
//                         let err = errors;
//                         if(name.length < 4){
//                             err.name = 'Invalid name!';
//                         }
//                         else{
//                             err.name = '';
//                         }
//                         if(email == ''){
//                             err.email = 'Invalid email';
//                         }
//                         else{
//                             err.email = '';
//                         }
//                         if(password == '' || password != confirmPass){
//                             err.password = 'Invalid password';
//                         }
//                         else{
//                             err.password = '';
//                         }
//                         if(city == ''){
//                             err.city = 'Invalid city';
//                         }
//                         else{
//                             err.city = '';
//                         }
//                         if(gender == ''){
//                             err.gender = 'Invalid gender';
//                         }
//                         else{
//                             err.gender = '';
//                         }
//                         if(music.length == 0){
//                             err.music = 'Invalid music';

//                         }
//                         else{
//                             err.music = '';
//                         }
//                         setErrors({...errors,err});
//                     }} type="button">Registrate</button>
//                 </div>
//             </form>
//         </div>
//     )
// }