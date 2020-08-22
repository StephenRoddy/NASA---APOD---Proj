(this.webpackJsonpneo_search=this.webpackJsonpneo_search||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(2),l=a.n(s),i=(a(12),a(3)),c=a(4),o=a(6),m=a(5),d=function(e){var t=e.media;return n.a.createElement("div",null,n.a.createElement("div",{class:"card bg-light"},n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{classs:"card-title"},"Today's Picture: ",t.title),n.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},t.date),n.a.createElement("img",{class:"img-fluid rounded mx-auto d-block",src:t.url}),n.a.createElement("div",null,n.a.createElement("p",{class:"card-text mx-auto mt-3"},t.explanation)))))},u=function(e){var t=e.media;return n.a.createElement("div",null,n.a.createElement("div",{class:"card bg-light mx-3"},n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{classs:"card-title"},"Today's Video: ",t.title),n.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},t.date),n.a.createElement("div",{class:"embed-responsive embed-responsive-16by9 mx-auto d-block"},n.a.createElement("iframe",{class:"embed-responsive-item",src:t.url,controls:!0})),n.a.createElement("div",null,n.a.createElement("p",{class:"card-text mx-auto mt-3"},t.explanation)))))},h=function(e){return n.a.createElement("nav",{class:"navbar mb-4 navbar-light bg-light"},n.a.createElement("a",{class:"navbar-brand",href:"#"},n.a.createElement("h3",null,"NASA:_APoD"),n.a.createElement("h5",{class:"text-wrap"},"Astronomy Picture of the Day")))},p=function(e){return n.a.createElement("div",{class:"card bg-light"},n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{classs:"card-title"},"Information"),n.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"What is this website?"),n.a.createElement("img",{class:"img-fluid rounded mx-auto d-block",src:"https://helix.northwestern.edu/sites/helix/files/field/image/nasa-logo-web-rgb.png",alt:"Nasa Logo"}),n.a.createElement("div",null,n.a.createElement("p",{class:"card-text mx-auto mt-3"},"This app is built with React and Bootstrap  and uses Nasa's Astronomy picture of the day API. Everyday a new image or video is shared. Nasa have this to say about the service:"),n.a.createElement("p",null,'"One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery."  '),n.a.createElement("p",null," NASA also provide an image of the day. Click below to visit the gallery on nasa.com.")),n.a.createElement("a",{href:"https://www.nasa.gov/multimedia/imagegallery/iotd.html",target:"_blank",class:"btn btn-primary btn-lg active float-right",role:"button","aria-pressed":"true"},"Visit the Gallery")))},b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={media:[]},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.nasa.gov/planetary/apod?api_key=UrXJyJZWfOwzULw07rfPFuiur4cEsYCmC7WaSkTZ").then((function(e){return e.json()})).then((function(t){e.setState({media:t})})).catch(console.log)}},{key:"render",value:function(){var e;return"video"==this.state.media.media_type&&(e=n.a.createElement(u,{media:this.state.media})),"image"==this.state.media.media_type&&(e=n.a.createElement(d,{media:this.state.media})),n.a.createElement("div",null,n.a.createElement(h,null),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-sm mb-3"},e),n.a.createElement("div",{class:"col-sm mb-3"},n.a.createElement(p,null))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.ac587984.chunk.js.map