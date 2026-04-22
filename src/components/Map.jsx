import React from "react";

function Map() {
  return (
    <section className="w-full">
      {/* Left: Map */}
      <div className="h-87.5 md:h-112.5">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
