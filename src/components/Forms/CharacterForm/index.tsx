import {Form, Input, Select} from "antd";

export default function CharacterForm() {

    const onFinish = (values: any) => {
    }

    const onFinishFailed = (errorInfo: any) => {
        console.error('Failed:', errorInfo);
    }

    return <Form
        name="character"
        labelCol={{span: 4}}
        wrapperCol={{span: 14}}
        layout="horizontal"
        initialValues={{size: 'large', remember: true}}
        size={'large'}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete={'off'}
    >
        <Form.Item label="Name" name="name">
            <Input/>
        </Form.Item>
        <Form.Item label="Age" name="age">
            <Input type="number" />
        </Form.Item>
        <Form.Item label="Rank" name="rank">
            <Select>
                <Select.Option value="chuunin">Chuunin</Select.Option>
                <Select.Option value="jounin">Jounin</Select.Option>
                <Select.Option value="anbu">Anbu</Select.Option>
                <Select.Option value="nukenin">Nukenin</Select.Option>
            </Select>
        </Form.Item>

        <Form.Item>
            <button type="submit">Submit</button>
        </Form.Item>
    </Form>
}