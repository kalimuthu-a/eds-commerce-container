import { PRODUCT_LISTING_BFF_ENDPOINT } from "../../constants/index.js";
import { getPlaceholderDataFor } from "../../scripts/utils.js";

const loadRemoteModule = async (elem, config) => {
  try {
    // Initialize the remote module
    const container = window.productListing; // Global name of the remote
    // await container.init(__webpack_share_scopes__.default); // Initialize sharing scope (if using Webpack 5)
    const factory = await container.get('./ProductListingApp'); // Get the module from the remote
    const productListingApp = factory().default;
    productListingApp(elem, config);
  } catch (err) {
    console.error('Error loading remote module', err);
  }
};

export default async function decorate(block) {
  const config = {
    producListingBffEndpoint: getPlaceholderDataFor(PRODUCT_LISTING_BFF_ENDPOINT),
  }
  const appHolder = document.createElement('div');
  appHolder.id = 'product-listing-app';
  await loadRemoteModule(appHolder, config);
  block.appendChild(appHolder);
}