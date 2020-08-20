import React from 'react'

   const Objects = ({ objects }) => {
     return (
       <div>
         <center><h1>Contact List</h1></center>
         {objects.map((objects) => (
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">{objects.name}</h5>
               <h6 class="card-subtitle mb-2 text-muted">{objects.email}</h6>
               <p class="card-text">{objects.company.catchPhrase}</p>
             </div>
           </div>
         ))}
       </div>
     )
   };

   export default Objects
