import React from "react";
import { Modal } from "../../../components/modal";

interface Props {}

const Quiz = (props: Props) => {
  return (
    <Modal
      size="cover"
      description="lorem"
      title={"Disable Access"}
      show={true}
      handleClose={() => {}}
      {...props}
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
      voluptates, aperiam impedit delectus vel nobis molestiae hic dignissimos
      ipsum, sapiente eius consequatur tempora quas quia iusto ut aspernatur
      atque officia!
    </Modal>
  );
};

export default Quiz;
