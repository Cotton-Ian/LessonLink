import logo from './logo.svg'
import './App.css'
import Footer from './Layouts/Footer/Footer'
import Header from "./Layouts/Header/Header";
import Banner from "./Pages/MainPage/Banner";

console.log('Hello World')

function App() {
    return (
        <div>
            <Header/> <Banner/>  <Footer/>
        </div>
    )
}


export default App
