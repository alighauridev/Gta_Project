import React, { useState } from "react";
import "./Inputs.scss";
import { Button, CircularProgress, IconButton } from "@mui/material";
import {
  BsEyeFill,
  BsEyeSlashFill,
  BsFileMinus,
  BsPlus,
  BsSubtract,
} from "react-icons/bs";

import RemoveIcon from "@mui/icons-material/Remove";
//Input
export const Input = ({
  inputTitle,
  inputIcon,
  type,
  placeholder,
  value,
  onChange,
  name,
  onKeyPress,
  inputError,
}) => {
  return (
    <>
      <div className="input_wrapper">
        <div className="input_box">
          <div className="input_title">{inputTitle}</div>
          <div
            className="input_main"
            style={inputError ? { border: "1px solid #d23f57" } : {}}
          >
            <div className="input_icon_right">{inputIcon}</div>
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              name={name}
              onKeyPress={onKeyPress}
            />
          </div>
          <div className="input_error">{inputError}</div>
        </div>
      </div>
    </>
  );
};

//Password Input
export const PasswordInput = ({
  inputTitle,
  inputIcon,
  type,
  placeholder,
  value,
  onChange,
  name,
  Click,
  onKeyPress,
  inputError,
}) => {
  const [click, setClick] = useState(Click);

  return (
    <>
      <div className="input_wrapper">
        <div className="input_box">
          <div className="input_title">{inputTitle}</div>
          <div
            className="input_main"
            style={inputError ? { border: "1px solid #d23f57" } : {}}
          >
            <div className="input_icon_right">{inputIcon}</div>
            <input
              type={
                type === "password" ? (click ? "password" : "text") : "password"
              }
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              name={name}
              onKeyPress={onKeyPress}
            />
            <div className="input_icon_left" onClick={() => setClick(!click)}>
              {value && (
                <button>{click ? <BsEyeSlashFill /> : <BsEyeFill />}</button>
              )}
            </div>
          </div>
          <div className="input_error">{inputError}</div>
        </div>
      </div>
    </>
  );
};

// Search Input
export const SearchInput = ({ inputIcon, Click, ...rest }) => {
  return (
    <>
      <div className="search_wrapper">
        <div className="search_box">
          <div className="search_input_main">
            <input type={"text"} {...rest} />
            <div className="search_btn" onClick={Click}>
              {inputIcon}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//Quanity Input

export const QuanityInput = ({
  value = 1,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <>
      <div className="quanity_box">
        <button className="increment" onClick={() => handleIncrement}>
          <BsPlus />
        </button>

        <span>{value}</span>
        <button className="decrement " onClick={() => handleDecrement}>
          <RemoveIcon />
        </button>
      </div>
    </>
  );
};

// Submit Input

export const SubmitInput = ({ value, loading, formSubmit }) => {
  return (
    <>
      <div className="submit_wrapper">
        {/* <Button disabled>Disabled</Button> */}

        <div
          className="submit_box"
          style={
            loading
              ? { background: "rgb(210 63 87 / 63%)" }
              : { background: "rgb(210, 63, 87)" }
          }
          onClick={formSubmit}
        >
          <input
            type="submit"
            value={loading ? "Submitting" : value}
            disabled={loading}
            // disabled
            style={loading ? { cursor: "not-allowed" } : { cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
};

//UploadImage Input

export const UploadImageInput = ({ imageBox, onChange, name, inputError }) => {
  return (
    <>
      <div className="uploadImage_wrapper">
        <div className="uploadImage_box">
          <div className="avatar_image">
            <img src={imageBox} alt={name} />
          </div>
          <div className="avatar_button">
            <input
              type="file"
              name={name}
              accept="image/*"
              onChange={onChange}
            />
            <div className="input_error">{inputError} </div>
          </div>
        </div>
      </div>
    </>
  );
};
