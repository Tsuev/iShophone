if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/iShophone/sw.js', { scope: '/iShophone/' })})}
