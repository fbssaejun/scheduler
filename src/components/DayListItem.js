import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  const dayClass = classnames("day-list__item", {
    "day-list__item--selected" : props.selected,
    "day-list__item--full" : !props.spots
  });

  const formatSpots = (spots) => {
    if(spots ===  1) {
      return '1 spot '
    } else if (spots > 1) {
      return spots + ' spots'
    } else {
      return 'no spots'
    }
  }
  
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} >
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)} remaining</h3>
    </li>
  );
}