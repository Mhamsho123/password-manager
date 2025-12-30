import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomeScreen from './components/homescreen'
import WelcomeScreen from './components/welcomescreen'
import './App.css'



function App() {

  const [name, setName] = React.useState("");
  const [hasSubmitted, setHasSubmitted] = React.useState(false);


  function handleSubmit(userName){
    setName(userName);
    setHasSubmitted(true);

}
  function handleBack(s){
    setHasSubmitted(false);
    setName("");

  }
  return(
    <>
      {!hasSubmitted && <HomeScreen onSubmitHandle = {handleSubmit} />}
      {hasSubmitted && <WelcomeScreen name ={name} handleBackButton={handleBack}/>}
    </>
  )
}

export default App
