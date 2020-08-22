// src/components/objects.js
import React from 'react'

// objects is the parameter passed to a fubction called Objects (defined by const).
// What the function does is everything after the fat arrow

const Pictures = ({ media }) => {
//  console.log({objects.near_earth_objects[1]});
return (
<div>
      <div class="card bg-light">
        <div class="card-body">
          <h5 classs="card-title">Today's Picture: {media.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{media.date}</h6>
          <img class="img-fluid rounded mx-auto d-block" src={media.url} />
          <div>
            <p class="card-text mx-auto mt-3">{media.explanation}</p>
          </div>
        </div>
      </div>
  </div>
  )
};

export default Pictures
