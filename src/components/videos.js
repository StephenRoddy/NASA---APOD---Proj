// src/components/objects.js
import React from 'react'

// objects is the parameter passed to a fubction called Objects (defined by const).
// What the function does is everything after the fat arrow

const Videos = ({ media }) => {
//  console.log({objects.near_earth_objects[1]});
return (
<div>
  {
      <div class="card bg-light mx-3">
        <div class="card-body">
          <h5 classs="card-title">{media.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{media.date}</h6>
          <div class="embed-responsive embed-responsive-16by9 mx-auto d-block">
            <iframe class="embed-responsive-item" src={media.url} controls/>
          </div>
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
