import { useEffect, useState } from 'react'
import './App.css'
import ServicesCrud from './services/CrudService'


function App() {
  
  const [sendData, setSendData] = useState({
    nombre : '',
    ape_paterno : '',
    ape_materno : '',
    num_dni : null,
  })
  
  const{ getData, get, create } = ServicesCrud('personal');

  useEffect(()=>{
    get();
  },[])

  return (
    <div className='content'>
        <div className='content-form'>
          <label className='input-label'>
            nombre
            <input 
              type="text" 
              onChange={(e) => setSendData({...sendData, nombre: e.target.value})}
            />
          </label>
          <label className='input-label'>
            apellido paterno
            <input 
              type="text" 
              onChange={(e) => setSendData({...sendData, ape_paterno: e.target.value})}
            />
          </label>
          <label className='input-label'>
            apellido materno
            <input 
              type="text" 
              onChange={(e) => setSendData({...sendData, ape_materno: e.target.value})}
            />
          </label>
          <label className='input-label'>
            Nº DNI
            <input 
              type="number" 
              onChange={(e) => setSendData({...sendData, num_dni: parseInt(e.target.value)})}
            />
          </label>
          <button onClick={()=>create(sendData)}>agregar</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>nombre</th>
              <th>apellido paterno</th>
              <th>apellido materno</th>
              <th>Nº DNI</th>
            </tr>
          </thead>
          <tbody>
            {
              getData?.map(data => {
                return(
                  <tr key={data.id}>
                    <td>{data?.nombre}</td>
                    <td>{data?.ape_paterno}</td>
                    <td>{data?.ape_materno}</td>
                    <td>{data?.num_dni}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default App
