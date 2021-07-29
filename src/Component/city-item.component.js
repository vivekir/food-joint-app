import React from "react";

import CITY_DATA from "../Pages/city-data";
import CityPreview from "../Component/city-preview.componet"

class CityItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: CITY_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ ...otherCollectionProps}) => (
          <CityPreview {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default CityItem;