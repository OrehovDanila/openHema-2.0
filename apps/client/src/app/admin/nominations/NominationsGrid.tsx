'use client'
import { Card } from "antd";

import NominationCard from "./NominationCard";
import {  useEffect } from "react";
import NewNominationForm from "./NewNomination";
import useNominations from './NominationsStore';
import { observer, Provider } from "mobx-react";


const NominationsGrid = observer(() => {
  const nominationsStore = useNominations();
  const items = Object.values(nominationsStore.nominations);
  useEffect(() => {
    nominationsStore.fetchNominations().then()
  }, [])

  const newNomination = async ({ nominationName }) => {
    await nominationsStore.createNominations({ nominationName });
  }

  const deleteNomination = async (nomination) => {
    await nominationsStore.deleteNomination(nomination);
  }

  return(
    <Provider store={nominationsStore}>
      <Card title="Номинации" bordered={false} style={{ width: '45vw' }}>
        {items.map((item) => (<NominationCard nomination={item} key={item.id} deleteNomination={deleteNomination}/>))}
        <NewNominationForm onFinish={newNomination}/>
      </Card>
    </Provider>
  )
});

export default NominationsGrid;
