import { PRODUCT_LISTING_APP_NAME, PRODUCT_LISTING_BFF_ENDPOINT } from "../../constants/index.js";
import { getPlaceholderDataFor, loadRemoteApp } from "../../scripts/utils.js";

export default async function decorate(block) {
  const config = {
    producListingBffEndpoint: getPlaceholderDataFor(PRODUCT_LISTING_BFF_ENDPOINT),
  }
  const appHolder = document.createElement('div');
  appHolder.id = 'product-listing-app';
  await loadRemoteApp(PRODUCT_LISTING_APP_NAME, appHolder, config);
  block.appendChild(appHolder);
}