function PersonInfoPage(props){
    const { name } =  props;
    return (
        <>
        用户名：{ name }
        </>
    )
}

// 用户每次发送请求，都会执行
export async function getServerSideProps(context){
  // 可以获取到的信息
  const { params,req, res } = context;
  return {
      props:{
          name: 'Wenda'
      }
  }
}

export default PersonInfoPage;