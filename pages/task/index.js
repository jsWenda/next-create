import React, { useEffect, useState } from "react";
import { Button, List, message } from "antd"
import axios from 'axios';
import Router from 'next/router'

const fetcher = (url) => fetch(url).then((res) => res.json());

function TaskListPage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTask();
    }, [])

    function getTask() {
        axios.get('/api/task')
            .then(function (response) {
                setTasks(response.data.data)
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    function addTask() {
        Router.push('/task/add');
    }

    function deleteTask(id) {
        axios.delete('/api/task', {
            data: { id }
        })
            .then(function (response) {
                message.success(response.data.message);
                getTask()
            })
            .catch(function (error) {
                console.log(error)
                message.error(error.data.message);
            });
    }

    return (
        <>
            <div style={{ 'width': '600px', margin: '0 auto' }}>
                <Button onClick={addTask}>新增</Button>
                <List
                    header={<div>最新任务信息列表</div>}
                    bordered
                    dataSource={tasks}
                    renderItem={item => (
                        <List.Item>
                            <div>
                                <span style={{ 'width': '400px', display: 'inline-block' }}>任务名称:{item.title}</span>
                                <Button onClick={() => {
                                    deleteTask(item.id)
                                }}>删除</Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button onClick={() => {
                                    Router.push(`/task/${item.id}`);
                                }}>查看</Button>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
}
export default TaskListPage
