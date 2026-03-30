console.log('Testing workbox-webpack-plugin require...');
try {
    const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
    console.log('Successfully required workbox-webpack-plugin');
} catch (e) {
    console.error('Error requiring workbox-webpack-plugin:', e);
}
