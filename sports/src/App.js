import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./Components/Navbar";
import {
  updateItems,
  updateSubCategories,
  updateSubCategory,
} from "./features/sports/sportsReducer";
import Card from "./Components/Card";

function App() {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.sports.active);
  //console.log(active,"active")

  const subcategories = useSelector((state) => state.sports.subcategories);
  const subcategory = useSelector((state) => state.sports.subcategory);
  const items = useSelector((state) => state.sports.items);
  //console.log(subcategories)

  //console.log(subcategory+"sub");

  const getData = async () => {
    const res = await fetch(`http://localhost:3003/${active}`);
    const data = await res.json();
    // console.log(data)
    let subcategories = Object.keys(data);
    dispatch(updateSubCategories(subcategories));
    dispatch(updateSubCategory(subcategories[0]));

    for (let key in data) {
      if (key === subcategory) {
        console.log(data[key], "key");
        dispatch(updateItems(data[key]));
      }
    }
  };
  const getItems = async () => {
    const res = await fetch(`http://localhost:3003/${active}`);
    const data = await res.json();

    for (let key in data) {
      if (key === subcategory) {
        console.log(data[key], "key");
        dispatch(updateItems(data[key]));
      }
    }
  };

  console.log(items);
  const changeSub = (title) => {
    dispatch(updateSubCategory(title));
  };

  useEffect(() => {
    getData();
  }, [active]);
  useEffect(() => {
    getItems();
  }, [subcategory]);

  return (
    <div className="App">
      <Navbar />
      <div className="catg">
        {subcategories.map((category) => {
          let clss = "";
          if (category === subcategory) {
            clss = "clss";
            console.log(clss + "cls");
          }
          return (
            <>
              {" "}
              <span className={` ${clss}`} onClick={() => changeSub(category)}>
                {category}
              </span>
            </>
          );
        })}
      </div>
      <h2>Highlights</h2>
      <div className="images">
        {items.map((item) => {
          return (
            <Card image={item.image_url} title={item.title} tags={item.tags} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
