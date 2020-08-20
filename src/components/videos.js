// src/components/objects.js
import React from 'react'

// objects is the parameter passed to a fubction called Objects (defined by const).
// What the function does is everything after the fat arrow

const Videos = ({ media }) => {
//  console.log({objects.near_earth_objects[1]});
return (
<div>
  <center><h1>NASA: Astronomy Picture of the Day</h1></center>
  {
    <div class="card">
      <div class="card-body">
      <h5 classs="card-title">{media.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{media.date}</h6>
      <iframe width="420" height="315" src={media.url} class="rounded mx-auto d-block" controls/>
      <div>
        <p class="card-text mx-auto mt-3">{media.explanation}</p>
      </div>

      </div>
    </div>
  }
</div>
)
};

export default Videos
