import { action, makeAutoObservable, runInAction } from "mobx";
import { createContext, useContext } from "react";
import useApi from "../../../api/useApi";
// eslint-disable-next-line react-hooks/rules-of-hooks
const instance = useApi();

//TODO круд сторы не являются уникальными, поэтому будем выносить всё в базовую функциоальнность но пока так

const nominationsStore = makeAutoObservable({
  nominations: {},
  fetchNominations: async () => {
    try {
      const result = await instance.get('/nominations');
      const data = result.data;
      data.forEach((rec) => {
        nominationsStore.nominations[rec.id] = rec;
      })
    } catch (e) {
      console.error(e);
    }
  },
  createNominations: action(async (nomination) => {
    try {
      const response = await instance.post('/nominations', {
        nominationName: nomination.nominationName
      });
      runInAction(() => {
        nominationsStore.nominations[response.data.id] = response.data;
      })
    } catch (e) {
      console.error(e)
    }
  }),
  deleteNomination: async (nomination) => {
    try {
      const url = '/nominations/' + nomination.id;
      const response = await instance.delete(url);
      runInAction(() => {
        delete nominationsStore.nominations[response.data.id];
      })
    } catch (e) {
      console.error(e)
    }

  }
})


export const NominationsContext = createContext(nominationsStore);

export default function useNominations  () {
  return useContext(NominationsContext);
}
