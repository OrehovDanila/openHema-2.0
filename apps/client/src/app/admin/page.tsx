import { Flex } from "antd";
import NominationsGrid from "./nominations/NominationsGrid";

export default function adminPage () {
	return(
    <Flex justify="space-evenly" align="center" >
      <div>
        {<NominationsGrid/>}
      </div>
      <div>Бойцы</div>
    </Flex>
	)
}
