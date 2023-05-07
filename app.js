//simple structure------------------------>
// const heading=React.createElement("h1",{id:"heading"},"Hello World from React");         
// const root=ReactDOM.createRoot(document.getElementById("root"));          
// root.render(heading);           
// console.log(heading);


//nested sructure---------------------->
// <!--Nested structure with single children---------------------->
// <div id="parent">
//       <div id="child">
//          <h1>I am H1 tag</h1>
//       </div>
// </div> -->


const parent=React.createElement
("div",{id:"parent"}
,React.createElement
("div",{id:"child"}
,React.createElement
("h1",{},"welcome to React with Nested structure")));
           
console.log(parent);//object
const root=ReactDOM.createRoot(document.getElementById("root"));
     
root.render(parent);

            
