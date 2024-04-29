import { useEffect, useState } from "react";
import "./App.css";
import Users from "./compopens/Users";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
function App() {
  const [data, setdata] = useState([]);
  const [phla_btn,setPhla_btn]=useState(1)


 

  function parentAlert(dataa) {
    alert(`${dataa.name} is ${dataa.age} years old.`);
}



  useEffect(() => {
    const DataFetch = async () => {
      try {
        const prePage=15;
        const response = await fetch(`https://api.github.com/search/users?q=followers:>0&sort=followers&order=desc&page=${phla_btn}&per_page=${prePage}`);
        const dataa = await response.json();
        setdata(dataa.items);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };

    DataFetch();
  }, [phla_btn]);

  return (
    <>
<Button variant="success" onClick={()=>{setPhla_btn(phla_btn+1)}}>Next</Button>
<Button variant="info"  onClick={()=>{setPhla_btn(phla_btn-1)}}>Previous</Button> 
  <Table striped bordered hover>

    <thead>
      <tr>
        <th>Score</th>
        <th>Size</th>
        <th>id</th>
        <th>Type</th>
      </tr>
      
    </thead>
    {
     
     
      data.map((e ,i)=>
    
    <tr>
      <th key={i}>{e.login}</th>
      <th key={i}>{e.score}</th>
      <th key={i}>{e.id}</th>
      <th key={i}>{e.type}</th>

    </tr> 
      )
}

    <tbody>
  </tbody>
</Table>

<Users pass={parentAlert}/>
    </>
  );
}

export default App;
