
export default function WelcomeScreen({name, handleBackButton}){

    return(
        <div>
            <h1> Hello World {name}</h1>
            <button type="submit" onClick={handleBackButton}>Back</button>
        </div>
        
    )
}