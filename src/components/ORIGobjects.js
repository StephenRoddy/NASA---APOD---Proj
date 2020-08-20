// src/components/objects.js
import React from 'react'

// objects is the parameter passed to a fubction called Objects (defined by const).
// What the function does is everything after the fat arrow

const Objects = ({ objects }) => {
return (
<div>
  <center><h1>Near Earth Objects</h1></center>
  {objects.map((objects) => (
    <div class="card">
      <div class="card-body">
      <h5 classs="card-title">{objects.near_earth_objects.name}</h5>
      </div>
    </div>
  ))}
</div>
)
};

export default Objects
//near_earth_objects.2015-09-08.

/*
<h5 classs="card-title">{objects.[2015-09-08].near_earth_objects.name}</h5>
<h6 class="card-subtitle mb-2 text-muted">{objects.near_earth_objects.[2015-09-08].close_approach_data.miss_distance.kilometers}</h6>
<p class="card-text">{objects.[2015-09-08].near_earth_objects.absolute_magnitude_h}</p>

*/
