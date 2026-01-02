export default function HomeScreen({ onSubmitHandle, error }) {

    function personName(e) {
      e.preventDefault(); // important
      const formData = new FormData(e.target);
      const userName = formData.get("inputName");
      onSubmitHandle(userName);
    }
  
    return (
      <div>
        <h1>Welcome, we will be managing all your passwords.</h1>
  
        <h2>Lets start off with getting your information</h2>
  
        <form className="nameForm" onSubmit={personName}>
          <div className="nameRow">
            <label htmlFor="inputName">What is your name?</label>
            <input
              id="inputName"
              name="inputName"
              type="text"
              placeholder="John Doe"
            />
  
            {error && <p>{error}</p>}
          </div>
  
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
  