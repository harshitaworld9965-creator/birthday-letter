import "./App.css";

function App() {
  return (
    <main className="scene">
      <div className="envelope">
        <div className="envelope-back"></div>

        <div className="card">
          <div className="card-inside">
            <p className="card-small">31 October</p>
            <h1 className="card-title">Happy Birthday!</h1>
            <h2 className="card-name">Harshita</h2>
            <p className="card-message">
              Here's to another year of learning new things, building pretty stuff, and being proud of how far you've come.
            </p>
            <p className="card-sign">with love ♡</p>
          </div>

          <div className="card-cover">
            <span className="card-cover-text">for you ♡</span>
          </div>
        </div>

        <div className="envelope-pocket"></div>

        <div className="envelope-flap"></div>

        <button className="seal" aria-label="Open the letter">
          H
        </button>
      </div>

      <p className="hint">tap the seal</p>
    </main>
  )
}

export default App;