import React, { useState } from "react";

import ReactDatamaps from "react-india-states-map";

const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?",
    },
  },
};

const MapMain = () => {
  const [activeState, setactiveState] = useState({
    data: STATES.Maharashtra,
    name: "India",
  });

  const [stateLists, setStateLists] = useState(STATES);

  const stateOnClick = (data, name) => {
    console.log(data);
    setactiveState({ data, name });
  };

  return (
    <ReactDatamaps
      regionData={stateLists}
      mapLayout={{
        hoverTitle: "Count",
        noDataColor: "#D36418",
        borderColor: "#ffffff",
        hoverBorderColor: "pink",
        hoverColor: "gray",
      }}
      hoverComponent={({ value }) => {
        return (
          <>
            <p>{value.name}</p>
          </>
        );
      }}
      onClick={stateOnClick}
      activeState={activeState}
    />
  );
};
export default MapMain;
