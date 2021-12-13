//font only import from css.
import "../App.css";
//imgs
import logoWhiteImg from "../assets/logo-white.svg";
import logoGreenImg from "../assets/logo-green.svg";
import checkboxUntickImg from "../assets/check_box_outline_blank.svg";
import checkboxTickImg from "../assets/check_box_ticked.svg";
//React imports
import {
  SwatchButton,
  SwatchContainer,
  WidgetStyled,
} from "../styles/widget.styled";
import { useState, useEffect } from "react";
import { TooltipDiv } from "./Tooltip";
//utils

const Widget = ({ widgetNum, fetchedData }) => {
  const [checkbox, setCheckbox] = useState(true); // Link to public profile
  const [theme, setTheme] = useState("blueTheme"); // Badge colour
  const [toggle, setToggle] = useState(false); // Activate badge

  // colour swatch
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <WidgetStyled>
      {fetchedData.length > 1 && (
        <section className="widget-container">
          <div className="widget-header">
            <div className="widget-logo-col">
              {theme === "whiteTheme" ? (
                <img
                  src={logoGreenImg}
                  alt="greenspark logo green"
                  className="GS-logo"
                />
              ) : theme === "beigeTheme" ? (
                <img
                  src={logoGreenImg}
                  alt="greenspark logo green"
                  className="GS-logo"
                />
              ) : (
                <img
                  src={logoWhiteImg}
                  alt="greenspark logo white"
                  className="GS-logo"
                />
              )}
            </div>
            <div className="widget-text-col">
              {widgetNum === "1" && (
                <div>
                  <h3 className="widget-small-text">This product collects</h3>
                  <h2 className="widget-big-text">
                    {fetchedData[0].amount} {fetchedData[0].type}
                  </h2>
                </div>
              )}
              {widgetNum === "2" && (
                <div>
                  <h3 className="widget-small-text">This product plants</h3>
                  <h2 className="widget-big-text">
                    {fetchedData[1].amount} {fetchedData[1].type}
                  </h2>
                </div>
              )}
              {widgetNum === "3" && (
                <div>
                  <h3 className="widget-small-text">This product offsets</h3>
                  <h2 className="widget-big-text">
                    {fetchedData[2].amount}kgs of {fetchedData[2].type}
                  </h2>
                </div>
              )}
            </div>
          </div>
          <div className="widget-body">
            <div className="widget-row">
              <span className="widget-list-item">
                Link to Public Profile
                <TooltipDiv />
              </span>

              {!checkbox ? (
                <img
                  src={checkboxUntickImg}
                  alt="checkbox"
                  className="checkbox"
                  onClick={() => setCheckbox(!checkbox)}
                />
              ) : (
                <img
                  src={checkboxTickImg}
                  alt="checkbox"
                  className="checkbox"
                  onClick={() => setCheckbox(!checkbox)}
                />
              )}
            </div>

            <div className="widget-row">
              <span>Badge colour</span>
              <SwatchContainer>
                <SwatchButton
                  id="blueTheme"
                  color="#2E3A8C"
                  theme={theme}
                  onClick={() => setTheme("blueTheme")}
                />
                <SwatchButton
                  id="greenTheme"
                  color="#3B755F"
                  theme={theme}
                  onClick={() => setTheme("greenTheme")}
                />
                <SwatchButton
                  id="beigeTheme"
                  color="#F2EBDB"
                  theme={theme}
                  onClick={() => setTheme("beigeTheme")}
                />
                <SwatchButton
                  id="whiteTheme"
                  color="#FFFFFF"
                  theme={theme}
                  onClick={() => setTheme("whiteTheme")}
                />
                <SwatchButton
                  id="blackTheme"
                  color="#212121"
                  theme={theme}
                  onClick={() => setTheme("blackTheme")}
                />
              </SwatchContainer>
            </div>
            <div className="widget-row">
              <span>Activate badge</span>
              <label className="switch">
                <input type="checkbox" onClick={() => setToggle(!toggle)} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </section>
      )}
    </WidgetStyled>
  );
};

export default Widget;
