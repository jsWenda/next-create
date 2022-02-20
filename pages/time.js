import React, {useState} from 'react'

function Time(){

    const [nowTime,setTime] = useState(Date.now())

    const changeTime= async ()=>{
        const moment = await import('moment');
        setTime(moment.default(Date.now()).format())
    }
    return (
        <>
            <div>显示时间为:{nowTime}</div>
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}
export default Time
