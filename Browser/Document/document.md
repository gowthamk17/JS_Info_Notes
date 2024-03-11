# Browser Environment

host environment -> the platform where the javascript runs

window -> a global object in brower, also obj representation for the current browser tab

document -> property of window Document Object Model for the current page is here

CSSOM -> DOM for css not used mostly

Browser Object Model -> contains the special methods and Object for the browser, like alert, storage, location, etc.,

## Dom Nodes

 + All HTML element are represented as objects
 + **AutoCorrection** unclosed tags are closed automaticallty
 + if we selected a node in elements tab that node will be aviable in console as $0 and previouly selected one will be available as $1
 + Everything has a place in dom event comments and DOCTYPE 

## DOM Navigation
+ document has three childs 
    + documentElement - points to html tag
    + body - points to body tag
    + head - points to head tag
+ Every node element has these properties
    + childNodes - a list of all child nodes
    + firstChild - fast access to first child
    + lastChild - fast access to last child
    + elem.hasChildNodes() to check weather the element is empty or not
    + don't use for...in to loop over dom collection
    + **parentNode** points to nodes parent element
    + **nextSibling** points to next sibling node
    + **previousSibling** points to previous sibling node
    + use the above properties with Element word for getting only node element
    + specific nodes may have extra properties like in link below: https://javascript.info/dom-navigation#dom-navigation-tables

## Searching
+ **getElementById** helps to get an element with the unique id
    + only works on document node
+ we can use a id as variable direclty in js it will point to that node
    + though it's not recommended, why, because we don't initialize it, so it will create confusion.
+ **querySelectorAll** get all element in document with css selector
+ **querySelector** same as before but only finds first element and returns it
+ **matches** used to check if an element is match with an selector
+ **closest** help to find an element with ancestor hierachy
+ **getElementsBy***
    + **getElementsByTagName** get all elements with a tag, for * returns all tag element
    + **getElementsByClassName** return all element with a specific class name
    + **getElementsByName** returns all element with a specific name attribute 
    + the above methods not used anymore prefer avoiding them
+ **elem.contains(elemA)** checks for child-parent relationship with two elements

## Basic DOM Node properties
+ A simple html node is inherited from multiple nodes
+ **EventTarget** inherited by all elements, it has event related methods in it
+ **Node** Node related properties like parentNode.,
+ **Element** Element related properties like parentElementNode.,
+ **Interface Description Language** used to describe the above classes in the specification
+ **nodeType** return a number represent a type of node 1 for element 3 for text 9 for document obeject
+ **innerHTML** reuturn contents of html as a string we are able to modify it
    + scripts don't work here so they rendered as texts
    + changing it refreshes the dom every time
+ **data** read text values for node's which are not a element like comment and text
+ **textContent** return text of an element all tags are removed
+ **hidden** this property to check a element is visible and set a element to hide same as 'display: none;'

## Attributes and Properties
+ DOM Properties are regular object properties we can do anything that can be done with object properties.
+ As for HTML attributes only the standard attriubutes are parsed and added to dom property, others are skipped.
+ we can use **attributes** property to get all properties
+ and modify the the attributes by attribute modifier methods
+ dom properties are synchronised so they will updated in HTML except value attribute for input element
+ they are typed
+ use **dataset** property for custom attribute elements

## Modifying the document
+ **document.createElement** we can create an element with its tagName
+ **Insertion** 
    + **elem.append** append an element to another element.
    + **prepend** add element to another elements child at 0 index
    + **after** add element after an element
    + **before** add element before an element
    + the above method handles string as string only like in textContent
    + so inder order to insert string as html use **insertAdjacentHTML**
        + 'beforebegin' same as before
        + 'afterend' same as after
        + 'after begin' same as prepend
        + 'beforeend' same as append
        + this method also has varients like **insertAdjacentText** and **insertAdjacentElement**
+ **Deletetion**
    + use **node.remove()** to remove an element from dom
    + if we are inserting an element in another place we don't need to remove browser will do it for us
+ **Cloning Nodes**
    + using **node.cloneNode(true)** we can make a deep copy of an element
    + if we pass false child elements are skipped
+ **DocumentFragment**
    + we can append list element to it when we append this element some where only the child element are appended
    + not used much
+ **Other Inser/Remove methods**
    + **appendChild** append an element to the last
    + **insertBefore** and an elemnt before an child element
    + **removeChild** removes the givent child
    + **replaceChild** replaces a child with another node
    + these are not prefered anymore

## Styles and Classes
+ we can add css style to an element using styles object or classes
    + prefer classes over styles
+ **classList** property is used to modify style attribute of an element
    + add/remove - add or remove a class name
    + toggle - add a class if it does not exist else insert
    + contains - check for class exist or not
    + classList is iterable, so we can use for...of
    + use cssText property to add multiple css styles but it will remove all existing styles
+ **getComputedStyle** use it to get computed styles for an property

## Size and Scroll
+ https://javascript.info/size-and-scroll#summary

## Window Sizes and Scrolling
+ use **clientHeight/Width** for document.documentElement(html) to get the complete height/width for window
    + don't use window.innerHeight/Width, because they don't consider scrollbar width
+ to get a completed height of the page including scrolled out content get maximum of **clientHeight** for document body and document.documentElement
+ to get the current scrollX use **window.pageXScroll** or **windiw.scrollX** both are the same.
+ for scrolling the page use **scrollBy** or **scrollTo**

## Coordinates
+ **clientX/clientY** show the length from the window
+ **pageX/pageY** shows the length from the document
+ use **getBoundingClientRect** for getting a elements coordinations (x, y, top, left, right, bottom)
+ use **elementFromPoint** to get an element at an exacat location