// js/main.js

// Dynamic Component Loader
const loadComponents = async () => {
  try {
    // Load all components simultaneously
    await Promise.all([
      import('./components/tactical-map.js'),
      import('./components/killfeed.js'),
      import('./components/loadout-builder.js'),
      import('./components/esports-bracket.js')
    ]);
    
    console.log('[Z99] All components loaded!');
  } catch (error) {
    console.error('[Z99] Component loading failed:', error);
    // Fallback UI
    document.getElementById('quantum-app').innerHTML = `
      <div class="error">
        <h2>Combat Module Failure</h2>
        <p>Reload to initialize systems</p>
        <button onclick="window.location.reload()">Re-engage</button>
      </div>
    `;
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Start loading components
  loadComponents();
  
  // Optional: Load components only when needed
  document.addEventListener('warzone-components-requested', loadComponents);
});