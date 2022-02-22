import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'

function ProductPage(props){
    const { products } = props;
    console.log(products);
    return (
        <>
        <h1>产品列表页</h1>
        <ul>
            {
                products.map(product => {
                    // return (<li key={product.id}>{product.name}</li>)
                    return (<li key={product.id}><Link href={`product/${product.id}`}>{product.name}</Link></li>)
                })
            }
        </ul>
        </>
    )
}

// 静态生成 getStaticProps (Static Generation): Fetch data at build time.
export async function getStaticProps(){
    // process.cwd() 获取根目录
    const filePath = path.join(process.cwd(),'data','product.json')
    const jsonData = await fs.readFile(filePath);
    const products = JSON.parse(jsonData).data;
    return {
        props:{
            // products:[{id:1,name:'产品1'}] 
            products
        }
    }
}

export default ProductPage
