import Link from 'next/link'
import Router from 'next/router'

export default function Home() {
  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
  })

  Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2.routeChangeComplete->路由结束变化,参数为:',...args)
  })

  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
  })

  Router.events.on('routeChangeError',(...args)=>{
    console.log('4,routeChangeError->跳转发生错误,参数为:',...args)
  })

  Router.events.on('hashChangeStart',(...args)=>{
    console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
  })

  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
  })


  function gotoNews1(){
    Router.push({
      pathname:'/news',
      query:{
        id:1
      }
    })
  }
  function gotoNews2(){
    Router.push('/news?id=2')
  }
  return (
    <>
      <h1>我是首页</h1>
      <div>
        <Link href="/news?id=1"><a>新闻1</a></Link><br/>
        <Link href="/news?id=2"><a>新闻2</a></Link><br/>
        <button onClick={gotoNews1}>新闻1</button><br/>
        <button onClick={gotoNews2}>新闻2</button><br/>
        <Link href="#test"><a>测试</a></Link>
      </div>
      <div style={{width:'100%',height:'1000px'}}>

      </div>
      <div id='test' style={{width:'100%',height:'100px'}}>
        显示这里
     </div>
    </>
  )
}
