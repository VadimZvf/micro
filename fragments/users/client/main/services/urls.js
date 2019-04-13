const urls = {
    'users/fetch': () => `http://localhost:8088`
};

const request = (name, ...args) => (urls[name] ? urls[name].apply(undefined, args) : '');

export default { request };
