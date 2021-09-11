import styled from 'styled-components';


function App() {
  return (
    <Container>
      <PostCard>
        <InputHolder>
          <Image />
          <FormInput>
            <input type="file"/>
            <input />
            <input />
          </FormInput>
        </InputHolder>
        <button>
          Submit
        </button>
      </PostCard>
      <CardWrapper>
        <Card>
          Hello World
        </Card>
      </CardWrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const PostCard = styled.div`
width: 600px;
border: 1px solid black;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items:center;

  & button {
    height: 40px;
    width: 100px;
    background: green;
    color: white;
    border: none;
    margin: 8px;
    border-radius: 5px;
    cursor: pointer;
  }

@media screen and (max-width: 650px) {
  width: 80%
}
`

const InputHolder = styled.div`
width: 600px;
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
border-radius: 8px;

@media screen and (max-width: 650px) {
  flex-direction: column;
  width: 100%
}
`

const Image = styled.img`
background-color: red;
height: 300px;
width: 300px;
border-radius: 8px;
margin: 7px;
object-fit: cover;
display: flex;
justify-content: center;
align-items: center;
`

const FormInput = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 150px;
width: 250px;

  & input {
    height: 30px
  }
`

const CardWrapper = styled.div`
  width: 98%;
  flex-wrap: wrap;
`

const Card = styled.div`
  height: 350px;
  width: 320px;
  flex-direction: column;
  
`