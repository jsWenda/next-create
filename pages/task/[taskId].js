import React, { useState, useEffect } from "react";
import { Button } from "antd"
import Router, { useRouter } from "next/router"
import axios from "axios";

function taskDetailPage() {
    const router = useRouter();
    const [task, setTask] = useState({});
    const id = router.query.taskId;
    const { title = '', desc = '' } = task;
    useEffect(() => {
        axios.get(`/api/task/${id}`).then((response) => {
            setTask(response.data);
        })
    }, [])

    return (
        <>
            <div style={{ 'width': '600px', margin: '0 auto' }}>
                <Button onClick={() => { Router.push('/task') }}>返回任务列表</Button>
                <h1>{title}任务详情</h1>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default taskDetailPage