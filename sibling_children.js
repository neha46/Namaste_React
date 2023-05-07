//---- for array of children or siblings children like h1 and h2---->
//  <div id="parent">
//      <div id="child">
//             <h1>I am H1 tag</h1>
//             <h2>I am h2 tag</h2>
//             <h3>I am h2 tag</h3>
//       </div>
// </div>

//code in react----------
const main=React.createElement("div",{id:parent},
React.createElement("div",{id:child},
[React.createElement("h1",{},"hi i am an h1 tag"),React.createElement("h2",{},"hi I am an h2 tag"),React.createElement("h3",{},"hi I am an h3 tag")]
)
);
console.log(main);
const get=ReactDOM.createRoot(document.getElementById("parent"));
get.render(main);

//same element as child multiple times by using variable---------
// const a=React.createElement("h1",{},"hi I am an h1 tag diff");
// const b=React.createElement("h2",{},"hi I am an h2 tag diff");
// const main=React.createElement("div",{id:parent},
// React.createElement("div",{id:child},
// [a,b,a,b]
// )
// );




//if we alreday have something tag elements inside root  then react will replace it by the object values(that we have been passed)  
//if  root comes bt top and below then react will not affect it
    