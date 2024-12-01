// import productListing from '@product-listing-app';

export default function decorate(block) {
  console.log(productListing);
  const h2 = document.createElement('h2');
  h2.textContent = 'Product Listing';
  block.prepend(h2);
}