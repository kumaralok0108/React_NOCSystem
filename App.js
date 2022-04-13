import logo from './Logo.png';
import './App.css';
import Jobs from "./Jobs.js";
import { useState } from "react";


function App() {
  const [title, setTitle] = useState("");
  const [code,setCode]=useState("");
  const [skill,setSkill]=useState("");
  const [display_pro,setDisplay]=useState("");
 
  function Onchange(e){
   const string = e.target.value.split(',');
   if(e.target.value!=0){
    setCode(string[0]);
    setDisplay('block');
    setTitle(string[2]);
    setSkill(string[1]);
   } else {
    setDisplay('none');
   }

 }
  return (
<div className="container box-size">
<div className="row">
<div className="col-6 col-s-6 block-1 inner-box box-1">
<div className='noc-skill-block'>
<span><h2> NOC SKILL LEVELS</h2></span>
  <ul className='no-ul-style'>
    <li>Level 0 includes management occupations</li>
    <li>Level A includes professional occupations that usually require a post-secondary degree</li>
    <li>Level B iincludes technical occupations that usually require some post-secondary credential or technical trainin </li>
  </ul>
</div>
<div className='logo-block '>
    <img src={logo} className="App-logo" alt="logo" />
</div>
</div>
<div className="col-6 col-s-6  inner-box box-2">
<h1>WHAT SKILL LEVEL IS MY OCCUPATION?</h1>
<div className='custom-select Select-width'> 
  <select onChange={Onchange}>
  
  <option value="0">Select OCCUPATION</option>
      {
            Jobs &&
            Jobs.Jobs.map((h, i) => 
            (<option key={i} value={h.id+','+h.skill+','+h.label}>{h.label}</option>))
        }
  
  </select>
</div>
<div className='discription-block' style={{display:display_pro}}>
  
        
<h2 id="dynamic_value" > {title} is a SKILLED occupation with NOC code {code} and Skill Level {skill}.</h2>
   
<p>In order to receive CRS points for a job offer in Canada, the role would need to be considered skilled (NOC 0, A, or B). The job must also be:</p>
<ol>
  <li><span>Full-time and non seasonal;</span></li>
  <li><span>For a minimum of at least one year; and </span></li>
  <li><span>Supported by a positive Labour Market Impact Assessment (LMIA), or exempt from needing an LMIA.</span></li>
</ol>
</div>
</div>
</div>
</div>
  );
}

export default App;
