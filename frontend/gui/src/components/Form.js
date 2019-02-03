import React, { Component } from 'react';
import {
  Form, Input, Button,
} from 'antd';

import axios from 'axios';
import TextArea from 'antd/lib/input/TextArea';

class CustomForm extends Component {

    handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        const { TextArea } = Input;
        switch (requestType) {
            case 'post':
                return axios.post('http://localhost:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            case 'put':
                return axios.put(`http://localhost:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
        <div>
            <Form onSubmit={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.articleID
            )}>
            <Form.Item label="Title">
                <Input name="title" placeholder="Put a title here..." />
            </Form.Item>
            <Form.Item label="Content">
                <TextArea rows="4" name="content" placeholder="Enter some content..." />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>
            </Form>
        </div>
        );
    }
}

export default CustomForm;