
const todos = [
  'presentation react',
  'presentation synfony',
  'presentaiton wordpress',
  'presentation PHP'
]

function App() {  

  return <>
   <Title color="green"> my compponent</Title>      
      
      <input type="text" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam pariatur nisi dolor cumque, porro nihil nesciunt, quos provident natus, expedita veniam? Amet, iusto deleniti minima quis culpa numquam accusamus perspiciatis quidem harum natus nemo, dolor dolore accusantium dicta quas architecto? Aperiam possimus doloribus vitae ad fugiat, inventore id dolorem aspernatur?
      </p>

      <ul>
        {todos.map(todo=>(<li key={todo}>{todo}</li>) )}
      </ul>

  </> 

  function Title({color, hidden, ...props}) {
    
    return <h1 style={{color: color}} {...props}></h1>
    
  }
}

export default App
