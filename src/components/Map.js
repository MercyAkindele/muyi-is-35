import React from "react";

export default function Map() {
  return (
    // embedded map from google
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.2359938768595!2d-95.4551531847392!3d29.741882539756464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c114f5df0071%3A0xa8551ef44a5c52ed!2s4444%20Westcreek%20Ln%2C%20Houston%2C%20TX%2077027!5e0!3m2!1sen!2sus!4v1665688639185!5m2!1sen!2sus"
        width="600"
        height="450"
        title="Steak48"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
