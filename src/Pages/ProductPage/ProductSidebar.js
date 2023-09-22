import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { catergories, ratingsData } from "../../assets/data";

const ProductSidebar = ({
  price,
  setPrice,
  category,
  setCategory,
  setRatings,
  ratings,
}) => {
  const [scroll, setScroll] = useState(false);
  const [cateValue, setCateValue] = useState(true);
  const [ratValue, setRatValue] = useState(true);

  // const [category, setCategory] = useState();
  // window.addEventListener("scroll", (e) => {
  //   if (window.scrollY >= 500) {
  //     setScroll(true);
  //     console.log(scroll);
  //   } else {
  //     setScroll(false);
  //   }
  // });

  //Price Handler
  const priceHandler = (event, newValue) => {
    setPrice(newValue);
  };

  //Category Handler
  const categoryHandler = (cate) => {
    setCategory(cate.toLowerCase());
    console.log(category);
    setCateValue(true);
  };
  //Rating Handler
  const ratingHandler = (rating) => {
    setRatings(rating);
    console.log(ratings);
    setRatValue(true);
  };

  //Clear Handler
  const clearAllHandler = () => {
    setPrice([0, 25000]);
    setCategory();
    setRatings();
    setRatValue(false);
    setCateValue(false);
  };

  return (
    <>
      <aside id="productSidebar">
        <div className="sidebar">
          <div className="sidebar_heading">
            {scroll}
            <h1>Filter</h1>

            <span onClick={() => clearAllHandler()}>Clear All</span>
          </div>

          <div className="sidebar_slider">
            <h1 className="title">Price</h1>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              getAriaLabel={() => "Price range slider"}
              min={0}
              max={25000}
            />

            <div className="slider_value_box">
              <span>{price[0]}</span>to<span>{price[1]}</span>
            </div>
          </div>

          <div className="sidebar_categories">
            <h1 className="title">Categories</h1>
            <div className="sidebar_radio_group">
              <RadioGroup>
                {catergories?.map((cate) => (
                  <>
                    <FormControlLabel
                      label={<span className="sidebar_label">{cate}</span>}
                      value={cateValue ? cate : null}
                      control={<Radio size="small" />}
                      key={cate}
                      onChange={() => categoryHandler(cate)}
                      size="20px"
                    />
                  </>
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className="sidebar_ratings">
            <h1 className="title">Ratings</h1>
            <div className="sidebar_checkbox_group">
              <RadioGroup>
                {ratingsData?.map((rat) => (
                  <FormControlLabel
                    key={rat}
                    value={ratValue ? rat : null}
                    label={
                      <span className="sidebar_label">
                        {rat} <AiFillStar /> & above
                      </span>
                    }
                    control={<Radio size="small" />}
                    onChange={() => ratingHandler(rat)}
                  />
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductSidebar;
