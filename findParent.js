function findParent(element) {

  // dzięki bąbelkowaniu szuka elementu aż znajdzie taki ...
  
  while (!element.id) {
    element = element.parentNode;
  }

  return element;
}
export default findParent;
