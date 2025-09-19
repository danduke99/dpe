/* eslint-disable react/no-deprecated */
import React from "react";
import { render } from "react-dom";

export function Component() {
  return (
    <>
      <style>{`div {
  box-sizing: border-box;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  vertical-align: baseline;

}
a {
  box-sizing: border-box;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  font-stretch: 100%;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  vertical-align: baseline;
  transition-behavior: normal;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: all;
  margin: 0px;
  text-decoration: none;

}
img {
  box-sizing: border-box;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  border: 0px none rgb(174, 180, 182);
  padding: 0px;

}
ul {
  box-sizing: border-box;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-size: 16px;
  line-height: normal;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  vertical-align: baseline;
  border: 0px none rgb(174, 180, 182);

}
li {
  box-sizing: border-box;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  font-weight: 400;
  font-stretch: 100%;
  line-height: normal;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  vertical-align: baseline;
  list-style-position: outside;
  list-style-image: none;
  list-style-type: none;

}
h4 {
  box-sizing: border-box;
  font-weight: 600;
  line-height: normal;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  font-stretch: 100%;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  vertical-align: baseline;
  color: rgb(43, 43, 43);
  border: 0px none rgb(43, 43, 43);
  padding: 0px;

}
span {
  box-sizing: border-box;
  padding: 0px;

}
i {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  text-rendering: auto;
  content: normal;
  font-stretch: 100%;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  vertical-align: baseline;
  padding: 0px;
  margin: 0px;

}
section {
  box-sizing: border-box;
  display: block;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-size: 16px;
  line-height: normal;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  vertical-align: baseline;
  position: relative;
  border: 0px none rgb(174, 180, 182);
  margin: 0px;

}
h2 {
  box-sizing: border-box;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  font-stretch: 100%;
  font-family: Poppins, sans-serif;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  vertical-align: baseline;
  padding: 0px;

}
br {
  box-sizing: border-box;

}
p {
  box-sizing: border-box;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  font-weight: 400;
  font-stretch: 100%;
  line-height: 22.35px;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  vertical-align: baseline;
  color: rgb(87, 87, 87);
  border: 0px none rgb(87, 87, 87);
  padding: 0px;

}
h3 {
  box-sizing: border-box;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  font-stretch: 100%;
  font-family: Poppins, sans-serif;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  vertical-align: baseline;
  color: rgb(43, 43, 43);
  border: 0px none rgb(43, 43, 43);
  padding: 0px;

}
strong {
  box-sizing: border-box;
  font-weight: 700;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  font-stretch: 100%;
  font-size: 18.29px;
  line-height: normal;
  font-family: Poppins, sans-serif;
  font-optical-sizing: auto;
  font-size-adjust: none;
  font-kerning: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  vertical-align: baseline;
  color: rgb(21, 87, 153);
  border: 0px none rgb(21, 87, 153);
  padding: 0px;

}
button {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-size: 0px;
  line-height: 0px;
  overflow-x: visible;
  overflow-y: visible;
  text-transform: none;
  appearance: button;
  cursor: pointer;
  position: absolute;
  top: -100px;
  display: block;
  width: 31px;
  height: 21px;
  transform: none;
  color: rgba(0, 0, 0, 0);
  outline-color: rgba(0, 0, 0, 0);
  outline-style: none;
  outline-width: 0px;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-origin: padding-box;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: auto;
  content: normal;
  transition-behavior: normal;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: all;
  border: 0px none rgba(0, 0, 0, 0);
  border-radius: 0px;
  padding: 0px;
  margin: 0px;

}
input {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-size: 14.23px;
  line-height: 40px;
  overflow-x: clip;
  overflow-y: clip;
  width: 178.203px;
  background-color: rgb(253, 222, 173);
  height: 40px;
  color: rgb(87, 87, 87);
  font-style: italic;
  border: 0px none rgb(87, 87, 87);
  border-radius: 20px;
  padding: 0px 16px 0px 16px;
  margin: 0px;

}
option {
  box-sizing: border-box;

}
`}</style>
      <div
        style={{
          lineHeight: "normal",
          border: "0px none rgb(174, 180, 182)",
          padding: "0px",
          margin: "0px",
          width: "100%",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(174, 180, 182)",
          fontSize: "16px",
          fontFamily: '"Open Sans", sans-serif',
        }}
      >
        <header
          style={{
            boxSizing: "border-box",
            display: "block",
            fontStyle: "normal",
            fontVariantEmoji: "normal",
            fontWeight: "400",
            fontStretch: "100%",
            fontSize: "16px",
            lineHeight: "normal",
            fontFamily: '"Open Sans", sans-serif',
            fontSizeAdjust: "none",
            verticalAlign: "baseline",
            border: "0px none rgb(174, 180, 182)",
            padding: "0px",
            margin: "0px",
          }}
        >
          <div
            style={{
              width: "1200px",
              maxWidth: "1200px",
              lineHeight: "normal",
              border: "0px none rgb(174, 180, 182)",
              padding: "0px 15px 0px 15px",
              margin: "0px 352.5px 0px 352.5px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                lineHeight: "normal",
                borderTop: "0px none rgb(174, 180, 182)",
                borderLeft: "0px none rgb(174, 180, 182)",
                borderRight: "0px none rgb(174, 180, 182)",
                borderBottom: "1px solid rgb(234, 229, 229)",
                padding: "26px 0px 25px 0px",
                margin: "0px",
              }}
            >
              <div
                style={{
                  lineHeight: "normal",
                  flexGrow: "0",
                  flexShrink: "0",
                  flexBasis: "33%",
                  maxWidth: "33%",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px",
                  margin: "0px",
                }}
              >
                <a
                  href="index.html"
                  title=""
                  style={{
                    color: "rgb(174, 180, 182)",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    fontSize: "16px",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px",
                  }}
                >
                  <img
                    src="assets/img/logo.png"
                    alt=""
                    srcset="assets/img/01_Logo_2x.png 2x"
                    style={{
                      lineHeight: "normal",
                      verticalAlign: "middle",
                      height: "57px",
                      margin: "0px",
                    }}
                  ></img>
                </a>
              </div>
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexGrow: "0",
                  flexShrink: "0",
                  flexBasis: "57.5%",
                  maxWidth: "57.5%",
                  padding: "0px",
                  margin: "0px 0px 0px 111.156px",
                }}
              >
                <li
                  style={{
                    fontSize: "16px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "33.33%",
                    maxWidth: "33.33%",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <img
                      src="assets/img/icon1.png"
                      alt=""
                      style={{
                        lineHeight: "normal",
                        verticalAlign: "top",
                        height: "21px",
                        position: "relative",
                        top: "6px",
                        margin: "0px",
                      }}
                    ></img>
                    <div
                      style={{
                        lineHeight: "normal",
                        maxWidth: "calc(100% - 21px)",
                        display: "inline-block",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 0px 0px 10px",
                        margin: "0px",
                      }}
                    >
                      <h4
                        style={{ fontSize: "15px", margin: "0px 0px 5px 0px" }}
                      >
                        Call
                      </h4>
                      <span
                        style={{
                          fontVariantEmoji: "normal",
                          fontStretch: "100%",
                          fontSize: "14px",
                          lineHeight: "normal",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          display: "block",
                          color: "rgb(87, 87, 87)",
                          border: "0px none rgb(87, 87, 87)",
                          margin: "0px",
                        }}
                      >
                        +2 342 5446 67
                      </span>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "33.33%",
                    maxWidth: "33.33%",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <img
                      src="assets/img/icon2.png"
                      alt=""
                      style={{
                        lineHeight: "normal",
                        verticalAlign: "top",
                        height: "21px",
                        position: "relative",
                        top: "6px",
                        margin: "0px",
                      }}
                    ></img>
                    <div
                      style={{
                        lineHeight: "normal",
                        maxWidth: "calc(100% - 21px)",
                        display: "inline-block",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 0px 0px 10px",
                        margin: "0px",
                      }}
                    >
                      <h4
                        style={{ fontSize: "15px", margin: "0px 0px 5px 0px" }}
                      >
                        Work Time
                      </h4>
                      <span
                        style={{
                          fontVariantEmoji: "normal",
                          fontStretch: "100%",
                          fontSize: "14px",
                          lineHeight: "normal",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          display: "block",
                          color: "rgb(87, 87, 87)",
                          border: "0px none rgb(87, 87, 87)",
                          margin: "0px",
                        }}
                      >
                        Mon - Fri 8 AM - 5 PM
                      </span>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "33.33%",
                    maxWidth: "33.33%",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <img
                      src="assets/img/icon3.png"
                      alt=""
                      style={{
                        lineHeight: "normal",
                        verticalAlign: "top",
                        height: "21px",
                        position: "relative",
                        top: "6px",
                        margin: "0px",
                      }}
                    ></img>
                    <div
                      style={{
                        lineHeight: "normal",
                        maxWidth: "calc(100% - 21px)",
                        display: "inline-block",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 0px 0px 10px",
                        margin: "0px",
                      }}
                    >
                      <h4
                        style={{ fontSize: "15px", margin: "0px 0px 5px 0px" }}
                      >
                        Address
                      </h4>
                      <span
                        style={{
                          fontVariantEmoji: "normal",
                          fontStretch: "100%",
                          fontSize: "14px",
                          lineHeight: "normal",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          display: "block",
                          color: "rgb(87, 87, 87)",
                          border: "0px none rgb(87, 87, 87)",
                          margin: "0px",
                        }}
                      >
                        Franklin St, Greenpoint Ave
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div
                style={{
                  lineHeight: "54px",
                  textAlign: "center",
                  position: "relative",
                  zIndex: "9999999",
                  cursor: "pointer",
                  width: "50px",
                  display: "none",
                  height: "50px",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px",
                  margin: "0px 0px 0px auto",
                }}
              >
                <a
                  href="#"
                  style={{
                    color: "rgb(174, 180, 182)",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    fontSize: "16px",
                    lineHeight: "54px",
                    display: "inline-block",
                    width: "24px",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px",
                  }}
                >
                  <span
                    style={{
                      fontVariantEmoji: "normal",
                      fontStretch: "100%",
                      fontSize: "16px",
                      lineHeight: "54px",
                      fontSizeAdjust: "none",
                      verticalAlign: "baseline",
                      display: "block",
                      width: "100%",
                      height: "2px",
                      backgroundColor: "rgb(21, 87, 153)",
                      transitionBehavior: "normal",
                      transitionDuration: "0.4s",
                      transitionTimingFunction: "ease-in-out",
                      transitionDelay: "0s",
                      transitionProperty: "all",
                      border: "0px none rgb(174, 180, 182)",
                      margin: "0px 0px 5px 0px",
                    }}
                  ></span>
                  <span
                    style={{
                      fontVariantEmoji: "normal",
                      fontStretch: "100%",
                      fontSize: "16px",
                      lineHeight: "54px",
                      fontSizeAdjust: "none",
                      verticalAlign: "baseline",
                      display: "block",
                      width: "100%",
                      height: "2px",
                      backgroundColor: "rgb(21, 87, 153)",
                      transitionBehavior: "normal",
                      transitionDuration: "0.4s",
                      transitionTimingFunction: "ease-in-out",
                      transitionDelay: "0s",
                      transitionProperty: "all",
                      border: "0px none rgb(174, 180, 182)",
                      margin: "0px 0px 5px 0px",
                    }}
                  ></span>
                  <span
                    style={{
                      fontVariantEmoji: "normal",
                      fontStretch: "100%",
                      fontSize: "16px",
                      lineHeight: "54px",
                      fontSizeAdjust: "none",
                      verticalAlign: "baseline",
                      display: "block",
                      width: "100%",
                      height: "2px",
                      backgroundColor: "rgb(21, 87, 153)",
                      transitionBehavior: "normal",
                      transitionDuration: "0.4s",
                      transitionTimingFunction: "ease-in-out",
                      transitionDelay: "0s",
                      transitionProperty: "all",
                      border: "0px none rgb(174, 180, 182)",
                      margin: "0px",
                    }}
                  ></span>
                </a>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                lineHeight: "normal",
                border: "0px none rgb(174, 180, 182)",
                padding: "23px 0px 25px 0px",
                margin: "0px",
              }}
            >
              <nav
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  fontVariantEmoji: "normal",
                  fontStretch: "100%",
                  fontSize: "16px",
                  lineHeight: "normal",
                  fontSizeAdjust: "none",
                  verticalAlign: "baseline",
                  flexGrow: "0",
                  flexShrink: "0",
                  flexBasis: "75%",
                  maxWidth: "75%",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px",
                  margin: "0px",
                }}
              >
                <ul style={{ padding: "0px", margin: "0px" }}>
                  <li
                    style={{
                      fontSize: "16px",
                      display: "inline-block",
                      position: "relative",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px 59px 0px 0px",
                    }}
                  >
                    <a
                      href="index.html"
                      title=""
                      style={{
                        color: "rgb(43, 43, 43)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        fontWeight: "500",
                        fontSize: "20.32px",
                        lineHeight: "normal",
                        fontFamily: "Poppins, sans-serif",
                        display: "inline-block",
                        position: "relative",
                        content: "normal",
                        bottom: "0px",
                        left: "0px",
                        width: "60.9531px",
                        height: "33px",
                        visibility: "visible",
                        border: "0px none rgb(43, 43, 43)",
                        borderRadius: "0px",
                        padding: "0px 0px 3px 0px",
                      }}
                    >
                      <span
                        style={{
                          color: "rgb(43, 43, 43)",
                          backgroundColor: "rgb(21, 103, 136)",
                          fontVariantEmoji: "normal",
                          fontStretch: "100%",
                          fontSize: "20.32px",
                          lineHeight: "normal",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          transitionBehavior: "normal",
                          transitionDuration: "0.4s",
                          transitionTimingFunction: "ease-in-out",
                          transitionDelay: "0s",
                          transitionProperty: "all",
                          display: "block",
                          position: "absolute",
                          content: '""',
                          bottom: "0px",
                          left: "0px",
                          width: "20px",
                          height: "4px",
                          border: "0px none rgb(43, 43, 43)",
                          borderRadius: "10px",
                          margin: "0px",
                          textDecoration: "none",
                        }}
                      ></span>
                      Home
                    </a>
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      display: "inline-block",
                      position: "relative",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px 59px 0px 0px",
                    }}
                  >
                    <a
                      href="about.html"
                      title=""
                      style={{
                        color: "rgb(43, 43, 43)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        fontWeight: "500",
                        fontSize: "20.32px",
                        lineHeight: "normal",
                        fontFamily: "Poppins, sans-serif",
                        display: "inline-block",
                        position: "relative",
                        content: "normal",
                        bottom: "0px",
                        left: "0px",
                        width: "61.6562px",
                        height: "33px",
                        visibility: "visible",
                        border: "0px none rgb(43, 43, 43)",
                        borderRadius: "0px",
                        padding: "0px 0px 3px 0px",
                      }}
                    >
                      <span
                        style={{
                          color: "rgb(43, 43, 43)",
                          backgroundColor: "rgb(21, 103, 136)",
                          fontVariantEmoji: "normal",
                          fontStretch: "100%",
                          fontSize: "20.32px",
                          lineHeight: "normal",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          transitionBehavior: "normal",
                          transitionDuration: "0.4s",
                          transitionTimingFunction: "ease-in-out",
                          transitionDelay: "0s",
                          transitionProperty: "all",
                          display: "block",
                          position: "absolute",
                          content: '""',
                          bottom: "0px",
                          left: "0px",
                          width: "20px",
                          height: "4px",
                          border: "0px none rgb(43, 43, 43)",
                          borderRadius: "10px",
                          margin: "0px",
                          textDecoration: "none",
                        }}
                      ></span>
                      About
                    </a>
                    <ul
                      style={{
                        position: "absolute",
                        top: "33px",
                        left: "0px",
                        width: "210px",
                        backgroundColor: "rgb(255, 255, 255)",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px",
                        zIndex: "999999",
                        opacity: "0",
                        visibility: "hidden",
                        transitionBehavior: "normal",
                        transitionDuration: "0.4s",
                        transitionTimingFunction: "ease-in-out",
                        transitionDelay: "0s",
                        transitionProperty: "all",
                        borderRadius: "20px",
                        padding: "20px",
                        margin: "15px 0px 0px 0px",
                      }}
                    >
                      <li
                        style={{
                          fontSize: "16px",
                          display: "block",
                          position: "relative",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px 0px 10px 0px",
                        }}
                      >
                        <a
                          href="events.html"
                          title=""
                          style={{
                            color: "rgb(43, 43, 43)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "170px",
                            height: "28px",
                            border: "0px none rgb(43, 43, 43)",
                            borderRadius: "0px",
                            padding: "0px 0px 3px 0px",
                          }}
                        >
                          <span
                            style={{
                              color: "rgb(43, 43, 43)",
                              backgroundColor: "rgb(21, 103, 136)",
                              fontVariantEmoji: "normal",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              transitionBehavior: "normal",
                              transitionDuration: "0.4s",
                              transitionTimingFunction: "ease-in-out",
                              transitionDelay: "0s",
                              transitionProperty: "all",
                              display: "none",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "0px",
                              height: "4px",
                              opacity: "0",
                              border: "0px none rgb(43, 43, 43)",
                              borderRadius: "10px",
                              margin: "0px",
                              textDecoration: "none",
                            }}
                          ></span>
                          Events
                        </a>
                      </li>
                      <li
                        style={{
                          fontSize: "16px",
                          display: "block",
                          position: "relative",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px 0px 10px 0px",
                        }}
                      >
                        <a
                          href="event-single.html"
                          title=""
                          style={{
                            color: "rgb(43, 43, 43)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "170px",
                            height: "28px",
                            border: "0px none rgb(43, 43, 43)",
                            borderRadius: "0px",
                            padding: "0px 0px 3px 0px",
                          }}
                        >
                          <span
                            style={{
                              color: "rgb(43, 43, 43)",
                              backgroundColor: "rgb(21, 103, 136)",
                              fontVariantEmoji: "normal",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              transitionBehavior: "normal",
                              transitionDuration: "0.4s",
                              transitionTimingFunction: "ease-in-out",
                              transitionDelay: "0s",
                              transitionProperty: "all",
                              display: "none",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "0px",
                              height: "4px",
                              opacity: "0",
                              border: "0px none rgb(43, 43, 43)",
                              borderRadius: "10px",
                              margin: "0px",
                              textDecoration: "none",
                            }}
                          ></span>
                          Event Single
                        </a>
                      </li>
                      <li
                        style={{
                          fontSize: "16px",
                          display: "block",
                          position: "relative",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px 0px 10px 0px",
                        }}
                      >
                        <a
                          href="schedule.html"
                          title=""
                          style={{
                            color: "rgb(43, 43, 43)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "170px",
                            height: "28px",
                            border: "0px none rgb(43, 43, 43)",
                            borderRadius: "0px",
                            padding: "0px 0px 3px 0px",
                          }}
                        >
                          <span
                            style={{
                              color: "rgb(43, 43, 43)",
                              backgroundColor: "rgb(21, 103, 136)",
                              fontVariantEmoji: "normal",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              transitionBehavior: "normal",
                              transitionDuration: "0.4s",
                              transitionTimingFunction: "ease-in-out",
                              transitionDelay: "0s",
                              transitionProperty: "all",
                              display: "none",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "0px",
                              height: "4px",
                              opacity: "0",
                              border: "0px none rgb(43, 43, 43)",
                              borderRadius: "10px",
                              margin: "0px",
                              textDecoration: "none",
                            }}
                          ></span>
                          Schedule
                        </a>
                      </li>
                      <li
                        style={{
                          fontSize: "16px",
                          display: "block",
                          position: "relative",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <a
                          href="error.html"
                          title=""
                          style={{
                            color: "rgb(43, 43, 43)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "170px",
                            height: "28px",
                            border: "0px none rgb(43, 43, 43)",
                            borderRadius: "0px",
                            padding: "0px 0px 3px 0px",
                          }}
                        >
                          <span
                            style={{
                              color: "rgb(43, 43, 43)",
                              backgroundColor: "rgb(21, 103, 136)",
                              fontVariantEmoji: "normal",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              transitionBehavior: "normal",
                              transitionDuration: "0.4s",
                              transitionTimingFunction: "ease-in-out",
                              transitionDelay: "0s",
                              transitionProperty: "all",
                              display: "none",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "0px",
                              height: "4px",
                              opacity: "0",
                              border: "0px none rgb(43, 43, 43)",
                              borderRadius: "10px",
                              margin: "0px",
                              textDecoration: "none",
                            }}
                          ></span>
                          404
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      display: "inline-block",
                      position: "relative",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px 59px 0px 0px",
                    }}
                  >
                    <a
                      href="classes.html"
                      title=""
                      style={{
                        color: "rgb(43, 43, 43)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        fontWeight: "500",
                        fontSize: "20.32px",
                        lineHeight: "normal",
                        fontFamily: "Poppins, sans-serif",
                        display: "inline-block",
                        position: "relative",
                        content: "normal",
                        bottom: "0px",
                        left: "0px",
                        width: "79.9531px",
                        height: "33px",
                        visibility: "visible",
                        border: "0px none rgb(43, 43, 43)",
                        borderRadius: "0px",
                        padding: "0px 0px 3px 0px",
                      }}
                    >
                      <span
                        style={{
                          color: "rgb(43, 43, 43)",
                          backgroundColor: "rgb(21, 103, 136)",
                          fontVariantEmoji: "normal",
                          fontStretch: "100%",
                          fontSize: "20.32px",
                          lineHeight: "normal",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          transitionBehavior: "normal",
                          transitionDuration: "0.4s",
                          transitionTimingFunction: "ease-in-out",
                          transitionDelay: "0s",
                          transitionProperty: "all",
                          display: "block",
                          position: "absolute",
                          content: '""',
                          bottom: "0px",
                          left: "0px",
                          width: "0px",
                          height: "4px",
                          opacity: "0",
                          visibility: "hidden",
                          border: "0px none rgb(43, 43, 43)",
                          borderRadius: "10px",
                          margin: "0px",
                          textDecoration: "none",
                        }}
                      ></span>
                      Classes
                    </a>
                    <ul
                      style={{
                        position: "absolute",
                        top: "33px",
                        left: "0px",
                        width: "210px",
                        backgroundColor: "rgb(255, 255, 255)",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px",
                        zIndex: "999999",
                        opacity: "0",
                        visibility: "hidden",
                        transitionBehavior: "normal",
                        transitionDuration: "0.4s",
                        transitionTimingFunction: "ease-in-out",
                        transitionDelay: "0s",
                        transitionProperty: "all",
                        borderRadius: "20px",
                        padding: "20px",
                        margin: "15px 0px 0px 0px",
                      }}
                    >
                      <li
                        style={{
                          fontSize: "16px",
                          display: "block",
                          position: "relative",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <a
                          href="class-single.html"
                          title=""
                          style={{
                            color: "rgb(43, 43, 43)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "170px",
                            height: "28px",
                            border: "0px none rgb(43, 43, 43)",
                            borderRadius: "0px",
                            padding: "0px 0px 3px 0px",
                          }}
                        >
                          <span
                            style={{
                              color: "rgb(43, 43, 43)",
                              backgroundColor: "rgb(21, 103, 136)",
                              fontVariantEmoji: "normal",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              transitionBehavior: "normal",
                              transitionDuration: "0.4s",
                              transitionTimingFunction: "ease-in-out",
                              transitionDelay: "0s",
                              transitionProperty: "all",
                              display: "none",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "0px",
                              height: "4px",
                              opacity: "0",
                              border: "0px none rgb(43, 43, 43)",
                              borderRadius: "10px",
                              margin: "0px",
                              textDecoration: "none",
                            }}
                          ></span>
                          Class Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      display: "inline-block",
                      position: "relative",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px 59px 0px 0px",
                    }}
                  >
                    <a
                      href="teachers.html"
                      title=""
                      style={{
                        color: "rgb(43, 43, 43)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        fontWeight: "500",
                        fontSize: "20.32px",
                        lineHeight: "normal",
                        fontFamily: "Poppins, sans-serif",
                        display: "inline-block",
                        position: "relative",
                        content: "normal",
                        bottom: "0px",
                        left: "0px",
                        width: "94.3594px",
                        height: "33px",
                        visibility: "visible",
                        border: "0px none rgb(43, 43, 43)",
                        borderRadius: "0px",
                        padding: "0px 0px 3px 0px",
                      }}
                    >
                      <span
                        style={{
                          color: "rgb(43, 43, 43)",
                          backgroundColor: "rgb(21, 103, 136)",
                          fontVariantEmoji: "normal",
                          fontStretch: "100%",
                          fontSize: "20.32px",
                          lineHeight: "normal",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          transitionBehavior: "normal",
                          transitionDuration: "0.4s",
                          transitionTimingFunction: "ease-in-out",
                          transitionDelay: "0s",
                          transitionProperty: "all",
                          display: "block",
                          position: "absolute",
                          content: '""',
                          bottom: "0px",
                          left: "0px",
                          width: "0px",
                          height: "4px",
                          opacity: "0",
                          visibility: "hidden",
                          border: "0px none rgb(43, 43, 43)",
                          borderRadius: "10px",
                          margin: "0px",
                          textDecoration: "none",
                        }}
                      ></span>
                      Teachers
                    </a>
                    <ul
                      style={{
                        position: "absolute",
                        top: "33px",
                        left: "0px",
                        width: "210px",
                        backgroundColor: "rgb(255, 255, 255)",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px",
                        zIndex: "999999",
                        opacity: "0",
                        visibility: "hidden",
                        transitionBehavior: "normal",
                        transitionDuration: "0.4s",
                        transitionTimingFunction: "ease-in-out",
                        transitionDelay: "0s",
                        transitionProperty: "all",
                        borderRadius: "20px",
                        padding: "20px",
                        margin: "15px 0px 0px 0px",
                      }}
                    >
                      <li
                        style={{
                          fontSize: "16px",
                          display: "block",
                          position: "relative",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <a
                          href="teacher-single.html"
                          title=""
                          style={{
                            color: "rgb(43, 43, 43)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "170px",
                            height: "28px",
                            border: "0px none rgb(43, 43, 43)",
                            borderRadius: "0px",
                            padding: "0px 0px 3px 0px",
                          }}
                        >
                          <span
                            style={{
                              color: "rgb(43, 43, 43)",
                              backgroundColor: "rgb(21, 103, 136)",
                              fontVariantEmoji: "normal",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              transitionBehavior: "normal",
                              transitionDuration: "0.4s",
                              transitionTimingFunction: "ease-in-out",
                              transitionDelay: "0s",
                              transitionProperty: "all",
                              display: "none",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "0px",
                              height: "4px",
                              opacity: "0",
                              border: "0px none rgb(43, 43, 43)",
                              borderRadius: "10px",
                              margin: "0px",
                              textDecoration: "none",
                            }}
                          ></span>
                          Teacher Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      display: "inline-block",
                      position: "relative",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px 59px 0px 0px",
                    }}
                  >
                    <a
                      href="blog.html"
                      title=""
                      style={{
                        color: "rgb(43, 43, 43)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        fontWeight: "500",
                        fontSize: "20.32px",
                        lineHeight: "normal",
                        fontFamily: "Poppins, sans-serif",
                        display: "inline-block",
                        position: "relative",
                        content: "normal",
                        bottom: "0px",
                        left: "0px",
                        width: "44.9219px",
                        height: "33px",
                        visibility: "visible",
                        border: "0px none rgb(43, 43, 43)",
                        borderRadius: "0px",
                        padding: "0px 0px 3px 0px",
                      }}
                    >
                      <span
                        style={{
                          color: "rgb(43, 43, 43)",
                          backgroundColor: "rgb(21, 103, 136)",
                          fontVariantEmoji: "normal",
                          fontStretch: "100%",
                          fontSize: "20.32px",
                          lineHeight: "normal",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          transitionBehavior: "normal",
                          transitionDuration: "0.4s",
                          transitionTimingFunction: "ease-in-out",
                          transitionDelay: "0s",
                          transitionProperty: "all",
                          display: "block",
                          position: "absolute",
                          content: '""',
                          bottom: "0px",
                          left: "0px",
                          width: "0px",
                          height: "4px",
                          opacity: "0",
                          visibility: "hidden",
                          border: "0px none rgb(43, 43, 43)",
                          borderRadius: "10px",
                          margin: "0px",
                          textDecoration: "none",
                        }}
                      ></span>
                      Blog
                    </a>
                    <ul
                      style={{
                        position: "absolute",
                        top: "33px",
                        left: "0px",
                        width: "210px",
                        backgroundColor: "rgb(255, 255, 255)",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px",
                        zIndex: "999999",
                        opacity: "0",
                        visibility: "hidden",
                        transitionBehavior: "normal",
                        transitionDuration: "0.4s",
                        transitionTimingFunction: "ease-in-out",
                        transitionDelay: "0s",
                        transitionProperty: "all",
                        borderRadius: "20px",
                        padding: "20px",
                        margin: "15px 0px 0px 0px",
                      }}
                    >
                      <li
                        style={{
                          fontSize: "16px",
                          display: "block",
                          position: "relative",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <a
                          href="post.html"
                          title=""
                          style={{
                            color: "rgb(43, 43, 43)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "170px",
                            height: "28px",
                            border: "0px none rgb(43, 43, 43)",
                            borderRadius: "0px",
                            padding: "0px 0px 3px 0px",
                          }}
                        >
                          <span
                            style={{
                              color: "rgb(43, 43, 43)",
                              backgroundColor: "rgb(21, 103, 136)",
                              fontVariantEmoji: "normal",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              transitionBehavior: "normal",
                              transitionDuration: "0.4s",
                              transitionTimingFunction: "ease-in-out",
                              transitionDelay: "0s",
                              transitionProperty: "all",
                              display: "none",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "0px",
                              height: "4px",
                              opacity: "0",
                              border: "0px none rgb(43, 43, 43)",
                              borderRadius: "10px",
                              margin: "0px",
                              textDecoration: "none",
                            }}
                          ></span>
                          Blog Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      display: "inline-block",
                      position: "relative",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <a
                      href="contacts.html"
                      title=""
                      style={{
                        color: "rgb(43, 43, 43)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        fontWeight: "500",
                        fontSize: "20.32px",
                        lineHeight: "normal",
                        fontFamily: "Poppins, sans-serif",
                        display: "inline-block",
                        position: "relative",
                        content: "normal",
                        bottom: "0px",
                        left: "0px",
                        width: "93.8125px",
                        height: "33px",
                        visibility: "visible",
                        border: "0px none rgb(43, 43, 43)",
                        borderRadius: "0px",
                        padding: "0px 0px 3px 0px",
                      }}
                    >
                      <span
                        style={{
                          color: "rgb(43, 43, 43)",
                          backgroundColor: "rgb(21, 103, 136)",
                          fontVariantEmoji: "normal",
                          fontStretch: "100%",
                          fontSize: "20.32px",
                          lineHeight: "normal",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          transitionBehavior: "normal",
                          transitionDuration: "0.4s",
                          transitionTimingFunction: "ease-in-out",
                          transitionDelay: "0s",
                          transitionProperty: "all",
                          display: "block",
                          position: "absolute",
                          content: '""',
                          bottom: "0px",
                          left: "0px",
                          width: "0px",
                          height: "4px",
                          opacity: "0",
                          visibility: "hidden",
                          border: "0px none rgb(43, 43, 43)",
                          borderRadius: "10px",
                          margin: "0px",
                          textDecoration: "none",
                        }}
                      ></span>
                      Contacts
                    </a>
                  </li>
                </ul>
              </nav>
              <ul style={{ padding: "0px", margin: "0px 0px 0px 170.5px" }}>
                <li
                  style={{
                    fontSize: "16px",
                    display: "inline-block",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px",
                    margin: "0px 16px 0px 0px",
                  }}
                >
                  <a
                    href="#"
                    title=""
                    style={{
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(18, 96, 160)",
                      fontSize: "16px",
                      lineHeight: "30px",
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      textAlign: "center",
                      border: "0px none rgb(255, 255, 255)",
                      borderRadius: "100px",
                      padding: "0px",
                    }}
                  >
                    <i
                      style={{
                        display: "inline-block",
                        lineHeight: "16px",
                        fontFamily: '"Font Awesome 5 Brands"',
                        fontSize: "16px",
                        border: "0px none rgb(255, 255, 255)",
                      }}
                    >
                      <span
                        style={{
                          WebkitFontSmoothing: "antialiased",
                          display: "inline",
                          fontVariantEmoji: "normal",
                          textRendering: "auto",
                          lineHeight: "16px",
                          content: '""',
                          fontStretch: "100%",
                          fontSize: "16px",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          border: "0px none rgb(255, 255, 255)",
                          margin: "0px",
                        }}
                      >
                        
                      </span>
                    </i>
                  </a>
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    display: "inline-block",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px",
                    margin: "0px 16px 0px 0px",
                  }}
                >
                  <a
                    href="#"
                    title=""
                    style={{
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(18, 96, 160)",
                      fontSize: "16px",
                      lineHeight: "30px",
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      textAlign: "center",
                      border: "0px none rgb(255, 255, 255)",
                      borderRadius: "100px",
                      padding: "0px",
                    }}
                  >
                    <i
                      style={{
                        display: "inline-block",
                        lineHeight: "16px",
                        fontFamily: '"Font Awesome 5 Brands"',
                        fontSize: "16px",
                        border: "0px none rgb(255, 255, 255)",
                      }}
                    >
                      <span
                        style={{
                          WebkitFontSmoothing: "antialiased",
                          display: "inline",
                          fontVariantEmoji: "normal",
                          textRendering: "auto",
                          lineHeight: "16px",
                          content: '""',
                          fontStretch: "100%",
                          fontSize: "16px",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          border: "0px none rgb(255, 255, 255)",
                          margin: "0px",
                        }}
                      >
                        
                      </span>
                    </i>
                  </a>
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    display: "inline-block",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  <a
                    href="#"
                    title=""
                    style={{
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(18, 96, 160)",
                      fontSize: "16px",
                      lineHeight: "30px",
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      textAlign: "center",
                      border: "0px none rgb(255, 255, 255)",
                      borderRadius: "100px",
                      padding: "0px",
                    }}
                  >
                    <i
                      style={{
                        display: "inline-block",
                        lineHeight: "16px",
                        fontFamily: '"Font Awesome 5 Brands"',
                        fontSize: "16px",
                        border: "0px none rgb(255, 255, 255)",
                      }}
                    >
                      <span
                        style={{
                          WebkitFontSmoothing: "antialiased",
                          display: "inline",
                          fontVariantEmoji: "normal",
                          textRendering: "auto",
                          lineHeight: "16px",
                          content: '""',
                          fontStretch: "100%",
                          fontSize: "16px",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          border: "0px none rgb(255, 255, 255)",
                          margin: "0px",
                        }}
                      >
                        
                      </span>
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div
          style={{
            lineHeight: "normal",
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "300px",
            backgroundColor: "rgb(247, 145, 51)",
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 20px 0px",
            height: "997px",
            opacity: "0",
            transform: "matrix(1, 0, 0, 1, -300, 0)",
            visibility: "hidden",
            transitionBehavior: "normal",
            transitionDuration: "0.4s",
            transitionTimingFunction: "ease-in-out",
            transitionDelay: "0s",
            transitionProperty: "all",
            border: "0px none rgb(174, 180, 182)",
            padding: "50px",
            margin: "0px",
          }}
        >
          <ul style={{ padding: "0px", margin: "0px" }}>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="index.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                Home
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="about.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                About
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="events.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                Events
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="event-single.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                Event Single
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="schedule.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                Schedule
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="classes.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                Classes
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="class-single.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                Classe Single
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="teachers.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                Teachers
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="teacher-single.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                Teacher Single
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="blog.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                Blog
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="post.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                Blog Single
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 30px 0px",
              }}
            >
              <a
                href="contacts.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                Contacts
              </a>
            </li>
            <li
              style={{
                fontSize: "16px",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px",
              }}
            >
              <a
                href="error.html"
                title=""
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "0px",
                }}
              >
                404
              </a>
            </li>
          </ul>
        </div>
        <section
          style={{
            backgroundImage:
              'url("https://html.merku.love/shelly/assets/img/pager-bg.png"), none',
            backgroundSize: "auto, auto",
            backgroundAttachment: "scroll, scroll",
            backgroundOrigin: "padding-box, padding-box",
            backgroundClip: "border-box, border-box",
            backgroundColor: "rgb(242, 247, 253)",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPositionX: "100%, 100%",
            backgroundPositionY: "50%, 50%",
            padding: "75px 0px 85px 0px",
          }}
        >
          <div
            style={{
              width: "1200px",
              maxWidth: "1200px",
              lineHeight: "normal",
              border: "0px none rgb(174, 180, 182)",
              padding: "0px 15px 0px 15px",
              margin: "0px 352.5px 0px 352.5px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                lineHeight: "normal",
                position: "relative",
                zIndex: "99",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px",
              }}
            >
              <h2
                style={{
                  fontWeight: "400",
                  lineHeight: "normal",
                  fontSize: "65px",
                  color: "rgb(43, 43, 43)",
                  textTransform: "capitalize",
                  border: "0px none rgb(43, 43, 43)",
                  margin: "0px 0px 6px 0px",
                }}
              >
                About Us
              </h2>
              <ul style={{ padding: "0px", margin: "0px" }}>
                <li
                  style={{
                    fontSize: "16px",
                    display: "inline-block",
                    position: "relative",
                    content: "normal",
                    top: "0px",
                    left: "0px",
                    width: "64.2188px",
                    height: "22px",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    transform: "none",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 12px 0px 12px",
                    margin: "0px",
                  }}
                >
                  <span
                    style={{
                      fontStyle: "normal",
                      fontVariantEmoji: "normal",
                      fontWeight: "400",
                      fontStretch: "100%",
                      fontSize: "16px",
                      lineHeight: "normal",
                      fontFamily: '"Open Sans", sans-serif',
                      fontSizeAdjust: "none",
                      verticalAlign: "baseline",
                      listStylePosition: "outside",
                      listStyleImage: "none",
                      listStyleType: "none",
                      display: "block",
                      position: "absolute",
                      content: '""',
                      top: "11px",
                      left: "64.2188px",
                      width: "1px",
                      height: "15px",
                      backgroundColor: "rgb(87, 87, 87)",
                      transform: "matrix(1, 0, 0, 1, 0, -7.5)",
                      border: "0px none rgb(174, 180, 182)",
                      margin: "2px 0px 0px 2px",
                    }}
                  ></span>
                  <a
                    href="#"
                    title=""
                    style={{
                      color: "rgb(87, 87, 87)",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      fontWeight: "400",
                      fontSize: "14.23px",
                      lineHeight: "normal",
                      fontFamily: '"Open Sans", sans-serif',
                      display: "inline-block",
                      border: "0px none rgb(87, 87, 87)",
                      padding: "0px",
                    }}
                  >
                    Home
                  </a>
                </li>
                <li
                  style={{
                    fontSize: "16px",
                    display: "inline-block",
                    position: "relative",
                    content: "normal",
                    top: "0px",
                    left: "0px",
                    width: "64.0781px",
                    height: "22px",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    transform: "none",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 12px 0px 12px",
                    margin: "0px",
                  }}
                >
                  <span
                    style={{
                      fontStyle: "normal",
                      fontVariantEmoji: "normal",
                      fontWeight: "400",
                      fontStretch: "100%",
                      fontSize: "16px",
                      lineHeight: "normal",
                      fontFamily: '"Open Sans", sans-serif',
                      fontSizeAdjust: "none",
                      verticalAlign: "baseline",
                      listStylePosition: "outside",
                      listStyleImage: "none",
                      listStyleType: "none",
                      display: "none",
                      position: "absolute",
                      content: '""',
                      top: "50%",
                      left: "100%",
                      width: "1px",
                      height: "15px",
                      backgroundColor: "rgb(87, 87, 87)",
                      transform: "none",
                      border: "0px none rgb(174, 180, 182)",
                      margin: "2px 0px 0px 2px",
                    }}
                  ></span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontVariantEmoji: "normal",
                      fontWeight: "400",
                      fontStretch: "100%",
                      fontSize: "14.23px",
                      lineHeight: "normal",
                      fontFamily: '"Open Sans", sans-serif',
                      fontSizeAdjust: "none",
                      verticalAlign: "baseline",
                      display: "inline-block",
                      color: "rgb(87, 87, 87)",
                      border: "0px none rgb(87, 87, 87)",
                      margin: "0px",
                    }}
                  >
                    About
                  </span>
                </li>
              </ul>
            </div>
            <h2
              style={{
                fontWeight: "600",
                lineHeight: "normal",
                fontSize: "162.6px",
                color: "rgb(243, 115, 53)",
                opacity: "0.1",
                position: "absolute",
                top: "143px",
                left: "952.5px",
                transform: "matrix(1, 0, 0, 1, -247.805, -122)",
                border: "0px none rgb(243, 115, 53)",
                margin: "0px",
              }}
            >
              Shelly
            </h2>
          </div>
        </section>
        <section style={{ padding: "138px 0px 0px 0px" }}>
          <div
            style={{
              width: "1200px",
              maxWidth: "1200px",
              lineHeight: "normal",
              border: "0px none rgb(174, 180, 182)",
              padding: "0px 15px 0px 15px",
              margin: "0px 352.5px 0px 352.5px",
            }}
          >
            <div
              style={{
                lineHeight: "normal",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 40px 0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  lineHeight: "normal",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px",
                  margin: "0px -15px 60px -15px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "600px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "50%",
                    maxWidth: "50%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px 0px 43px 0px",
                    }}
                  >
                    <h2
                      style={{
                        fontWeight: "700",
                        lineHeight: "58.94px",
                        fontSize: "48.77px",
                        color: "rgb(43, 43, 43)",
                        border: "0px none rgb(43, 43, 43)",
                        margin: "0px 0px 25px 0px",
                      }}
                    >
                      Welcome to<br style={{}}></br>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontVariantEmoji: "normal",
                          fontStretch: "100%",
                          fontSize: "48.77px",
                          lineHeight: "58.94px",
                          fontFamily: "Poppins, sans-serif",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          color: "rgb(243, 115, 53)",
                          border: "0px none rgb(243, 115, 53)",
                          margin: "0px",
                        }}
                      >
                        Shelly
                      </span>
                      School
                    </h2>
                    <p
                      style={{
                        maxWidth: "100%",
                        fontSize: "14.23px",
                        margin: "0px 0px 50px 0px",
                      }}
                    >
                      Morbi vel augue et metus pellentesque lacinia eu non odio.
                      Sed id purus urna. Maecenas ultrices ligula a nisi dictum
                      tristique. Suspendisse potenti. Curabitur egestas ultrices
                      sem, eu vestibulum leo sagittis et.
                    </p>
                    <a
                      href="classes.html"
                      title=""
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(19, 94, 158)",
                        fontWeight: "500",
                        fontSize: "18.29px",
                        lineHeight: "40px",
                        fontFamily: "Poppins, sans-serif",
                        display: "inline-block",
                        height: "40px",
                        position: "relative",
                        border: "0px none rgb(255, 255, 255)",
                        borderRadius: "30px",
                        padding: "0px 60px 0px 60px",
                      }}
                    >
                      Classes{" "}
                      <i
                        style={{
                          display: "block",
                          lineHeight: "28px",
                          fontFamily: '"Font Awesome 5 Free"',
                          fontWeight: "900",
                          fontSize: "18.29px",
                          backgroundColor: "rgb(255, 255, 255)",
                          width: "28px",
                          height: "28px",
                          textAlign: "center",
                          color: "rgb(21, 87, 153)",
                          position: "absolute",
                          top: "20px",
                          transitionBehavior: "normal",
                          transitionDuration: "0.4s",
                          transitionTimingFunction: "ease-in-out",
                          transitionDelay: "0s",
                          transitionProperty: "all",
                          left: "6px",
                          transform: "matrix(1, 0, 0, 1, 0, -14)",
                          border: "0px none rgb(21, 87, 153)",
                          borderRadius: "50px",
                        }}
                      >
                        <span
                          style={{
                            WebkitFontSmoothing: "antialiased",
                            display: "inline",
                            fontStyle: "normal",
                            fontVariantEmoji: "normal",
                            textRendering: "auto",
                            lineHeight: "28px",
                            content: '""',
                            fontStretch: "100%",
                            fontSize: "18.29px",
                            fontSizeAdjust: "none",
                            verticalAlign: "baseline",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            width: "auto",
                            height: "auto",
                            color: "rgb(21, 87, 153)",
                            position: "static",
                            top: "auto",
                            transitionBehavior: "normal",
                            transitionDuration: "0s",
                            transitionTimingFunction: "ease",
                            transitionDelay: "0s",
                            transitionProperty: "all",
                            left: "auto",
                            transform: "none",
                            border: "0px none rgb(21, 87, 153)",
                            borderRadius: "0px",
                            margin: "0px",
                          }}
                        >
                          
                        </span>
                      </i>
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "600px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "50%",
                    maxWidth: "50%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <img
                      src="assets/img/abt1.png"
                      alt=""
                      style={{
                        lineHeight: "normal",
                        verticalAlign: "middle",
                        height: "645px",
                        margin: "0px",
                      }}
                    ></img>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  lineHeight: "normal",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px",
                  margin: "0px -15px 0px -15px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "600px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "50%",
                    maxWidth: "50%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <img
                      src="assets/img/abt2.png"
                      alt=""
                      style={{
                        lineHeight: "normal",
                        verticalAlign: "middle",
                        height: "592px",
                        margin: "0px",
                      }}
                    ></img>
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "600px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "50%",
                    maxWidth: "50%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <span
                      style={{
                        fontStyle: "normal",
                        fontVariantEmoji: "normal",
                        fontWeight: "500",
                        fontStretch: "100%",
                        fontSize: "14.23px",
                        lineHeight: "normal",
                        fontFamily: "Poppins, sans-serif",
                        fontSizeAdjust: "none",
                        verticalAlign: "baseline",
                        textTransform: "uppercase",
                        color: "rgb(243, 115, 53)",
                        display: "block",
                        border: "0px none rgb(243, 115, 53)",
                        margin: "0px 0px -10px 0px",
                      }}
                    >
                      ABOUT US
                    </span>
                    <h2
                      style={{
                        fontWeight: "600",
                        lineHeight: "normal",
                        fontSize: "48.78px",
                        color: "rgb(43, 43, 43)",
                        border: "0px none rgb(43, 43, 43)",
                        margin: "0px 0px 18px 0px",
                      }}
                    >
                      Our Mission
                    </h2>
                    <p
                      style={{
                        fontSize: "14.23px",
                        margin: "0px 0px 22px 0px",
                      }}
                    >
                      Praesent rhoncus justo erat, sed sollicitudin arcu
                      malesuada vel. Etiam scelerisque justo ut purus luctus
                      ullamcorper. Vivamus vitae elit ligula. Fusce eu rutrum
                      nisl.
                    </p>
                    <ul style={{ padding: "0px", margin: "0px" }}>
                      <li
                        style={{
                          fontSize: "14.23px",
                          display: "block",
                          color: "rgb(87, 87, 87)",
                          position: "relative",
                          content: "normal",
                          top: "0px",
                          left: "0px",
                          width: "570px",
                          height: "19px",
                          transform: "none",
                          border: "0px none rgb(87, 87, 87)",
                          padding: "0px 0px 0px 30px",
                          margin: "0px 0px 10px 0px",
                        }}
                      >
                        <span
                          style={{
                            fontStyle: "normal",
                            fontVariantEmoji: "normal",
                            fontWeight: "400",
                            fontStretch: "100%",
                            fontSize: "14.23px",
                            lineHeight: "normal",
                            fontFamily: '"Open Sans", sans-serif',
                            fontSizeAdjust: "none",
                            verticalAlign: "baseline",
                            listStylePosition: "outside",
                            listStyleImage: "none",
                            listStyleType: "none",
                            display: "block",
                            color: "rgb(87, 87, 87)",
                            position: "absolute",
                            content: '""',
                            top: "9.5px",
                            left: "0px",
                            width: "16px",
                            height: "15px",
                            backgroundImage:
                              'url("https://html.merku.love/shelly/assets/img/icon14.png")',
                            transform: "matrix(1, 0, 0, 1, 0, -7.5)",
                            border: "0px none rgb(87, 87, 87)",
                            margin: "2px 0px 0px 0px",
                          }}
                        ></span>
                        Etiam ante nisl, maximus vitae sem non, dignissim
                      </li>
                      <li
                        style={{
                          fontSize: "14.23px",
                          display: "block",
                          color: "rgb(87, 87, 87)",
                          position: "relative",
                          content: "normal",
                          top: "0px",
                          left: "0px",
                          width: "570px",
                          height: "19px",
                          transform: "none",
                          border: "0px none rgb(87, 87, 87)",
                          padding: "0px 0px 0px 30px",
                          margin: "0px 0px 10px 0px",
                        }}
                      >
                        <span
                          style={{
                            fontStyle: "normal",
                            fontVariantEmoji: "normal",
                            fontWeight: "400",
                            fontStretch: "100%",
                            fontSize: "14.23px",
                            lineHeight: "normal",
                            fontFamily: '"Open Sans", sans-serif',
                            fontSizeAdjust: "none",
                            verticalAlign: "baseline",
                            listStylePosition: "outside",
                            listStyleImage: "none",
                            listStyleType: "none",
                            display: "block",
                            color: "rgb(87, 87, 87)",
                            position: "absolute",
                            content: '""',
                            top: "9.5px",
                            left: "0px",
                            width: "16px",
                            height: "15px",
                            backgroundImage:
                              'url("https://html.merku.love/shelly/assets/img/icon14.png")',
                            transform: "matrix(1, 0, 0, 1, 0, -7.5)",
                            border: "0px none rgb(87, 87, 87)",
                            margin: "2px 0px 0px 0px",
                          }}
                        ></span>
                        Donec blandit, sapien eu porttitor blandit
                      </li>
                      <li
                        style={{
                          fontSize: "14.23px",
                          display: "block",
                          color: "rgb(87, 87, 87)",
                          position: "relative",
                          content: "normal",
                          top: "0px",
                          left: "0px",
                          width: "570px",
                          height: "19px",
                          transform: "none",
                          border: "0px none rgb(87, 87, 87)",
                          padding: "0px 0px 0px 30px",
                          margin: "0px",
                        }}
                      >
                        <span
                          style={{
                            fontStyle: "normal",
                            fontVariantEmoji: "normal",
                            fontWeight: "400",
                            fontStretch: "100%",
                            fontSize: "14.23px",
                            lineHeight: "normal",
                            fontFamily: '"Open Sans", sans-serif',
                            fontSizeAdjust: "none",
                            verticalAlign: "baseline",
                            listStylePosition: "outside",
                            listStyleImage: "none",
                            listStyleType: "none",
                            display: "block",
                            color: "rgb(87, 87, 87)",
                            position: "absolute",
                            content: '""',
                            top: "9.5px",
                            left: "0px",
                            width: "16px",
                            height: "15px",
                            backgroundImage:
                              'url("https://html.merku.love/shelly/assets/img/icon14.png")',
                            transform: "matrix(1, 0, 0, 1, 0, -7.5)",
                            border: "0px none rgb(87, 87, 87)",
                            margin: "2px 0px 0px 0px",
                          }}
                        ></span>
                        Sed at urna at massa viverra feugiat non
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "120px 0px 102px 0px" }}>
          <div
            style={{
              width: "1200px",
              maxWidth: "1200px",
              lineHeight: "normal",
              border: "0px none rgb(174, 180, 182)",
              padding: "0px 15px 0px 15px",
              margin: "0px 352.5px 0px 352.5px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                lineHeight: "normal",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px -15px 0px -15px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "600px",
                  flexGrow: "0",
                  flexShrink: "0",
                  flexBasis: "50%",
                  maxWidth: "50%",
                  lineHeight: "normal",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px 15px 0px 15px",
                  margin: "0px",
                }}
              >
                <div
                  style={{
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px",
                    margin: "0px 0px 43px 0px",
                  }}
                >
                  <h2
                    style={{
                      fontWeight: "700",
                      lineHeight: "normal",
                      fontSize: "48.77px",
                      color: "rgb(43, 43, 43)",
                      border: "0px none rgb(43, 43, 43)",
                      margin: "0px 0px 18px 0px",
                    }}
                  >
                    Our Benefits
                  </h2>
                  <p
                    style={{
                      fontSize: "14.23px",
                      maxWidth: "460px",
                      margin: "0px 0px 43px 0px",
                    }}
                  >
                    Praesent rhoncus justo erat, sed sollicitudin arcu malesuada
                    vel. Etiam scelerisque justo ut purus luctus ullamcorper.
                    Vivamus vitae elit ligula. Fusce eu rutrum nisl. Vestibulum
                    ut sagittis neque
                  </p>
                  <a
                    href="contacts.html"
                    title=""
                    style={{
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(19, 94, 158)",
                      fontWeight: "500",
                      fontSize: "18.29px",
                      lineHeight: "40px",
                      fontFamily: "Poppins, sans-serif",
                      display: "inline-block",
                      height: "40px",
                      position: "relative",
                      border: "0px none rgb(255, 255, 255)",
                      borderRadius: "30px",
                      padding: "0px 60px 0px 60px",
                    }}
                  >
                    Contacts{" "}
                    <i
                      style={{
                        display: "block",
                        lineHeight: "28px",
                        fontFamily: '"Font Awesome 5 Free"',
                        fontWeight: "900",
                        fontSize: "18.29px",
                        backgroundColor: "rgb(255, 255, 255)",
                        width: "28px",
                        height: "28px",
                        textAlign: "center",
                        color: "rgb(21, 87, 153)",
                        position: "absolute",
                        top: "20px",
                        transitionBehavior: "normal",
                        transitionDuration: "0.4s",
                        transitionTimingFunction: "ease-in-out",
                        transitionDelay: "0s",
                        transitionProperty: "all",
                        left: "6px",
                        transform: "matrix(1, 0, 0, 1, 0, -14)",
                        border: "0px none rgb(21, 87, 153)",
                        borderRadius: "50px",
                      }}
                    >
                      <span
                        style={{
                          WebkitFontSmoothing: "antialiased",
                          display: "inline",
                          fontStyle: "normal",
                          fontVariantEmoji: "normal",
                          textRendering: "auto",
                          lineHeight: "28px",
                          content: '""',
                          fontStretch: "100%",
                          fontSize: "18.29px",
                          fontSizeAdjust: "none",
                          verticalAlign: "baseline",
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          width: "auto",
                          height: "auto",
                          color: "rgb(21, 87, 153)",
                          position: "static",
                          top: "auto",
                          transitionBehavior: "normal",
                          transitionDuration: "0s",
                          transitionTimingFunction: "ease",
                          transitionDelay: "0s",
                          transitionProperty: "all",
                          left: "auto",
                          transform: "none",
                          border: "0px none rgb(21, 87, 153)",
                          borderRadius: "0px",
                          margin: "0px",
                        }}
                      >
                        
                      </span>
                    </i>
                  </a>
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "600px",
                  flexGrow: "0",
                  flexShrink: "0",
                  flexBasis: "50%",
                  maxWidth: "50%",
                  lineHeight: "normal",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px 15px 0px 15px",
                  margin: "0px",
                }}
              >
                <div
                  style={{
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px 0px 65px 0px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        lineHeight: "normal",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px",
                        margin: "0px -15px 0px -15px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "300px",
                          flexGrow: "0",
                          flexShrink: "0",
                          flexBasis: "50%",
                          maxWidth: "50%",
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px 15px 0px 15px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            backgroundColor: "rgb(255, 255, 255)",
                            boxShadow:
                              "rgba(21, 87, 153, 0.08) 0px 0px 10px 0px",
                            transitionBehavior: "normal",
                            transitionDuration: "0.4s",
                            transitionTimingFunction: "ease-in-out",
                            transitionDelay: "0s",
                            transitionProperty: "all",
                            border: "0px none rgb(174, 180, 182)",
                            borderRadius: "10px",
                            padding: "25px 20px 19px 20px",
                            margin: "0px 0px 30px 0px",
                          }}
                        >
                          <img
                            src="assets/img/icon5.png"
                            alt=""
                            style={{
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "39px",
                              margin: "0px 0px 9px 0px",
                            }}
                          ></img>
                          <h3
                            style={{
                              fontWeight: "500",
                              lineHeight: "normal",
                              fontSize: "18.29px",
                              textTransform: "capitalize",
                              margin: "0px 0px 3px 0px",
                            }}
                          >
                            Awesome Teachers
                          </h3>
                          <p style={{ fontSize: "13.5px", margin: "0px" }}>
                            Vivamus interdum, mauris interdum quis curdum
                            sodales
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          width: "300px",
                          flexGrow: "0",
                          flexShrink: "0",
                          flexBasis: "50%",
                          maxWidth: "50%",
                          lineHeight: "normal",
                          top: "60px",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px 15px 0px 15px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            backgroundColor: "rgb(255, 255, 255)",
                            boxShadow:
                              "rgba(21, 87, 153, 0.08) 0px 0px 10px 0px",
                            transitionBehavior: "normal",
                            transitionDuration: "0.4s",
                            transitionTimingFunction: "ease-in-out",
                            transitionDelay: "0s",
                            transitionProperty: "all",
                            border: "0px none rgb(174, 180, 182)",
                            borderRadius: "10px",
                            padding: "25px 20px 19px 20px",
                            margin: "0px 0px 30px 0px",
                          }}
                        >
                          <img
                            src="assets/img/icon7.png"
                            alt=""
                            style={{
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "39px",
                              margin: "0px 0px 9px 0px",
                            }}
                          ></img>
                          <h3
                            style={{
                              fontWeight: "500",
                              lineHeight: "normal",
                              fontSize: "18.29px",
                              textTransform: "capitalize",
                              margin: "0px 0px 3px 0px",
                            }}
                          >
                            Global Certificate
                          </h3>
                          <p style={{ fontSize: "13.5px", margin: "0px" }}>
                            Pelleneget tespharetra que fringilla egugue id eget
                            pharetra
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          width: "300px",
                          flexGrow: "0",
                          flexShrink: "0",
                          flexBasis: "50%",
                          maxWidth: "50%",
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px 15px 0px 15px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            backgroundColor: "rgb(255, 255, 255)",
                            boxShadow:
                              "rgba(21, 87, 153, 0.08) 0px 0px 10px 0px",
                            transitionBehavior: "normal",
                            transitionDuration: "0.4s",
                            transitionTimingFunction: "ease-in-out",
                            transitionDelay: "0s",
                            transitionProperty: "all",
                            border: "0px none rgb(174, 180, 182)",
                            borderRadius: "10px",
                            padding: "25px 20px 19px 20px",
                            margin: "0px 0px 30px 0px",
                          }}
                        >
                          <img
                            src="assets/img/icon9.png"
                            alt=""
                            style={{
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "39px",
                              margin: "0px 0px 9px 0px",
                            }}
                          ></img>
                          <h3
                            style={{
                              fontWeight: "500",
                              lineHeight: "normal",
                              fontSize: "18.29px",
                              textTransform: "capitalize",
                              margin: "0px 0px 3px 0px",
                            }}
                          >
                            Student Support Service
                          </h3>
                          <p style={{ fontSize: "13.5px", margin: "0px" }}>
                            Mauris nec mi fequis ugiat, cursus tortor nec,
                            pharetra tellus
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          width: "300px",
                          flexGrow: "0",
                          flexShrink: "0",
                          flexBasis: "50%",
                          maxWidth: "50%",
                          lineHeight: "normal",
                          top: "60px",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px 15px 0px 15px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            backgroundColor: "rgb(255, 255, 255)",
                            boxShadow:
                              "rgba(21, 87, 153, 0.08) 0px 0px 10px 0px",
                            transitionBehavior: "normal",
                            transitionDuration: "0.4s",
                            transitionTimingFunction: "ease-in-out",
                            transitionDelay: "0s",
                            transitionProperty: "all",
                            border: "0px none rgb(174, 180, 182)",
                            borderRadius: "10px",
                            padding: "25px 20px 19px 20px",
                            margin: "0px 0px 30px 0px",
                          }}
                        >
                          <img
                            src="assets/img/icon8.png"
                            alt=""
                            style={{
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "39px",
                              margin: "0px 0px 9px 0px",
                            }}
                          ></img>
                          <h3
                            style={{
                              fontWeight: "500",
                              lineHeight: "normal",
                              fontSize: "18.29px",
                              textTransform: "capitalize",
                              margin: "0px 0px 3px 0px",
                            }}
                          >
                            Best Programm
                          </h3>
                          <p style={{ fontSize: "13.5px", margin: "0px" }}>
                            Etiam risus neque, volutpat vel laoreet a, finibus
                            volutpat non ligula
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "0px 0px 100px 0px" }}>
          <div
            style={{
              width: "1200px",
              maxWidth: "1200px",
              lineHeight: "normal",
              border: "0px none rgb(174, 180, 182)",
              padding: "0px 15px 0px 15px",
              margin: "0px 352.5px 0px 352.5px",
            }}
          >
            <div
              style={{
                lineHeight: "normal",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px 0px 42px 0px",
              }}
            >
              <h2
                style={{
                  fontWeight: "700",
                  lineHeight: "normal",
                  fontSize: "48.77px",
                  color: "rgb(43, 43, 43)",
                  textTransform: "capitalize",
                  position: "relative",
                  zIndex: "1",
                  content: "normal",
                  top: "0px",
                  left: "0px",
                  width: "1170px",
                  height: "73px",
                  display: "block",
                  border: "0px none rgb(43, 43, 43)",
                  margin: "0px 0px 7px 0px",
                }}
              >
                <span
                  style={{
                    lineHeight: "normal",
                    fontSize: "48.77px",
                    fontStyle: "normal",
                    fontVariantEmoji: "normal",
                    fontStretch: "100%",
                    fontFamily: "Poppins, sans-serif",
                    fontSizeAdjust: "none",
                    verticalAlign: "baseline",
                    color: "rgb(43, 43, 43)",
                    position: "absolute",
                    zIndex: "-1",
                    content: '""',
                    top: "-40px",
                    left: "-70px",
                    width: "114px",
                    height: "108px",
                    backgroundImage:
                      'url("https://html.merku.love/shelly/assets/img/sec-bg.png")',
                    backgroundRepeat: "no-repeat",
                    display: "none",
                    border: "0px none rgb(43, 43, 43)",
                    margin: "0px",
                  }}
                ></span>
                Our Classes
              </h2>
              <p
                style={{
                  fontSize: "14.23px",
                  maxWidth: "530px",
                  margin: "0px",
                }}
              >
                Nam mattis felis id sodales rutrum. Nulla ornare tristique
                mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus
                lacus
              </p>
            </div>
            <div
              style={{
                lineHeight: "normal",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px",
                margin: "0px",
              }}
            >
              <div
                style={{
                  display: "block",
                  flexWrap: "wrap",
                  userSelect: "none",
                  touchAction: "pan-y",
                  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  position: "relative",
                  lineHeight: "normal",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px",
                  margin: "0px -15px 0px -15px",
                }}
              >
                <div
                  aria-live="polite"
                  style={{
                    position: "relative",
                    display: "block",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      transform: "matrix(1, 0, 0, 1, -1500, 0)",
                      position: "relative",
                      top: "0px",
                      left: "0px",
                      display: "block",
                      content: "normal",
                      lineHeight: "normal",
                      width: "4800px",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <span
                      style={{
                        transform: "none",
                        position: "static",
                        top: "auto",
                        left: "auto",
                        display: "table",
                        content: '""',
                        fontStyle: "normal",
                        fontVariantEmoji: "normal",
                        fontWeight: "400",
                        fontStretch: "100%",
                        fontSize: "16px",
                        lineHeight: "normal",
                        fontFamily: '"Open Sans", sans-serif',
                        fontSizeAdjust: "none",
                        verticalAlign: "baseline",
                        width: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        margin: "0px",
                      }}
                    ></span>
                    <div
                      id=""
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362.203px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180.203px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img1.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180.203px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Basic English Speaking and Grammar
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Amanda Kern
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 70.9688px" }}>
                              $45
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id=""
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "363.453px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "181.453px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img2.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "181.453px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Natural Sciences & Mathematics Courses
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Gypsy Hardinge
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 59.2656px" }}>
                              $67
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id=""
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img3.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Environmental Studies & Earth Sciences
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Margje Jutten
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 72.6406px" }}>
                              $89
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id=""
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img4.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Hospitality, Leisure & Sports Courses
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Hubert Franck
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 68.8594px" }}>
                              $67
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362.203px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180.203px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img1.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180.203px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="#"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Basic English Speaking and Grammar
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Amanda Kern
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 70.9688px" }}>
                              $45
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="false"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "363.453px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "181.453px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img2.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "181.453px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="#"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Natural Sciences & Mathematics Courses
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Gypsy Hardinge
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 59.2656px" }}>
                              $67
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="false"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img3.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Environmental Studies & Earth Sciences
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Margje Jutten
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 72.6406px" }}>
                              $89
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="false"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img4.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Hospitality, Leisure & Sports Courses
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Hubert Franck
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 68.8594px" }}>
                              $67
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="false"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362.203px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180.203px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img1.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180.203px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Basic English Speaking and Grammar
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Amanda Kern
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 70.9688px" }}>
                              $45
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "363.453px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "181.453px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img2.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "181.453px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Natural Sciences & Mathematics Courses
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Gypsy Hardinge
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 59.2656px" }}>
                              $67
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img3.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Environmental Studies & Earth Sciences
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Margje Jutten
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 72.6406px" }}>
                              $89
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img4.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Hospitality, Leisure & Sports Courses
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Hubert Franck
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 68.8594px" }}>
                              $67
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id=""
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362.203px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180.203px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img1.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180.203px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="#"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Basic English Speaking and Grammar
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Amanda Kern
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 70.9688px" }}>
                              $45
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id=""
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "363.453px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "181.453px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img2.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "181.453px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="#"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Natural Sciences & Mathematics Courses
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Gypsy Hardinge
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 59.2656px" }}>
                              $67
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id=""
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img3.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Environmental Studies & Earth Sciences
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Margje Jutten
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 72.6406px" }}>
                              $89
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id=""
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        width: "300px",
                        flexGrow: "0",
                        flexShrink: "0",
                        flexBasis: "25%",
                        maxWidth: "25%",
                        display: "block",
                        float: "left",
                        height: "362px",
                        minHeight: "1px",
                        lineHeight: "normal",
                        outlineColor: "rgb(174, 180, 182)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px 15px 0px 15px",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            bottom: "0px",
                            left: "0px",
                            width: "270px",
                            height: "180px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              bottom: "0px",
                              left: "0px",
                              width: "270px",
                              height: "4px",
                              backgroundColor: "rgb(17, 97, 160)",
                              border: "0px none rgb(174, 180, 182)",
                              margin: "0px",
                            }}
                          ></span>
                          <img
                            src="assets/img/img4.jpg"
                            alt=""
                            style={{
                              width: "270px",
                              lineHeight: "normal",
                              verticalAlign: "middle",
                              height: "180px",
                              minHeight: "180px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0px 0px",
                              margin: "0px",
                            }}
                          ></img>
                          <a
                            href="#"
                            title=""
                            style={{
                              color: "rgb(174, 180, 182)",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "42px",
                              fontFamily: '"Open Sans", sans-serif',
                              position: "absolute",
                              bottom: "-19px",
                              right: "20px",
                              width: "42px",
                              height: "42px",
                              backgroundImage:
                                "linear-gradient(rgb(253, 200, 48), rgb(243, 115, 53))",
                              backgroundPositionX: "0%",
                              backgroundPositionY: "0%",
                              backgroundSize: "auto",
                              backgroundRepeat: "repeat",
                              backgroundAttachment: "scroll",
                              backgroundOrigin: "padding-box",
                              backgroundClip: "border-box",
                              textAlign: "center",
                              border: "0px none rgb(174, 180, 182)",
                              borderRadius: "100px",
                              padding: "0px",
                            }}
                          >
                            <img
                              src="assets/img/icon10.png"
                              alt=""
                              style={{
                                lineHeight: "42px",
                                verticalAlign: "middle",
                                height: "19px",
                                margin: "0px",
                              }}
                            ></img>
                          </a>
                        </div>
                        <div
                          style={{
                            lineHeight: "normal",
                            borderTop: "0px none rgb(174, 180, 182)",
                            borderLeft: "1px solid rgb(214, 214, 214)",
                            borderRight: "1px solid rgb(214, 214, 214)",
                            borderBottom: "1px solid rgb(214, 214, 214)",
                            borderRadius: "0px 0px 10px 10px",
                            padding: "24px 15px 27px 15px",
                            margin: "0px",
                          }}
                        >
                          <h3
                            style={{
                              fontWeight: "600",
                              lineHeight: "24px",
                              fontSize: "18px",
                              margin: "0px 0px 13px 0px",
                            }}
                          >
                            <a
                              href="class-single.html"
                              title=""
                              style={{
                                color: "rgb(43, 43, 43)",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                fontSize: "18px",
                                lineHeight: "24px",
                                fontFamily: "Poppins, sans-serif",
                                border: "0px none rgb(43, 43, 43)",
                                padding: "0px",
                              }}
                            >
                              Hospitality, Leisure & Sports Courses
                            </a>
                          </h3>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            Mon-Fri
                          </span>
                          <span
                            style={{
                              fontStyle: "normal",
                              fontVariantEmoji: "normal",
                              fontWeight: "400",
                              fontStretch: "100%",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              fontFamily: '"Open Sans", sans-serif',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              display: "inline-block",
                              color: "rgb(87, 87, 87)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px 0px 21px 0px",
                            }}
                          >
                            10 AM - 12 AM
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              lineHeight: "normal",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <div
                              style={{
                                lineHeight: "normal",
                                border: "0px none rgb(174, 180, 182)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              <img
                                src="assets/img/ico.png"
                                alt=""
                                style={{
                                  lineHeight: "normal",
                                  verticalAlign: "middle",
                                  height: "26px",
                                  display: "inline-block",
                                  borderRadius: "100px",
                                  margin: "0px",
                                }}
                              ></img>
                              <a
                                href="#"
                                title=""
                                style={{
                                  color: "rgb(87, 87, 87)",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  fontWeight: "600",
                                  fontSize: "14.23px",
                                  lineHeight: "normal",
                                  fontFamily: '"Open Sans", sans-serif',
                                  display: "inline-block",
                                  border: "0px none rgb(87, 87, 87)",
                                  padding: "0px 0px 0px 7px",
                                }}
                              >
                                Hubert Franck
                              </a>
                            </div>
                            <strong style={{ margin: "0px 0px 0px 68.8594px" }}>
                              $67
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        transform: "none",
                        position: "static",
                        top: "auto",
                        left: "auto",
                        display: "table",
                        content: '""',
                        fontStyle: "normal",
                        fontVariantEmoji: "normal",
                        fontWeight: "400",
                        fontStretch: "100%",
                        fontSize: "16px",
                        lineHeight: "normal",
                        fontFamily: '"Open Sans", sans-serif',
                        fontSizeAdjust: "none",
                        verticalAlign: "baseline",
                        width: "0px",
                        border: "0px none rgb(174, 180, 182)",
                        margin: "0px",
                      }}
                    ></span>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="previous"
                  style={{
                    backgroundImage:
                      'url("https://html.merku.love/shelly/assets/img/arrow-left.png")',
                    left: "1093px",
                    right: "76px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "slick",
                      fontSize: "20px",
                      lineHeight: "20px",
                      overflowX: "visible",
                      overflowY: "visible",
                      textTransform: "none",
                      appearance: "none",
                      cursor: "pointer",
                      position: "static",
                      top: "auto",
                      display: "none",
                      width: "auto",
                      height: "auto",
                      transform: "none",
                      color: "rgb(255, 255, 255)",
                      outlineColor: "rgb(255, 255, 255)",
                      outlineStyle: "none",
                      outlineWidth: "0px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      WebkitFontSmoothing: "antialiased",
                      left: "auto",
                      content: '"←"',
                      right: "auto",
                      transitionBehavior: "normal",
                      transitionDuration: "0s",
                      transitionTimingFunction: "ease",
                      transitionDelay: "0s",
                      transitionProperty: "all",
                      border: "0px none rgb(255, 255, 255)",
                      borderRadius: "0px",
                      margin: "0px",
                    }}
                  >
                    ←
                  </span>
                  Prev
                  <span
                    style={{
                      fontStyle: "normal",
                      fontVariantEmoji: "normal",
                      fontWeight: "400",
                      fontStretch: "100%",
                      fontSize: "0px",
                      lineHeight: "0px",
                      fontFamily: '"Open Sans", sans-serif',
                      fontSizeAdjust: "none",
                      verticalAlign: "baseline",
                      border: "0px none rgba(0, 0, 0, 0)",
                      margin: "0px",
                    }}
                  ></span>
                </button>
                <button
                  type="button"
                  aria-label="next"
                  style={{
                    backgroundImage:
                      'url("https://html.merku.love/shelly/assets/img/arrow-right.png")',
                    right: "20px",
                    left: "1149px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "slick",
                      fontSize: "20px",
                      lineHeight: "20px",
                      overflowX: "visible",
                      overflowY: "visible",
                      textTransform: "none",
                      appearance: "none",
                      cursor: "pointer",
                      position: "static",
                      top: "auto",
                      display: "none",
                      width: "auto",
                      height: "auto",
                      transform: "none",
                      color: "rgb(255, 255, 255)",
                      outlineColor: "rgb(255, 255, 255)",
                      outlineStyle: "none",
                      outlineWidth: "0px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      WebkitFontSmoothing: "antialiased",
                      right: "auto",
                      content: '"→"',
                      left: "auto",
                      transitionBehavior: "normal",
                      transitionDuration: "0s",
                      transitionTimingFunction: "ease",
                      transitionDelay: "0s",
                      transitionProperty: "all",
                      border: "0px none rgb(255, 255, 255)",
                      borderRadius: "0px",
                      margin: "0px",
                    }}
                  >
                    →
                  </span>
                  Next
                  <span
                    style={{
                      fontStyle: "normal",
                      fontVariantEmoji: "normal",
                      fontWeight: "400",
                      fontStretch: "100%",
                      fontSize: "0px",
                      lineHeight: "0px",
                      fontFamily: '"Open Sans", sans-serif',
                      fontSizeAdjust: "none",
                      verticalAlign: "baseline",
                      border: "0px none rgba(0, 0, 0, 0)",
                      margin: "0px",
                    }}
                  ></span>
                </button>
              </div>
              <div
                style={{
                  textAlign: "center",
                  lineHeight: "normal",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px",
                  margin: "30px 0px 0px 0px",
                }}
              >
                <a
                  href="classes.html"
                  title=""
                  style={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgb(19, 94, 158)",
                    fontWeight: "500",
                    fontSize: "18.29px",
                    lineHeight: "40px",
                    fontFamily: "Poppins, sans-serif",
                    display: "inline-block",
                    height: "40px",
                    position: "relative",
                    border: "0px none rgb(255, 255, 255)",
                    borderRadius: "30px",
                    padding: "0px 60px 0px 60px",
                  }}
                >
                  Classes{" "}
                  <i
                    style={{
                      display: "block",
                      lineHeight: "28px",
                      fontFamily: '"Font Awesome 5 Free"',
                      fontWeight: "900",
                      fontSize: "18.29px",
                      backgroundColor: "rgb(255, 255, 255)",
                      width: "28px",
                      height: "28px",
                      color: "rgb(21, 87, 153)",
                      position: "absolute",
                      top: "20px",
                      transitionBehavior: "normal",
                      transitionDuration: "0.4s",
                      transitionTimingFunction: "ease-in-out",
                      transitionDelay: "0s",
                      transitionProperty: "all",
                      left: "6px",
                      transform: "matrix(1, 0, 0, 1, 0, -14)",
                      border: "0px none rgb(21, 87, 153)",
                      borderRadius: "50px",
                    }}
                  >
                    <span
                      style={{
                        WebkitFontSmoothing: "antialiased",
                        display: "inline",
                        fontStyle: "normal",
                        fontVariantEmoji: "normal",
                        textRendering: "auto",
                        lineHeight: "28px",
                        content: '""',
                        fontStretch: "100%",
                        fontSize: "18.29px",
                        fontSizeAdjust: "none",
                        verticalAlign: "baseline",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        width: "auto",
                        height: "auto",
                        color: "rgb(21, 87, 153)",
                        position: "static",
                        top: "auto",
                        transitionBehavior: "normal",
                        transitionDuration: "0s",
                        transitionTimingFunction: "ease",
                        transitionDelay: "0s",
                        transitionProperty: "all",
                        left: "auto",
                        transform: "none",
                        border: "0px none rgb(21, 87, 153)",
                        borderRadius: "0px",
                        margin: "0px",
                      }}
                    >
                      
                    </span>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "0px" }}>
          <div
            style={{
              width: "1200px",
              maxWidth: "1200px",
              lineHeight: "normal",
              border: "0px none rgb(174, 180, 182)",
              padding: "0px 15px 0px 15px",
              margin: "0px 352.5px 0px 352.5px",
            }}
          >
            <div
              style={{
                lineHeight: "normal",
                backgroundImage:
                  "linear-gradient(90deg, rgb(253, 200, 48), rgb(243, 115, 53))",
                backgroundSize: "auto",
                backgroundAttachment: "scroll",
                backgroundOrigin: "padding-box",
                backgroundClip: "border-box",
                backgroundColor: "rgba(0, 0, 0, 0)",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "0px",
                backgroundPositionY: "50%",
                position: "relative",
                overflowX: "hidden",
                overflowY: "hidden",
                content: "normal",
                bottom: "0px",
                left: "0px",
                width: "1170px",
                height: "274.406px",
                border: "0px none rgb(174, 180, 182)",
                borderRadius: "40px",
                padding: "57px 100px 55px 100px",
                margin: "0px 0px -135px 0px",
              }}
            >
              <span
                style={{
                  fontStyle: "normal",
                  fontVariantEmoji: "normal",
                  fontWeight: "400",
                  fontStretch: "100%",
                  fontSize: "16px",
                  lineHeight: "normal",
                  fontFamily: '"Open Sans", sans-serif',
                  fontSizeAdjust: "none",
                  verticalAlign: "baseline",
                  backgroundImage:
                    'url("https://html.merku.love/shelly/assets/img/news-bg.png")',
                  backgroundSize: "auto",
                  backgroundAttachment: "scroll",
                  backgroundOrigin: "padding-box",
                  backgroundClip: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "0%",
                  backgroundPositionY: "0%",
                  position: "absolute",
                  overflowX: "visible",
                  overflowY: "visible",
                  content: '""',
                  bottom: "46px",
                  left: "0px",
                  width: "59px",
                  height: "115px",
                  border: "0px none rgb(174, 180, 182)",
                  borderRadius: "0px",
                  margin: "0px",
                }}
              ></span>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  lineHeight: "normal",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px",
                  margin: "0px -15px 0px -15px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "333.328px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "33.3333%",
                    maxWidth: "33.3333%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <h2
                      style={{
                        fontWeight: "700",
                        lineHeight: "44.71px",
                        fontSize: "36.58px",
                        color: "rgb(43, 43, 43)",
                        border: "0px none rgb(43, 43, 43)",
                        margin: "0px 0px 33px 0px",
                      }}
                    >
                      Join us<br style={{}}></br>
                      and stay tuned!
                    </h2>
                    <a
                      href="contacts.html"
                      title=""
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(19, 94, 158)",
                        fontWeight: "500",
                        fontSize: "18.29px",
                        lineHeight: "40px",
                        fontFamily: "Poppins, sans-serif",
                        display: "inline-block",
                        height: "40px",
                        position: "relative",
                        border: "0px none rgb(255, 255, 255)",
                        borderRadius: "30px",
                        padding: "0px 60px 0px 60px",
                      }}
                    >
                      Join Us{" "}
                      <i
                        style={{
                          display: "block",
                          lineHeight: "28px",
                          fontFamily: '"Font Awesome 5 Free"',
                          fontWeight: "900",
                          fontSize: "18.29px",
                          backgroundColor: "rgb(255, 255, 255)",
                          width: "28px",
                          height: "28px",
                          textAlign: "center",
                          color: "rgb(21, 87, 153)",
                          position: "absolute",
                          top: "20px",
                          transitionBehavior: "normal",
                          transitionDuration: "0.4s",
                          transitionTimingFunction: "ease-in-out",
                          transitionDelay: "0s",
                          transitionProperty: "all",
                          left: "6px",
                          transform: "matrix(1, 0, 0, 1, 0, -14)",
                          border: "0px none rgb(21, 87, 153)",
                          borderRadius: "50px",
                        }}
                      >
                        <span
                          style={{
                            WebkitFontSmoothing: "antialiased",
                            display: "inline",
                            fontStyle: "normal",
                            fontVariantEmoji: "normal",
                            textRendering: "auto",
                            lineHeight: "28px",
                            content: '""',
                            fontStretch: "100%",
                            fontSize: "18.29px",
                            fontSizeAdjust: "none",
                            verticalAlign: "baseline",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            width: "auto",
                            height: "auto",
                            color: "rgb(21, 87, 153)",
                            position: "static",
                            top: "auto",
                            transitionBehavior: "normal",
                            transitionDuration: "0s",
                            transitionTimingFunction: "ease",
                            transitionDelay: "0s",
                            transitionProperty: "all",
                            left: "auto",
                            transform: "none",
                            border: "0px none rgb(21, 87, 153)",
                            borderRadius: "0px",
                            margin: "0px",
                          }}
                        >
                          
                        </span>
                      </i>
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "666.656px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "66.6667%",
                    maxWidth: "66.6667%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <form
                    style={{
                      boxSizing: "border-box",
                      fontStyle: "normal",
                      fontVariantEmoji: "normal",
                      fontWeight: "400",
                      fontStretch: "100%",
                      fontSize: "16px",
                      lineHeight: "normal",
                      fontFamily: '"Open Sans", sans-serif',
                      fontSizeAdjust: "none",
                      verticalAlign: "baseline",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px 0px 0px 62px",
                      margin: "0px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        lineHeight: "normal",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px",
                        margin: "0px -10px 0px -10px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "198.203px",
                          flexGrow: "0",
                          flexShrink: "0",
                          flexBasis: "33.3333%",
                          maxWidth: "33.3333%",
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px 10px 0px 10px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px 0px 20px 0px",
                          }}
                        >
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            style={{}}
                          ></input>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          width: "198.203px",
                          flexGrow: "0",
                          flexShrink: "0",
                          flexBasis: "33.3333%",
                          maxWidth: "33.3333%",
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px 10px 0px 10px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px 0px 20px 0px",
                          }}
                        >
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            style={{}}
                          ></input>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          width: "198.203px",
                          flexGrow: "0",
                          flexShrink: "0",
                          flexBasis: "33.3333%",
                          maxWidth: "33.3333%",
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px 10px 0px 10px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            position: "relative",
                            content: "normal",
                            top: "0px",
                            right: "0px",
                            color: "rgb(174, 180, 182)",
                            transform: "none",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px 0px 20px 0px",
                          }}
                        >
                          <span
                            style={{
                              fontVariantEmoji: "normal",
                              fontWeight: "900",
                              fontStretch: "100%",
                              fontSize: "16px",
                              lineHeight: "normal",
                              fontFamily: '"Font Awesome 5 Free"',
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              position: "absolute",
                              content: '""',
                              top: "20px",
                              right: "16px",
                              color: "rgb(87, 87, 87)",
                              transform: "matrix(1, 0, 0, 1, 0, -8.5)",
                              border: "0px none rgb(87, 87, 87)",
                              margin: "0px",
                            }}
                          >
                            
                          </span>
                          <select
                            style={{
                              boxSizing: "border-box",
                              fontSize: "14.23px",
                              lineHeight: "40px",
                              textTransform: "none",
                              overflowWrap: "normal",
                              width: "178.203px",
                              backgroundColor: "rgb(253, 222, 173)",
                              height: "40px",
                              color: "rgb(87, 87, 87)",
                              fontStyle: "italic",
                              appearance: "none",
                              textIndent: "1px",
                              border: "0px none rgb(87, 87, 87)",
                              borderRadius: "20px",
                              padding: "0px 16px 0px 16px",
                              margin: "0px",
                            }}
                          >
                            <option style={{}}>Class</option>
                            <option style={{}}>Class</option>
                            <option style={{}}>Class</option>
                            <option style={{}}>Class</option>
                            <option style={{}}>Class</option>
                            <option style={{}}>Class</option>
                          </select>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          width: "594.656px",
                          flexGrow: "0",
                          flexShrink: "0",
                          flexBasis: "100%",
                          maxWidth: "100%",
                          lineHeight: "normal",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px 10px 0px 10px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px 0px 20px 0px",
                          }}
                        >
                          <textarea
                            name="message"
                            placeholder="Message"
                            style={{
                              boxSizing: "border-box",
                              fontSize: "14.23px",
                              lineHeight: "normal",
                              overflowX: "auto",
                              overflowY: "auto",
                              resize: "none",
                              color: "rgb(87, 87, 87)",
                              backgroundColor: "rgb(253, 222, 173)",
                              height: "70px",
                              width: "574.656px",
                              border: "0px none rgb(87, 87, 87)",
                              borderRadius: "20px",
                              padding: "10px 15px 10px 15px",
                              margin: "0px",
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <span
                style={{
                  fontStyle: "normal",
                  fontVariantEmoji: "normal",
                  fontWeight: "400",
                  fontStretch: "100%",
                  fontSize: "16px",
                  lineHeight: "normal",
                  fontFamily: '"Open Sans", sans-serif',
                  fontSizeAdjust: "none",
                  verticalAlign: "baseline",
                  backgroundImage:
                    'url("https://html.merku.love/shelly/assets/img/circle5.png")',
                  backgroundSize: "auto",
                  backgroundAttachment: "scroll",
                  backgroundOrigin: "padding-box",
                  backgroundClip: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "0%",
                  backgroundPositionY: "0%",
                  position: "absolute",
                  overflowX: "visible",
                  overflowY: "visible",
                  content: '""',
                  bottom: "15px",
                  left: "1092px",
                  width: "78px",
                  height: "100px",
                  border: "0px none rgb(174, 180, 182)",
                  borderRadius: "0px",
                  margin: "0px",
                }}
              ></span>
            </div>
          </div>
        </section>
        <footer
          style={{
            boxSizing: "border-box",
            display: "block",
            fontStyle: "normal",
            fontVariantEmoji: "normal",
            fontWeight: "400",
            fontStretch: "100%",
            fontSize: "16px",
            lineHeight: "normal",
            fontFamily: '"Open Sans", sans-serif',
            fontSizeAdjust: "none",
            verticalAlign: "baseline",
            backgroundColor: "rgb(242, 247, 253)",
            border: "0px none rgb(174, 180, 182)",
            padding: "219px 0px 72px 0px",
            margin: "0px",
          }}
        >
          <div
            style={{
              width: "1200px",
              maxWidth: "1200px",
              lineHeight: "normal",
              border: "0px none rgb(174, 180, 182)",
              padding: "0px 15px 0px 15px",
              margin: "0px 352.5px 0px 352.5px",
            }}
          >
            <div
              style={{
                lineHeight: "normal",
                border: "0px none rgb(174, 180, 182)",
                padding: "0px 0px 59px 0px",
                margin: "0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  lineHeight: "normal",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px",
                  margin: "0px -15px 0px -15px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "300px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "25%",
                    maxWidth: "25%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <img
                      src="assets/img/logo.png"
                      alt=""
                      style={{
                        lineHeight: "normal",
                        verticalAlign: "middle",
                        height: "57px",
                        margin: "0px 0px 28px 0px",
                      }}
                    ></img>
                    <p style={{ fontSize: "14.23px", margin: "0px" }}>
                      Vivamus porta efficitur nibh nec convallis. Vestibulum
                      egestas eleifend justo. Ut tellus ipsum, accumsan
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "300px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "25%",
                    maxWidth: "25%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <ul style={{ padding: "0px", margin: "0px" }}>
                      <li
                        style={{
                          fontSize: "16px",
                          display: "block",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px 0px 19px 0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <img
                            src="assets/img/icon1.png"
                            alt=""
                            style={{
                              lineHeight: "normal",
                              verticalAlign: "top",
                              height: "21px",
                              position: "relative",
                              top: "6px",
                              margin: "0px 5px 0px 0px",
                            }}
                          ></img>
                          <div
                            style={{
                              lineHeight: "normal",
                              display: "inline-block",
                              maxWidth: "calc(100% - 21px)",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "14.23px",
                                margin: "0px 0px 6px 0px",
                              }}
                            >
                              Call
                            </h4>
                            <span
                              style={{
                                fontVariantEmoji: "normal",
                                fontStretch: "100%",
                                fontSize: "14.23px",
                                lineHeight: "normal",
                                fontSizeAdjust: "none",
                                verticalAlign: "baseline",
                                display: "block",
                                color: "rgb(87, 87, 87)",
                                border: "0px none rgb(87, 87, 87)",
                                margin: "0px",
                              }}
                            >
                              +2 342 5446 67
                            </span>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{
                          fontSize: "16px",
                          display: "block",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px 0px 19px 0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <img
                            src="assets/img/icon2.png"
                            alt=""
                            style={{
                              lineHeight: "normal",
                              verticalAlign: "top",
                              height: "21px",
                              position: "relative",
                              top: "6px",
                              margin: "0px 5px 0px 0px",
                            }}
                          ></img>
                          <div
                            style={{
                              lineHeight: "normal",
                              display: "inline-block",
                              maxWidth: "calc(100% - 21px)",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "14.23px",
                                margin: "0px 0px 6px 0px",
                              }}
                            >
                              Work Time
                            </h4>
                            <span
                              style={{
                                fontVariantEmoji: "normal",
                                fontStretch: "100%",
                                fontSize: "14.23px",
                                lineHeight: "normal",
                                fontSizeAdjust: "none",
                                verticalAlign: "baseline",
                                display: "block",
                                color: "rgb(87, 87, 87)",
                                border: "0px none rgb(87, 87, 87)",
                                margin: "0px",
                              }}
                            >
                              Mon - Fri 8 AM - 5 PM
                            </span>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{
                          fontSize: "16px",
                          display: "block",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "normal",
                            border: "0px none rgb(174, 180, 182)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <img
                            src="assets/img/icon3.png"
                            alt=""
                            style={{
                              lineHeight: "normal",
                              verticalAlign: "top",
                              height: "21px",
                              position: "relative",
                              top: "6px",
                              margin: "0px 5px 0px 0px",
                            }}
                          ></img>
                          <div
                            style={{
                              lineHeight: "normal",
                              display: "inline-block",
                              maxWidth: "calc(100% - 21px)",
                              border: "0px none rgb(174, 180, 182)",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "14.23px",
                                margin: "0px 0px 6px 0px",
                              }}
                            >
                              Address
                            </h4>
                            <span
                              style={{
                                fontVariantEmoji: "normal",
                                fontStretch: "100%",
                                fontSize: "14.23px",
                                lineHeight: "normal",
                                fontSizeAdjust: "none",
                                verticalAlign: "baseline",
                                display: "block",
                                color: "rgb(87, 87, 87)",
                                border: "0px none rgb(87, 87, 87)",
                                margin: "0px",
                              }}
                            >
                              Franklin St, Greenpoint Ave
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "300px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "25%",
                    maxWidth: "25%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <h3
                      style={{
                        fontWeight: "500",
                        lineHeight: "normal",
                        fontSize: "18.29px",
                        textTransform: "capitalize",
                        margin: "0px 0px 15px 0px",
                      }}
                    >
                      Quick Links
                    </h3>
                    <ul style={{ padding: "0px", margin: "0px" }}>
                      <li
                        style={{
                          fontSize: "16px",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px 0px 7px 0px",
                        }}
                      >
                        <a
                          href="about.html"
                          title=""
                          style={{
                            color: "rgb(87, 87, 87)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "14.23px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            border: "0px none rgb(87, 87, 87)",
                            padding: "0px",
                          }}
                        >
                          About Us
                        </a>
                      </li>
                      <li
                        style={{
                          fontSize: "16px",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px 0px 7px 0px",
                        }}
                      >
                        <a
                          href="classes.html"
                          title=""
                          style={{
                            color: "rgb(87, 87, 87)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "14.23px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            border: "0px none rgb(87, 87, 87)",
                            padding: "0px",
                          }}
                        >
                          Our Classes
                        </a>
                      </li>
                      <li
                        style={{
                          fontSize: "16px",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px 0px 7px 0px",
                        }}
                      >
                        <a
                          href="teachers.html"
                          title=""
                          style={{
                            color: "rgb(87, 87, 87)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "14.23px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            border: "0px none rgb(87, 87, 87)",
                            padding: "0px",
                          }}
                        >
                          School Teachers
                        </a>
                      </li>
                      <li
                        style={{
                          fontSize: "16px",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px 0px 7px 0px",
                        }}
                      >
                        <a
                          href="events.html"
                          title=""
                          style={{
                            color: "rgb(87, 87, 87)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "14.23px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            border: "0px none rgb(87, 87, 87)",
                            padding: "0px",
                          }}
                        >
                          Recent Events
                        </a>
                      </li>
                      <li
                        style={{
                          fontSize: "16px",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px 0px 7px 0px",
                        }}
                      >
                        <a
                          href="blog.html"
                          title=""
                          style={{
                            color: "rgb(87, 87, 87)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "14.23px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            border: "0px none rgb(87, 87, 87)",
                            padding: "0px",
                          }}
                        >
                          Our News
                        </a>
                      </li>
                      <li
                        style={{
                          fontSize: "16px",
                          border: "0px none rgb(174, 180, 182)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <a
                          href="schedule.html"
                          title=""
                          style={{
                            color: "rgb(87, 87, 87)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            fontWeight: "500",
                            fontSize: "14.23px",
                            lineHeight: "normal",
                            fontFamily: "Poppins, sans-serif",
                            display: "block",
                            border: "0px none rgb(87, 87, 87)",
                            padding: "0px",
                          }}
                        >
                          Schedule
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "300px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "25%",
                    maxWidth: "25%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      lineHeight: "normal",
                      border: "0px none rgb(174, 180, 182)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <iframe
                      src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                      style={{
                        boxSizing: "border-box",
                        fontVariantEmoji: "normal",
                        fontStretch: "100%",
                        fontSize: "16px",
                        lineHeight: "normal",
                        fontSizeAdjust: "none",
                        verticalAlign: "baseline",
                        width: "270px",
                        height: "200px",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px",
                        margin: "0px",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                lineHeight: "normal",
                borderTop: "1px solid rgb(191, 191, 191)",
                borderLeft: "0px none rgb(174, 180, 182)",
                borderRight: "0px none rgb(174, 180, 182)",
                borderBottom: "0px none rgb(174, 180, 182)",
                padding: "26px 0px 0px 0px",
                margin: "0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  lineHeight: "normal",
                  border: "0px none rgb(174, 180, 182)",
                  padding: "0px",
                  margin: "0px -15px 0px -15px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "600px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "50%",
                    maxWidth: "50%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <p style={{ fontSize: "14.23px", margin: "0px" }}>
                    © Copyrights 2020 Shelly All rights reserved
                  </p>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "600px",
                    flexGrow: "0",
                    flexShrink: "0",
                    flexBasis: "50%",
                    maxWidth: "50%",
                    lineHeight: "normal",
                    border: "0px none rgb(174, 180, 182)",
                    padding: "0px 15px 0px 15px",
                    margin: "0px",
                  }}
                >
                  <ul
                    style={{
                      textAlign: "right",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <li
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px",
                        margin: "0px 16px 0px 0px",
                      }}
                    >
                      <a
                        href="#"
                        title=""
                        style={{
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(18, 96, 160)",
                          fontSize: "16px",
                          lineHeight: "30px",
                          display: "inline-block",
                          width: "30px",
                          height: "30px",
                          textAlign: "center",
                          border: "0px none rgb(255, 255, 255)",
                          borderRadius: "100px",
                          padding: "0px",
                        }}
                      >
                        <i
                          style={{
                            display: "inline-block",
                            lineHeight: "16px",
                            fontFamily: '"Font Awesome 5 Brands"',
                            fontSize: "16px",
                            border: "0px none rgb(255, 255, 255)",
                          }}
                        >
                          <span
                            style={{
                              WebkitFontSmoothing: "antialiased",
                              display: "inline",
                              fontVariantEmoji: "normal",
                              textRendering: "auto",
                              lineHeight: "16px",
                              content: '""',
                              fontStretch: "100%",
                              fontSize: "16px",
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              border: "0px none rgb(255, 255, 255)",
                              margin: "0px",
                            }}
                          >
                            
                          </span>
                        </i>
                      </a>
                    </li>
                    <li
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px",
                        margin: "0px 16px 0px 0px",
                      }}
                    >
                      <a
                        href="#"
                        title=""
                        style={{
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(18, 96, 160)",
                          fontSize: "16px",
                          lineHeight: "30px",
                          display: "inline-block",
                          width: "30px",
                          height: "30px",
                          textAlign: "center",
                          border: "0px none rgb(255, 255, 255)",
                          borderRadius: "100px",
                          padding: "0px",
                        }}
                      >
                        <i
                          style={{
                            display: "inline-block",
                            lineHeight: "16px",
                            fontFamily: '"Font Awesome 5 Brands"',
                            fontSize: "16px",
                            border: "0px none rgb(255, 255, 255)",
                          }}
                        >
                          <span
                            style={{
                              WebkitFontSmoothing: "antialiased",
                              display: "inline",
                              fontVariantEmoji: "normal",
                              textRendering: "auto",
                              lineHeight: "16px",
                              content: '""',
                              fontStretch: "100%",
                              fontSize: "16px",
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              border: "0px none rgb(255, 255, 255)",
                              margin: "0px",
                            }}
                          >
                            
                          </span>
                        </i>
                      </a>
                    </li>
                    <li
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        border: "0px none rgb(174, 180, 182)",
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      <a
                        href="#"
                        title=""
                        style={{
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(18, 96, 160)",
                          fontSize: "16px",
                          lineHeight: "30px",
                          display: "inline-block",
                          width: "30px",
                          height: "30px",
                          textAlign: "center",
                          border: "0px none rgb(255, 255, 255)",
                          borderRadius: "100px",
                          padding: "0px",
                        }}
                      >
                        <i
                          style={{
                            display: "inline-block",
                            lineHeight: "16px",
                            fontFamily: '"Font Awesome 5 Brands"',
                            fontSize: "16px",
                            border: "0px none rgb(255, 255, 255)",
                          }}
                        >
                          <span
                            style={{
                              WebkitFontSmoothing: "antialiased",
                              display: "inline",
                              fontVariantEmoji: "normal",
                              textRendering: "auto",
                              lineHeight: "16px",
                              content: '""',
                              fontStretch: "100%",
                              fontSize: "16px",
                              fontSizeAdjust: "none",
                              verticalAlign: "baseline",
                              border: "0px none rgb(255, 255, 255)",
                              margin: "0px",
                            }}
                          >
                            
                          </span>
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

render(<Component />, document.getElementById("root"));
