import React from "react";
import { withRouter } from "react-router-dom";
import { size } from "lodash"
import { getItem } from "../redux/city.action";
import { connect } from "react-redux";
import  './city-preview.styles.scss'

const CityPreview = ({ title, items, imageUrl,id, linkUrl, history, match, location,getItem}) => (
  <div className={`${size} collection-preview`}
  onClick = {() => {getItem(title); history.push(`${match.url}${linkUrl}`)}}
  >
    <h3 className="title">{title.toUpperCase()}</h3>
    <img className= "image" src={imageUrl}/>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  getItem: (id) => dispatch(getItem(id)),
});

export default withRouter(connect(null, mapDispatchToProps)(CityPreview));
