import { Button, Card } from "antd";


export default function NominationCard ({nomination, deleteNomination}) {
  const onClick = async () => {
    await deleteNomination(nomination);
  }
  //TODO Менять имя номинации
  return(
    <Card title={nomination.nominationName} bordered={false} extra={<Button danger onClick={onClick}>Удалить</Button>}>
      <p>Placeholder</p>
    </Card>
  )
}
