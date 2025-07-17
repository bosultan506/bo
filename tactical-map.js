// js/components/tactical-map.js
class WarzoneTacticalMap extends HTMLElement {
  constructor() {
    super();
    
    // Shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });
    
    // Template
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          width: 100%;
          height: 70vh;
          background: url('../assets/maps/verdansk.jpg') center/cover;
          border: 2px solid #e63946;
          border-radius: 8px;
        }
        .marker {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #e63946;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          filter: drop-shadow(0 0 5px #e63946);
        }
      </style>
      <div class="marker" style="top: 30%; left: 45%;"></div>
    `;
  }
}

// Register the component
customElements.define('warzone-tactical-map', WarzoneTacticalMap);

// Signal successful registration
console.log('[Z99] Tactical Map component deployed');
