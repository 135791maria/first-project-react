import axios from "axios"
import React, { useState, useRef } from "react"
import template7 from "./Assets/template7.png";
import seta from "./Assets/seta.png";
import lixeira from "./Assets/lixeira.png";
import {
  Container,
  Image,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,

} from "./styles"

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {
    const data = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
     
    });
     console.log(data)

    //setUsers([
    //  ...users, 
    // { 
    // id: Math.random(),
    //   name: inputName.current.value, 
    //   age: inputAge.current.value 
    //  },
    // ])

  }
  function deleteUser(userid) {
    const newUsers = users.filter(user => user.id !== userid)
    setUsers(newUsers);

  }


  return (

    <Container>
      <Image alt="logo-image" src={template7} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel >Nome</InputLabel>
        <Input ref={(inputName)} Placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={(inputAge)} Placeholder="idade" />

        <Button onClick={addNewUser}>Cadastrar <img alt="arrow" src={seta} />
        </Button>

        <ul>
          {users.map(user => (
            <User Key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={lixeira} alt="lata de lixo" />
              </button>
            </User>
          ))
          }
        </ul>

      </ContainerItens>
    </Container>
  );

}
export default App

