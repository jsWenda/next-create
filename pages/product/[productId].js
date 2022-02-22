import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'

function ProductDetailPage(props) {
    const { product } = props
    return (
        <>
            <h1>产品列表页</h1>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <br />
            <Link href='/product'>返回产品列表页</Link>
        </>
    )
}

// 从json文件读取数据
async function getData() {
    // process.cwd() 获取根目录
    const filePath = path.join(process.cwd(), 'data', 'product.json')
    const jsonData = await fs.readFile(filePath);
    const products = JSON.parse(jsonData).data;
    return products;
}

// 获取单个路径下页面使用的数据
export async function getStaticProps(context) {
    // 获取产品id
    const { params: { productId } } = context;
    const products = await getData();
    const product = products.find(pro => pro.id === productId);
    return {
        props: {
            // product:[{id:1,name:'产品1',desc:'产品1的详细内容'}] 
            product
        },
        // 告诉服务器需要间隔多长时间重新渲染
        revalidate: 10
    }
}

// 获取所以路径
export async function getStaticPaths() {
    // 从json文件获取所有id
    const products = await getData();
    const ids = products.map(product => product.id);
    // 处理为paths需要的格式
    const pathWithParams = ids.map(id => ({ params: { productId: id } }));
    // [{params:{productId:'1'}},{params:{productId:'2'}}]
    return {
        paths: pathWithParams,
        fallback: false,
    }
}

export default ProductDetailPage