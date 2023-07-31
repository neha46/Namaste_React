import React from "react";
import ReactDOM   from "react-dom/client";

//functional component  composition
const Main=()=>(<h2 id="new2">This is an Component Compsotion</h2>);

//JSx->React element
const hybrid=(<div><h2 id="heading"> This is Jsx(React Element)</h2>
<Main />
</div>

);

//Functional Component
const Head=()=>(
      ////Jsx expression must have only one parent
       <div>
      {Main()}
      {hybrid}
      <h1 id="new">Functional Component</h1>
      </div>
);
const parent=ReactDOM.createRoot(document.getElementById("parent"));
parent.render(<Head/>);

//if you want to create multiple parent inside jsx ,either you should use  wraping of <div></div> as parent
//but somewhere it looks messy and ugly,so React solve this and introduce [<React.Fragment></React.Fragment>]

const SecHead=()=>(
      //althogh we can also use <></> empty tag==<React.Fragment></React.Fragment>
       <React.Fragment>
      {Main()}
      {hybrid}
      <>
      {Main()}
      </>
      <h1 id="new">Functional component by using React fragments</h1>
      </React.Fragment>
);
const child=ReactDOM.createRoot(document.getElementById("child"));
child.render(<SecHead/>);



