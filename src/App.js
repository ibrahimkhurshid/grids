import './App.css';

function App() {
return (
<div className="container">
  <div className="item">
    <div className="direct-child"></div>
    <div className="direct-child"></div>
    <div className="direct-child"></div>
    <div className="direct-child"></div>
    <div className="direct-child"></div>
    <div className="direct-child"></div>
  </div>
  <div className="item"></div>
  <div className="item"></div>
  <div className="item"></div>
  <div className="item"></div>
  <div className="item"></div>
  <div className="item">
    <div className="direct-child"></div>
    <div className="direct-child"></div>
    <div className="direct-child"></div>
    <div className="direct-child"></div>
    <div className="direct-child"></div>
    <div className="direct-child">
      <div className="grand-child"></div>
      <div className="grand-child"></div>
      <div className="grand-child"></div>
      <div className="grand-child"></div>
      <div className="grand-child"></div>
      <div className="grand-child"></div>
      <div className="grand-child"></div>
      <div className="grand-child"></div>
      <div className="grand-child">
        <div className="grand-grand-child"></div>
        <div className="grand-grand-child"></div>
        <div className="grand-grand-child"></div>
        <div className="grand-grand-child"></div>
        <div className="grand-grand-child"></div>
        <div className="grand-grand-child"></div>
        <div className="grand-grand-child"></div>
        <div className="grand-grand-child"></div>
        <div className="grand-grand-child"></div>
      </div>
    </div>
  </div>
  <div className="item"></div>
  <button className="item"
  onMouseLeave={(e)=>e.target.style['background']="steelblue"}  
  onMouseEnter={(e)=>e.target.style['background']="black"}>x</button>
</div>
);
}

export default App;