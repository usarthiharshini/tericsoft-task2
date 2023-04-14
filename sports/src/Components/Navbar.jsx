import React, { useEffect } from "react";
import {
  updateActive,
  updateCategories,
} from "../features/sports/sportsReducer";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPersonRifle,
  faPersonSwimming,
  faPersonBiking,
  faHorse,
  faPersonSkiingNordic,
  faGolfBall,
  faPersonRunning,
  faPersonSnowboarding,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faStar,
  faPersonRifle,
  faPersonSwimming,
  faPersonBiking,
  faHorse,
  faPersonSkiingNordic,
  faGolfBall,
  faPersonRunning,
  faPersonSnowboarding
);
const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.sports.categories);
  const active = useSelector((state) => state.sports.active);
  const getCategories = async () => {
    const res = await fetch(`http://localhost:3003/categories`);
    const data = await res.json();

    dispatch(updateCategories(data));
    console.log(categories);
  };

  const setData = (title) => {
    console.log("fired" + title);
    dispatch(updateActive(title));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="nav">
      {categories.map((category) => {
        let cls = "";
        if (category.title === active) {
          cls = "cls";
          console.log(cls + "cls");
        }
        return (
          <div key={category.title} onClick={() => setData(category.title)}>
            <button key={category.title} className="icon-button">
              <FontAwesomeIcon icon={category.icon} className={`btn ${cls}`} />
              <span>{category.title}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
