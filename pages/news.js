import { useRouter} from 'next/router'
import Link from 'next/link'

const News = ()=>{
    const router = useRouter();
    return (
        <>
            <div>id为{router.query.id}的新闻详情</div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}

export default News
