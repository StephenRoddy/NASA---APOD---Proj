import React from 'react'

// functional component
const Infocard = (props) =>{

  return(
      <div class="bg-light shadow">
      <div class="card-body">
        <h5 classs="card-title">Information</h5>
        <h6 class="card-subtitle mb-2 text-muted">What is this website?</h6>
        <img class="img-fluid rounded mx-auto d-block" src= "https://helix.northwestern.edu/sites/helix/files/field/image/nasa-logo-web-rgb.png"  alt ="Nasa Logo"/>
        <div class ="clearfix">
          <p class="card-text mx-auto mt-3">This app is built with React and Bootstrap  and uses Nasa's Astronomy picture of the day API. Everyday a new image or video is shared. Nasa have this to say about the service:</p>
          <p>"One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery."  </p>
          <p> NASA also provide an image of the day. Click below to visit the gallery on nasa.com.</p>
          <a href="https://www.nasa.gov/multimedia/imagegallery/iotd.html" target="_blank" class="button btn btn-primary btn-lg active float-right" role="button" aria-pressed="true">Visit the Gallery</a>
        </div>
      </div>
    </div>
  )
};

export default Infocard


//https://www.nasa.gov/multimedia/imagegallery/iotd.html
