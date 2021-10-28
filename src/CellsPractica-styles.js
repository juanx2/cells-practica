/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

.right-header {
  display: flex;
  justify-content: end;
  background: #072146;
  height: 80px;
  width: 1920px;
}

.right-header bbva-link {
  margin-top: 27px;
  font-size: 16px;
  height: 20px;
}

.right-header {
  display: flex;
}

.imagen {
  margin-right: 1220px;
  width: 240px;
  height: 50px;
  margin-top: 14px;
}

.nbsp {
  margin-top: 18px;
  font-size: 32px;
}

.btnDetail:hover {
  color: white;
}

.btnHome:hover {
  color: white;
}

.btnDetail {
  margin-right: 125px;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}
`;