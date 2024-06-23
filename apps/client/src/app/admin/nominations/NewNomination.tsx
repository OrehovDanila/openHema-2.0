'use client'
import { Button, Input, Form, Card } from "antd";

export default function NewNominationForm ({onFinish}) {
  return(
    <Card title={"Новая номинация"}>
        <Form onFinish={onFinish}>
          <Form.Item name="nominationName">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary"  htmlType="submit">Добваить</Button>
          </Form.Item>
        </Form>
    </Card>
  )
}
