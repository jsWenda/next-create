import { useState } from "react"

function Test() {
    const [color, setColor] = useState('blue');
    function changeColor(){
        setColor(color === 'red' ? 'blue' : 'red')
    }
    return (
        <>
            <div>CSS文字颜色演示</div>
            <button onClick={changeColor}>点击改变文字颜色</button>
            <style jsx>
                {`
                 div{color:${color};}
               `}
            </style>
        </>
    )
}
export default Test
