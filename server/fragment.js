const axios = require('axios');

function fetchFragment(servicePath) {
    return async (route = '') => {
        const requestPath = `${servicePath}${route}`;

        try {
            const response = await axios.get(requestPath);

            const jsLink = response.headers.jslink;
            const cssLink = response.headers.csslink;

            return `
            <link rel="stylesheet" href="${servicePath}${cssLink}">
            ${response.data}
            <script src="${servicePath}${jsLink}"></script>
            `;
        } catch (e) {
            // log...
            return 'Error?';
        }
    };
}

module.exports = fetchFragment;
