import { useState } from "react";

const Content = () => {

        const [name,setName]=useState('Zahid');

        const handleNameChange = () => {
            const names = ['zahid','Amin','Kharal'];
            const intRandom = Math.floor(Math.random()*3 )
        return setName(names[intRandom]);
        }

        const handleClick2 = (name: string) => {
          console.log(`${name} was clicked`);
        }
        const handleClick3 = (e: any) => {
          console.log(e.target.innerText);
        }
    
  return (
    <div>
        <p>Hello {name} !</p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={() => handleClick2('zahid')}>Click too</button>
        <button onClick={(e) => handleClick3(e)}>Click tree</button>       
    </div>
  )
}

export default Content;