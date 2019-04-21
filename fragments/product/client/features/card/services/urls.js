const urls = {
    product: productId => `http://localhost:8088/${productId}`
};

const request = (name, ...args) => (urls[name] ? urls[name].apply(undefined, args) : '');

export default { request };
