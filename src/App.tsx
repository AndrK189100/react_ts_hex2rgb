
import { useState } from 'react';
import './App.css'

function App() {
const [data, setData]=useState({hex: '', rgb: ''})

  
  const handlerHEX = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const val = e.target.value;
    if(!val.match('^#[a-fA-F0-9]{0,6}$')) {
      if(val === '') setData({hex: '', rgb: ''})
      return;  
    }
    if(val.length === 7) {

      const rgb = `rgb(${parseInt(val.slice(1,3), 16)},${parseInt(val.slice(3,5),16)},${parseInt(val.slice(5,8),16)})`
      setData({hex: e.target.value, rgb: rgb});
      return;
    }
    setData({hex: e.target.value, rgb: ''});

  }

  return (
    <>
      <div style={{background: data.rgb}}>
        <label htmlFor='colorhex'>Цвет HEX: </label>
        <input id='colorhex' onChange={handlerHEX} value={data.hex}></input> <br/><br/>
        <label htmlFor='colorrgb' className='label'>Цвет RGB: </label>
        <input id='colorrgb' className='rgb' readOnly value={data.rgb}></input>     
      </div>
       
     
    </>
  )
}

export default App
