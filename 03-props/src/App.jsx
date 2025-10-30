import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     <Card user='soumya' age={18} />
     <Card user='Ankita' age={19} />
    </div>
  )
}

export default App
