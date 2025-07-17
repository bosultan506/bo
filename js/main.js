// In your main JS file (or <script> tag)
document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading (remove this in production)
    setTimeout(() => {
        // Hide loader
        const loader = document.querySelector('.ai-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
        
        // Show main content
        document.getElementById('quantum-app').innerHTML = `
            <h1 style="color: #e63946">Z99 GAMING</h1>
            <p>Call of Duty Warzone Hub</p>
            <button onclick="alert('Welcome Operator!')">
                ENTER WARZONE
            </button>
        `;
    }, 1500); // 1.5 second loading simulation
});
