import Reack, {useState} from 'react';
import Home from '../pages/home/Home';
import Footer from './footer/Footer';
import Menu from './menu/Menu';

export default function App(){
    return(
        <div>
            <Menu/>
            <Home/>
            <Footer/>
        </div>
    )
}