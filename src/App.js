import React, { createContext } from 'react';
import Useeffect from './Components/Useeffect';
import './App.css';
import Context from './Components/Contextapi+useContext/Context';
import Usereducer from './Components/Usereducer/Usereducer';
import Usemamo from './Components/Usememo/Usemamo';
import ReactMemo from './Components/Reactmemo/ReactMemo';
import Useref from './Components/Useref/Useref';

const Fullname = createContext();


const App = () => {
  return (
    <div className="App">
      {/* <Fullname.Provider value={"ameen zahid hussain"}> */}
        {/* <Useeffect/> */}
        {/* <Context/> */}
        {/* <Usereducer/> */}
        {/* <Usemamo/> */}
        {/* <ReactMemo/> */}
        <Useref/>
      {/* </Fullname.Provider> */}
      </div>

  );
}

export default App;
export {Fullname}
