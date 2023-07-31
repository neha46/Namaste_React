import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement=> js-object=>ReactDOM manipulation(finding root)=> HtmlElement(render)

//const heading =React.createElement
//("h1",{id:"heading"},"Namaste React");

//looks messy and create problem dveloping large scale applications by core of react(react.create element)

//const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);


//so that we use JSX------------------------
const jsxheading=<h1 id="heading">Namaste React using JSX</h1>
//line 16 code is not pure js code that React / Js engine understands, so 
//JSX (transpiled before It reaches to Js)- Parcel->Babel-js compiler.

//JSX=>babel transpiles it to React.createElement=> js-object=>ReactDOM manipulation(finding root)=> HtmlElement(render)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);



//React element in single line by jsx---------
const single_Head=<h1 id="new">Namaste React by single Line</h1>;
const element=ReactDOM.createRoot(document.getElementById("element1"));
element.render(single_Head);


//React element in multiple line by jsx---------
const multiple_Head=(<h1 id="new">
      Namaste React by multiple Line</h1>);
const element2=ReactDOM.createRoot(document.getElementById("element2"));
element2.render(multiple_Head);



//2 function component for composition-------
const Title=()=>{
      return<h3 id="heading">Component Composition</h3>
};

//React Functionl component------------
const HeadingComponent=()=>{
       return<div>
      <Title />
       <h1 id="heading">Namaste React By  React Functional component</h1>
      </div>
};
//const HeadingComponent=()=> <h1 id="heading">Namaste React By  React Functional component</h1>-----------for returning single jsx;
// react functional component always  start from  capital letter func name.

const root1=ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<HeadingComponent/>);//render functional component










