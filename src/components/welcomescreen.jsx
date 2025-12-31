export default function WelcomeScreen({ name, handleBackButton }) {
    return (
      <div>
        <div>
          <h1>Great to have you, {name}</h1>
          <button type="button" onClick={handleBackButton}>
            Back
          </button>
        </div>
  
        <form>
          <div className="form-field">
            <label htmlFor="passwordTitle">Password Title</label>
            <input
              id="passwordTitle"
              name="passwordTitle"
              type="text"
            />
          </div>
  
          <div className="form-field">
            <label htmlFor="passwordSaver">Password</label>
            <input
              id="passwordSaver"
              name="passwordSaver"
              type="password"
            />
          </div>
  
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
  