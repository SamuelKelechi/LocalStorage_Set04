import styled from 'styled-components';


function App() {
  return (
    <Container>
      <InputHolder>
        <Image>Image</Image>
        <FormInput>
          <input type="file"/>
          <input />
          <input />
        </FormInput>
      </InputHolder>
    </Container>
  );
}

export default App;

const Container = styled.div`
width: 100vw;
height: 100%;
color: white;
display: flex;
flex-direction: column;
align-items: center;
`

const InputHolder = styled.div`
height: 400px;
width: 600px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
padding: 15px;
`

const Image = styled.div`
background-color: red;
height: 300px;
width: 300px;
border-radius: 50%;
margin: 7px;
object-fit: cover;
display: flex;

`

const FormInput = styled.div`
display: flex;
flex-direction: column;
`