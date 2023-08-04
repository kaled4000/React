import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function HandleChange(event){
       const {name,value} = event.target
       //console.log(newvalue + inputName)
      
       setContact((prev)=> {
         if (name === "fName") {
          return {
            fName:value,
            lName:prev,
            email:prev.email
          };
        }if(name === "lName") {
          return{
            fName:prev.fName,
            lName:value,
            email:prev.email
          };}
         else if (name === "email") {
          return {
            fName:prev.fName,
            lName:prev,
            email:value.email};}
                 ;})
  }
  return (
    <div className="container">
      <h1>Hello 
        {contact.fName}{contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
      <input name="fName" 
      value={contact.fName}
      onChange={HandleChange}placeholder="First Name" />
      <input name="lName" 
      value={contact.lName}
      onChange={HandleChange}placeholder="Last Name" />
      <input name="email" 
      value={contact.email}
      onChange={HandleChange}placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;










// import React, { useState } from "react";


// function App() {

//   const [fullname,SetFullname] =useState({
//     fName:"",
//     lName:"",
//   });

//   function handlechange(e){
   
   
//     const {value,name} = e.target;
  
//     SetFullname((pervValue) => {
//       // never acces to event from here for more information why
//       // go React wesite and search about 
//       // SyntheticEvent 
//     if (name === "fName"){
//       return {
//         fName:value,
//         lName:pervValue.lName
//       };
//     }else if(name === "lName"){
//       return{
//         fName:pervValue.fName,
//         lName:value
//       }
//     }
//    })
//   }
 
//   return (
//     <div className="container">
//       <h1>Hello {fullname.fName}{fullname.lName}</h1>
//       <form>
//         <input name="fName" onChange={handlechange} placeholder="First Name"
//         // for sure the only thing will change in our varable
//          value={fullname.fName}   />
//         <input name="lName" onChange={handlechange} placeholder="Last Name" 
//         value={fullname.lName}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
