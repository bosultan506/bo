// In main.js
const lazyLoadComponents = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        switch(entry.target.tagName.toLowerCase()) {
          case 'warzone-tactical-map':
            import('./components/tactical-map.js');
            break;
          case 'killfeed-overlay':
            import('./components/killfeed.js');
            break;
          // Add other components...
        }
        observer.unobserve(entry.target);
      }
    });
  });

  // Observe all custom element placeholders
  document.querySelectorAll(
    'warzone-tactical-map, killfeed-overlay, loadout-builder, esports-bracket'
  ).forEach(el => observer.observe(el));
};
