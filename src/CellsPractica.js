import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsPractica-styles.js';
import "@bbva-web-components/bbva-link/bbva-link.js"
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-practica></cells-practica>
```

##styling-doc

@customElement cells-practica
*/
export class CellsPractica extends LitElement {
  static get is() {
    return 'cells-practica';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-practica-shared-styles')
    ];
  }
 
  _actionHome({detail}){
    const {selected}=detail;
    this.dispatchEvent(new CustomEvent('action-selected-header',{
      detail:selected,
      bubbles:true,
      composed :true
    }))
  }

  // Define a template
  render() {
    return html`


<div class="right-header" >
 <svg class="imagen" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 600 179.8" style="enable-background:new 0 0 600 179.8;" xml:space="preserve">
   
<style type="text/css" >
	.st0{fill:white;}
</style>
<title>Mesa de trabajo 1 copia</title>
<g>
	<path class="st0" d="M432.2,24.4l-51.6,98.2c-1.1,2.1-4.3,2.1-5.4,0l-51.6-98.2c-0.5-1-1.5-1.6-2.6-1.6h-25c-1.7,0-2.8,1.8-2,3.3
		l81.3,152.2c1.1,2.1,4.1,2.1,5.3,0l81.3-152.2c0.8-1.5-0.3-3.3-2-3.3h-25C433.7,22.8,432.7,23.4,432.2,24.4L432.2,24.4z"/>
	<path class="st0" d="M461.5,155.5l51.6-98.2c1.1-2.1,4.3-2.1,5.4,0l51.6,98.2c0.5,1,1.5,1.6,2.6,1.6h25c1.7,0,2.8-1.8,2-3.3
		L518.4,1.6c-1.1-2.1-4.1-2.1-5.3,0l-81.3,152.2c-0.8,1.5,0.3,3.3,2,3.3h25C459.9,157,461,156.4,461.5,155.5L461.5,155.5z"/>
	<path class="st0" d="M108.8,95.2c10.8-5.4,17.5-17.1,17.5-31.4c0-24.5-19.1-41.1-46-41.1H3c-1.7,0-3,1.3-3,3v151.1c0,1.7,1.3,3,3,3
		h74c37,0,56.5-15.9,56.5-47.1C133.5,102.3,108.8,95.2,108.8,95.2L108.8,95.2z M29,45.5h45.9c16.9,0,25.5,7.2,25.5,20.6
		c0,13.4-8.6,20.6-25.5,20.6H29c-1.6,0-3-1.3-3-3V48.5C26,46.8,27.3,45.5,29,45.5L29,45.5z M75.5,157l-46.5,0c-1.7,0-3-1.3-3-3
		l0-41.7c0-1.6,1.3-3,3-3h46.5c22.2,0,32.1,6.3,32.1,23.8C107.5,150.8,97.9,157,75.5,157L75.5,157z"/>
	<path class="st0" d="M267.5,95.2c10.8-5.4,17.5-17.1,17.5-31.4c0-24.5-19.1-41.1-46-41.1h-77.4c-1.7,0-3,1.3-3,3v151.1
		c0,1.7,1.3,3,3,3h74c37,0,56.5-15.9,56.5-47.1C292.2,102.3,267.5,95.2,267.5,95.2L267.5,95.2z M187.7,45.5h45.9
		c16.9,0,25.5,7.2,25.5,20.6c0,13.4-8.6,20.6-25.5,20.6h-45.9c-1.7,0-3-1.3-3-3V48.5C184.7,46.8,186,45.5,187.7,45.5L187.7,45.5z
		 M234.1,157l-46.5,0c-1.6,0-3-1.3-3-3v-41.7c0-1.6,1.3-3,3-3h46.5c22.2,0,32.1,6.3,32.1,23.8C266.2,150.8,256.5,157,234.1,157
		L234.1,157z"/>
</g>
</svg>
    <bbva-link class="btnHome"  @selected-header='${this._actionHome}'>Home</bbva-link>
    <div class="nbsp">&nbsp;&nbsp;|&nbsp;&nbsp;</div>
    <bbva-link class="btnDetail">Detail</bbva-link>
    </div>
    `;
  }
}
