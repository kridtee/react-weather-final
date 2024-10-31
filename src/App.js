import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <button className="btn btn-primary">Hello</button>
        <footer>
          This project was coded by Kirsty H and is{" "}
          <a
            href="https://github.com/kridtee/react-weather-final"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
