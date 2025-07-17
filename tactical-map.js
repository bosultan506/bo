class WarzoneTacticalMap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          width: 100%;
          height: 600px;
          background: url('maps/verdansk.jpg') center/cover;
        }
        .map-marker {
          position: absolute;
          width: 12px;
          height: 12px;
          background: var(--cod-red);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      </style>
      <div class="map-container">
        <div class="map-marker" style="top: 30%; left: 45%;"></div>
      </div>
    `;
  }
}

customElements.define('warzone-tactical-map', WarzoneTacticalMap);
