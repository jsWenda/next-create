import React from "react";
import useSWR from "swr";
import { List,message } from "antd"
import axios from 'axios';
import Add from '../../components/add'
import {
    DeleteOutlined,
  } from '@ant-design/icons';

const fetcher = (url) => fetch(url).then((res) => res.json());

function TaskListPage() {
    const { data, error } = useSWR("/api/task", fetcher);

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    const tasks = data.data || [];

    function deleteTask(id){
        axios.delete('/api/task', {
            data: { id }
            })
            .then(function (response) {
                message.success(response.data.message);
            })
            .catch(function (error) {
                console.log(error)
                message.error(error.data.message);
            });
    }

    return (
        <>
            <Add />
            <div style={{ 'width': '600px', margin: '0 auto' }}>
                <List
                    header={<div>最新任务信息</div>}
                    bordered
                    dataSource={tasks}
                    renderItem={item => (
                        <List.Item>
                            <div>
                             <span onClick={()=>{
                                 deleteTask(item.id)
                             }}><DeleteOutlined /></span> <span>任务名称:{item.title} 任务详情:{item.desc}</span>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
}
export default TaskListPage
