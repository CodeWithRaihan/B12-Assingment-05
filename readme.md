











### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans: 1.getElementById:Selects a single element based on its unique id attribute.
     2.getElementsByClassName:Selects all elements that possess a specific class name.
     3.querySelector:Selects the first element in the document that matches a specified CSS selector
     4.querySelectorAll:Selects all elements in the document that match a specified CSS selector

2. How do you **create and insert a new element into the DOM**?
ans: const newDiv = document.createElement('div'); 
     const newParagraph = document.createElement('p');

3. What is **Event Bubbling** and how does it work?
ans:click on an element  the event first happens on that element then it automatically moves up to its parent then the parents parent and so on until it reaches the top (document).It’s like a small bubble rising from the bottom to the top

4. What is **Event Delegation** in JavaScript? Why is it useful?
ans: Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements, rather than adding separate event listeners to each child.
useful: Instead of attaching multiple event listeners (one for each child element), only a single listener is used, significantly reducing memory consumption and improving the overall performance of the application, especially with a large number of elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault():This method prevents the browser's default action associated with a specific event.
stopPropagation()


