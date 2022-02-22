function PersonId(props){
    const {id} = props;
    return (
        <>
        用户Id:{id}
        </>
    )
}

// 用户每次发送请求，都会执行
export async function getServerSideProps(context){
    // 可以获取到的信息
    const { params,req, res } = context;
    const { uuid } = params;
    return {
        props:{
            id: uuid
        }
    }
  }

export default PersonId