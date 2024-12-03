export function getLang() {
  return document.documentElement.lang;
}

export function getPlaceholderDataFor(key) {
  const lang = getLang();
  return window.placeholders?.[lang]?.[key] || window.placeholders?.default?.[key];
}

export const loadRemoteApp = async (appName, elem, config) => {
  try {
    // Initialize the remote module
    const container = window.productListing; // Global name of the remote
    // await container.init(__webpack_share_scopes__.default); // Initialize sharing scope (if using Webpack 5)
    const factory = await container.get(appName); // Get the module from the remote
    const productListingApp = factory().default;
    productListingApp(elem, config);
  } catch (err) {
    console.error('Error loading remote module', err);
  }
};