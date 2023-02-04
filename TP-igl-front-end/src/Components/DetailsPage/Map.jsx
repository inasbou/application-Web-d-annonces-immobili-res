import React from "react";

const Map = () => {
  let place = "kouba";
  let url=`https://maps.google.com/maps?width=696&amp;height=597&amp;hl=en&amp;q=kouba+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`
         
  function sanitizeUrl(url) {
    return url.replaceAll("&amp", "&");
  }
  return (
    <div className="flex  p-3   justify-center align-middle">
      <iframe
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=696&amp;height=597&amp;hl=en&amp;q=kouba+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{width:"796px",
        height:" 397px"} }
        frameborder="0"
      ></iframe>
    </div>
  );
};

;

export default Map;

//<iframe scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src={sanitizeUrl(url)} frameborder="0"></iframe>
//`https://maps.google.com/maps?width=696&amp;height=597&amp;hl=en&amp;q=${sanitizeUrl(palce)}+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed