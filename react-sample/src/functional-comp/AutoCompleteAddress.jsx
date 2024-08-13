import React, { useState, useEffect, useRef } from 'react';
const AutoCompleteAddress = (props) => {
  const [state, setState] = useState({
    name: '',
    street_address: '',
    city: '',
    state: '',
    zip_code: '',
    googleMapLink: ''
  });

  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (typeof google !== 'undefined') {
      autocompleteRef.current = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {});
      autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
    } else {
      console.error('Google Maps JavaScript API library is not loaded.');
    }

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, []);
  const handlePlaceSelect = () => {
    let addressObject = autocompleteRef.current.getPlace();
    let address = addressObject.address_components;

    setState({
      name: addressObject.name,
      street_address: `${address[0].long_name} ${address[1].long_name}`,
      city: address[4].long_name,
      state: address[6].short_name,
      zip_code: address[8].short_name,
      googleMapLink: addressObject.url
    });
  };

  const handleChange = (event) => {
    setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state)
  };

  const clearForm = () => {
    setState({
      name: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
      googleMapLink: ''
    });
  };

  return (
    <div>
      <h1>AutoComplete Address demo</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="autocomplete"
          className="input-field"
          type="text"
        />
        <input 
          name="name"
          value={state.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input 
          name="street_address"
          value={state.street_address}
          placeholder="Street Address"
          onChange={handleChange}
        />
        <input 
          name="city"
          value={state.city}
          placeholder="City"
          onChange={handleChange}
        />
        <input
          name="state"
          value={state.state}
          placeholder="State"
          onChange={handleChange}
        />
        <input 
          name="zip_code"
          value={state.zip_code}
          placeholder="Zipcode"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AutoCompleteAddress;

