import React, {useState} from 'react'
import dynamic from 'next/dynamic'

const One = dynamic(import('../components/one'))


function Time(){

    const [show,setShow] = useState(false)

    const changeShow = ()=>{
        setShow(show ? false :true);
    }
    return (
        <>
            { show && (<One />)}
            <div><button onClick={changeShow}>显示</button></div>
        </>
    )
}
export default Time
