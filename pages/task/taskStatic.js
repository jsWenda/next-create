import React from "react";
import { List } from "antd"
import { readJson } from '../api/task'

function TaskListPage(props) {
    const { tasks } = props;
    return (
        <>
            <div style={{ 'width': '600px', margin: '0 auto' }}>
                <List
                    header={<div>最新任务信息列表</div>}
                    bordered
                    dataSource={tasks}
                    renderItem={item => (
                        <List.Item>
                            <div>
                                <span style={{ 'width': '400px', display: 'inline-block' }}>任务名称:{item.title}</span>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
}

export async function getStaticProps(){
    const data = readJson('task.json')
    return {
        props:{
            tasks:data
        }
    }
}
export default TaskListPage
