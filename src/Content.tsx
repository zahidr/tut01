import './css/content.css'
import { useState } from "react";

const Content = () => {

        const [name,setName]=useState('zahid');

        const handleNameChange = () => {
            const names = ['zahid','Amin','Kharal'];
            const intRandom = Math.floor(Math.random()*3 )
        return setName(names[intRandom]);
        }

        const handleClick2 = (name: string) => {
          console.log(`${name} was clicked`);
        }

        const handleClick3 = (e:any ) => {
          console.log(e.target.innerText);
        }
    
  return (
    <main>
        <p>Hello {name} !</p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={() => handleClick2('zahid')}>Click too</button>
        <button onClick={(e) => handleClick3(e)}>Click tree</button>
    </main>
  )
}

export default Content;
