// src/components/objects.js
import React from 'react'

// objects is the parameter passed to a fubction called Objects (defined by const).
// What the function does is everything after the fat arrow

const Objects = ({ objects }) => {
//  console.log({objects.near_earth_objects[1]});
return (
<div>
  <center><h1>NASA: Astronomy Picture of the Day</h1></center>
  {
    <div class="card">
      <div class="card-body">
      <h5 classs="card-title">{objects.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{objects.date}</h6>
      <img src="https://apod.nasa.gov/apod/image/2008/PIA21923_fig1SeeingTitan1024.jpg" class="rounded mx-auto d-block"/>
      <div>
        <p class="card-text mx-auto mt-3">{objects.explanation}</p>
      </div>

      </div>
    </div>
  }
</div>
)
};

export default Objects
