import moment from 'moment';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';




function App() {

  const [showImage, setShowImage] = useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumb] = useState("");
  const [descript, setDesc] = useState("");

  const [data, setData] = useState([])


 const DisplayImage = (e) => {
   const file = e.target.files[0];
   const res = URL.createObjectURL(file);
   setShowImage(res);
 };

 const AddNew = () => {
   const items = {
    id: data.length + 1,
    icon: name.charAt(0,),
    name: name, 
    address: address,
    number: number,
    avatar: showImage,
    descript: descript,
    time: Date.now(),
   }
   setData([...data, items]);

   setName("");
   setAddress("");
   setNumb("");
   setDesc("");
 }

 const Del = (id) => {
   const remove = data.filter((el) => el.id !== id);
   setData(remove);
 }



 useEffect(() => {
   const save = JSON.parse(localStorage.getItem("store"));
   setData(save);
 }, [])

 useEffect(() => {
  localStorage.setItem("store", JSON.stringify(data));
}, [data])

  return (
    <Container>
      <PostCard>
        <InputHolder>
          <Image src={showImage}/>
          <FormInput>
            <input type="file" onChange={DisplayImage} />
            <input placeholder="Name" 
            value={name} 
            onChange={(e) => {
              setName(e.target.value);
            }}
            />

            <input placeholder="Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value)
              }}
            />

            <input placeholder="Phone Number"
              value={number}
              onChange={(e) => {
                setNumb(e.target.value)
              }}
            />

            <textarea  maxlength="50" rows="5" cols="50" placeholder="Description"
              value={descript}
              onChange={(e) => {
                setDesc(e.target.value)
              }}
            />
          </FormInput>
        </InputHolder>
        <button onClick={() => {
          AddNew();
        }}>
          Submit
        </button>
      </PostCard>

      <Info><marquee>Displayed Cards Here</marquee></Info>

      <CardWrapper>
        {data.map((props) => (
          <Card key = {props.id}>
            <Top>
              <div>{props.icon}</div>
              <div onClick={() => {
                Del()
                console.log("Deleted")
              }}>Del</div>
            </Top>
            <Border></Border>
            <ProfImage src={props.avatar}/>
            <Name>{props.name}</Name>
            <Address>{props.address}</Address>
            <PhoneNum>{props.number}</PhoneNum>
            <Descr>{props.descript}</Descr>
           Posted: {moment(props.time).fromNow()}
        </Card>
        ))}
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

    :hover {
      ${'' /* background-color: lightgreen; */}
      box-shadow: 2px 2px 5px #ccc;
    }

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
  height: auto;
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
  cursor: pointer;
  text-transform: uppercase;
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
object-fit: center;
height: 150px;
width: 150px;
border-radius: 50%;
border: 2px solid white;
margin-top: -70px;
background-color: whitesmoke
`
const Name = styled.div`
text-align: center;
height: 20px;
width: 97%;
`
const Address = styled.div`
text-align: center;
height: 20px;
width: 97%;
`
const PhoneNum = styled.div`
text-align: center;
height: 25px;
width: 97%;
`
const Descr = styled.div`
text-align: center;
width: 97%;
height: 90px
`