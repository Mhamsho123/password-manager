import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomeScreen from './components/homescreen'
import WelcomeScreen from './components/welcomescreen'
import './App.css'



function App() {

  const [name, setName] = React.useState("");
  const [hasSubmitted, setHasSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");


  function handleSubmit(userName){

    if(!userName || userName.trim() === ""){
      setError("Error: No name inserted!")
      return
    }
    setName(userName);
    setHasSubmitted(true);
    setError("")

}
  function handleBack(s){
    setHasSubmitted(false);
    setName("");
    setError("")

  }
  return(
    <>
      {!hasSubmitted && <HomeScreen onSubmitHandle = {handleSubmit} error={error} />}
      {hasSubmitted && <WelcomeScreen name ={name} handleBackButton={handleBack}/>}
    </>
  )
}

export default App
