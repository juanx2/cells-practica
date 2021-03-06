/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

.right-header {
  display: flex;
  background: #072146;
  height: 80px;
  width: 100%;
}

.right-header .imagen {
  height: 3.125em;
  margin: 0.938em 0em 0.938em 3.125em;
}

.right-header .boton-icon {
  justify-content: flex-end;
  display: flex;
  width: 100%;
}

.right-header .btnHome {
  height: 1.25em;
  font-size: 18px;
  margin: 1.563em 0em 0em 0em;
}

.right-header .btnDetail {
  margin: 1.563em 2.813em 0em 0em;
  height: 1.25em;
  font-size: 18px;
}

.right-header .nbsp {
  margin: 22px 0px 0px 0px;
  margin-bottom: 150px;
  padding-bottom: 0px;
  font-size: 28px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

:host([hidden]),
[hidden] {
  display: none !important;
}
`;