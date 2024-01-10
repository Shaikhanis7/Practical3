import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import HelloWorld from './components/HelloWorld';
import InlineStyling from './components/InlineStyling';
import DisplayData from './components/DisplayData';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CustomCard from './components/CustomCard';
import Form from './components/Form'
import Counter from './components/Counter';

// import {Provider} from 'react-redux'
// import {Store} from './redux/Store'
import {Provider}  from 'react-redux'
import {Store}  from './redux/Store'
import Theme from './components/Theme';

function App() {
    //  const staticData="Hello, I am static data!"
    //  const dynamicData=new Date().toLocaleString();
  return (
 <Provider store={Store}>
    <div className="App">
     {/* <ErrorBoundary>
      <Hero heroName='Batman'/>
     </ErrorBoundary>
     <ErrorBoundary>
      <Hero heroName='Joker'/>
     </ErrorBoundary> */}
     {/* <HelloWorld/> */}
     {/* <InlineStyling/> */}
     {/* <h1>Props Demo</h1>
     <DisplayData staticData={staticData} dynamicData={dynamicData}/> */}
     {/* <Navbar/>
    
    <Routes>
<Route exact path='/' element={<Home/>}/>
<Route path='/about' element={ <About/>}/>
    </Routes> */}

    {/* <CustomCard/> */}
    {/* <Form/>
     */}
     {/* <Counter/>
      */}
      <Theme/>
    </div>
    </Provider>
  
  );
}

export default App;
