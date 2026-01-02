import React from "react"



export default function HomeScreen({onSubmitHandle, error }){



    function personName(formData){
        const userName = formData.get("inputName")
        onSubmitHandle(userName)

    }

    return(
        <div>
            <h1>Welcome, we will be managing all your passwords.</h1>
            <div>
                <h2>Lets start of with getting you information</h2>
            </div>
            <div>
            <form className="nameForm" action={personName}>
                <div className="nameRow">
                    <label htmlFor="inputName">What is your name?</label>
                    <input id="inputName" name="inputName" type="text" placeholder="John Doe" />
                    {error && <p>{error}</p>}
                </div>
                    <button className="submitButton"type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}