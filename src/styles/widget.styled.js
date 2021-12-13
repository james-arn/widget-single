import styled from "styled-components";

export const WidgetStyled = styled.div`
  /* =======
typography
=========*/

  .widget-small-text {
    font-size: 12px;
    font-weight: 400;
  }

  .widget-big-text {
    font-size: 18px;
    font-weight: 700;
  }

  .widget-row {
    font-size: 14px;
    font-weight: 400;
  }

  /* =======
layout
=========*/

  //widget header section
  .widget-container {
    width: 221px;
    margin-bottom: 37px;
  }

  //here is where badge theme is used
  .widget-header {
    background-color: var(--badge-color);
    border-radius: 6px;
    padding: 0.5em;
    color: white;
    display: flex;
    align-items: center;
  }

  .widget-logo-col {
    width: 20%;
  }

  .widget-text-col {
    width: 80%;
    margin-left: 0.75em;
  }
  .widget-small-text {
    margin: 0;
    color: var(--font-color);
  }

  .GS-logo {
    margin: 0;
  }

  .widget-big-text {
    margin: 0;
    color: var(--font-color);
  }

  //widget body
  .widget-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  //for tooltip hover pop up
  .info-icon {
    width: 12px;
  }

  .widget-row {
    color: #3b755f;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    text-align: start;
    align-items: center;
  }

  /* =======
LINK TO PUBLIC PROFILE CHECKBOX FEATURE
=========*/

  .checkbox {
    width: 22px;
    height: 22px;
    border: 4px solid transparent;
    border-radius: 50%;
    cursor: pointer;
  }

  .checkbox:hover,
  .checkbox:focus {
    width: 22px;
    height: 22px;
    background: #afc6bd;
    border-radius: 50%;
    border: 4px solid #afc6bd;
    transition: all 0.5s;
  }

  /* =======
ACTIVATE BADGE SLIDER FEATURE
=========*/
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f9f9f9;
    border: 2px solid #afc6bd;
    border-radius: 100px;

    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 0px;
    bottom: 0.5px;
    background-color: #f9f9f9;
    border: 1px solid #f2ebdb;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
    border-radius: 100px;

    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #3b755f;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #f9f9f9;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
    border: 1px solid #afc6bd;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .slider.round:hover:before,
  .slider.round:focus:before {
    border: 6px solid rgba(175, 198, 189, 0.5);
    opacity: 75%;
    margin: -4px;
    transition: all 0.5s;
  }
`;

/* =======
BADGE COLOUR SWATCH FEATURE
=========*/
export const SwatchContainer = styled.div`
  display: flex;
`;

export const SwatchButton = styled.button`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: 2px;
  border: ${(props) =>
    props.theme === props.id ? "1.5px solid #b0b0b0" : "transparent"};

  &:hover {
    background-color: ${(props) => props.color};
    opacity: 80%;
  }

  &:active {
    border: 1.5px solid #b0b0b0;
  }
`;

export const blueTheme = {
  backgroundColor: "#2e3a8c",
  color: "#F9F9F9",
};

export const greenTheme = {
  backgroundColor: "#3B755F",
  color: "#F9F9F9",
};

export const beigeTheme = {
  backgroundColor: "#F2EBDB",
  color: "#3B755F",
};

export const whiteTheme = {
  backgroundColor: "#FFFFFF",
  color: "#3B755F",
};

export const blackTheme = {
  backgroundColor: "#212121",
  color: "#F9F9F9",
};
