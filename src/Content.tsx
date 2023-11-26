const Content = () => {

        const handleNameChange = () => {
            const names = ['zahid','Amin','Kharal'];
            const intRandom = Math.floor(Math.random()*3 )
        return names[intRandom];
        }

        const handleClick = () => {
          console.log('you clicked');
        }

        const handleClick2 = (name: string) => {
          console.log(`${name} was clicked`);
        }
        const handleClick3 = (e: any) => {
          console.log(e.target.innerText);
        }
    
  return (
    <div>
        <p>Hello {handleNameChange()} !</p>
        <button onClick={handleClick}>Click It</button>
        <button onClick={() => handleClick2('zahid')}>Click too</button>
        <button onClick={(e) => handleClick3(e)}>Click tree</button>
       
    </div>
  )
}

export default Content;