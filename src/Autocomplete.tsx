import { useRef, useEffect } from "react";

const AutoComplete = () => {
  const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const options = {
    componentRestrictions: { country: "ng" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"]
  };

  useEffect(() => {
    if (window.google) {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current!, // Use '!' to assert that it's not null
        options,
      );
    } else {
      console.error("Google Maps JavaScript API not loaded.");
    }
  }, []);

  return (
    <div>
      <label>Location</label>
      <input ref={inputRef} /> 
    </div>
  );
};

export default AutoComplete;

