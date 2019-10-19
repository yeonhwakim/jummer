import React from 'react'

import { isMobile } from 'react-device-detect'

export default props => (
  <div id="global">
    {props.children}
    <style jsx global>{`
      /* reset css */
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, font, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-weight: inherit;
        font-style: inherit;
        font-size: 100%;
        font-family: inherit;
        vertical-align: baseline;
      }
      /* remember to define focus styles! */
      :focus {
        outline: 0;
      }
      body {
        line-height: 1;
        color: black;
        background: white;
      }
      ol, ul {
        list-style: none;
      }
      /* tables still need 'cellspacing="0"' in the markup */
      table {
        border-collapse: separate;
        border-spacing: 0;
      }
      caption, th, td {
        text-align: left;
        font-weight: normal;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
        content: "";
      }
      blockquote, q {
        quotes: "" "";
      }
      * {
        margin: 0; 
        padding: 0;
        font-family: 'Noto Sans KR', sans-serif; 
        outline: none; 
      }

      html {
        width: 100%;
        height:100%;
      }

      body {
        width: 100%;
        height:100%;
        background-color: rgba(190,190,190,0.92);
      }

      #root{
        width: 100%; 
        height: 100%; 
        display: flex; 
        justify-content: center; 
        align-items: center;
      }

      #global {
        position: relative;
        width: ${isMobile ? '100%' : '360px'};
        height: ${isMobile ? '100%' : '600px'};
        background-color: #ffffff;
      }

      .layout {
        position: absolute;
        left: 0;
        top: 0;
        width: ${isMobile ? '100%' : '360px'};
        height: ${isMobile ? '100%' : '600px'};
        background-color: #ffffff;
      }

      .main {

      }

      .popup {
        display: none;
      }

      .chat {
        display: none;
      }
      
      .alert{
        display: none;
      }
    `}</style>
  </div>
)
