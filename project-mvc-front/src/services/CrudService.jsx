import { useState } from "react";
import AxiosService from "./AxiosService"

export default function ServicesCrud (url, SetMethod, inget) {

    const [data, setData] = useState([])
    const [dataShow, setDataShow] = useState({})

    const { http } = AxiosService();
    
    const traer = () => {
        http.get(url + '/get')
        .then((response) =>{
            console.log(response?.data?.data)
            setData(response?.data?.data)
            SetMethod && SetMethod(response?.data?.data)
        })
        .catch((error) => {
            console.log('Error al traer datos', error)
        })
    }

    const crear = (data, setShow, clear) => {
        http.post(url + '/create', data)
        .then((response) => {
            console.log(response?.data?.message)
            !inget && traer()
            setShow && setShow(false)
            clear && clear()
        })
        .catch((error) => {
            console.log('Error al crear',error)
        })
    }
    
    const editar = (data, setShow, clear) => {
        http.put(url + `/update/${data.id}`, data)
            .then((response) => {
                console.log(response?.data?.message)
                !inget && traer()
                setShow && setShow(false)
                clear && clear()
            })
            .catch((error) => {
                console.log('Error al editar',error)
            })
    }
    
    const eliminar = (id, setShow, clear) => {
        http.delete(url + `/delete/${id}`)
            .then((response) => {
                console.log(response?.data?.message)
                !inget && traer()
                setShow && setShow(false)
                clear && clear()
            })
            .catch((error) => {
                console.log('Error al eliminar',error)
            })
    }

    const buscar = (id) => {
        http.get(url + `/show/${id}`)
        .then((response) =>{
            console.log(response?.data?.data)
            setDataShow(response?.data?.data)
            SetMethod && SetMethod(response?.data?.data)
        })
        .catch((error) => {
            console.log('Error al buscar datos', error)
        })
    }

    return {
        create : crear,
        get : traer,
        update : editar,
        destroy : eliminar,
        show : buscar,
        showData : dataShow,
        getData : data
    }
}

