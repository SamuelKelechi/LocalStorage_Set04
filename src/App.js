/* eslint-disable jsx-a11y/no-distracting-elements */
import styled from 'styled-components';


function App() {
  return (
    <Container>
      <PostCard>
        <InputHolder>
          <Image />
          <FormInput>
            <input type="file"/>
            <input placeholder="Name"/>
            <input placeholder="Address"/>
            <input placeholder="Phone Number"/>
            <textarea rows="5" cols="50" placeholder="Description"/>
          </FormInput>
        </InputHolder>
        <button>
          Submit
        </button>
      </PostCard>

      <Info><marquee>Displayed Cards Here</marquee></Info>

      <CardWrapper>
        <Card>
          <Top>
            <div>Icon</div>
            <div>Del</div>
          </Top>
          <Border></Border>
          <ProfImage />
          <Name>Name</Name>
          <Address>Address</Address>
          <PhoneNum>Phone</PhoneNum>
          <Descr>Description</Descr>
        </Card>
      </CardWrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: #26262A;
color: white;
`

const PostCard = styled.div`
width: 600px;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items:center;
border: 1px solid whitesmoke;
background-color: #38393A;

   button {
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
width: 590px;
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
border: 2px solid white;

@media screen and (max-width: 650px) {
  width: 90%
}
`

const FormInput = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 250px;
width: 250px;

   input {
    height: 30px;
    border-radius: 5px;
    padding-left: 8px;
  }

  textarea {
    resize: none;
    border-radius: 5px;
    padding-left: 8px;
`

const Info = styled.div`
display: flex;
justify-content: center;
font-size: 25px;
width: 250px;
margin-top: 15px;
font-weight: bolder;
margin-bottom: 15px;
border-top: 1px solid whitesmoke;
border-bottom: 1px solid whitesmoke;
color: #FFEB9E;
`

const CardWrapper = styled.div`
  width: 98%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`

const Card = styled.div`
  height: 350px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2A2B2E;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid white;
  box-shadow: 5px 3px 7px #ccc;

  @media screen and (max-width: 330px) {
    width: 90%
  }
`

const Top = styled.div`
width: 97%;
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;

div{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 50%;
  height: 35px;
  width: 35px;
}
`
const Border = styled.div`
height: 50px;
border-bottom: 1px solid white;
width: 100%;
`
const ProfImage = styled.img`
display: flex;
justify-content: center;
align-items: center;
object-fit: cover;
height: 150px;
width: 150px;
border-radius: 50%;
border: 2px solid white;
margin-top: -70px;
background-color: whitesmoke
`
const Name = styled.div`
`
const Address = styled.div`
`
const PhoneNum = styled.div`
`
const Descr = styled.div`
`