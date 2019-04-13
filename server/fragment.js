const axios = require('axios');

function fetchFragment(url) {
    return async () => {
        try {
            const response = await axios.get(url);

            const jsLink = response.headers.jslink;
            const cssLink = response.headers.csslink;

            return `
            <link rel="stylesheet" href="${url}${cssLink}">
            ${response.data}
            <script src="${url}${jsLink}"></script>
            `;
        } catch (e) {
            // log...
            return 'Error?';
        }
    };
}

module.exports = fetchFragment;
