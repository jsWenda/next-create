import { Form, Input, Button, message } from 'antd';
import Styles from './add.module.css'
import axios from 'axios';
import Router from 'next/router'

function Add() {
    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post('/api/task', values)
            .then(function (response) {
                message.success(response.data.message);
                Router.push('/task');
            })
            .catch(function (error) {
                console.log(error)
                message.error(error.data.message);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function cancelAdd(){
        Router.push('/task');
    }

    return (
        <div className={Styles.form}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="任务标题"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your title!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="任务描述"
                    name="desc"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your desc!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        新增
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button onClick={cancelAdd}>
                        取消
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Add