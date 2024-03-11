# Introduction to Events

**Event** every dom element generates event like click, mouseover, contextmenu etc.,
**Handler** Js function which triggered when event is called
    + **this** inside handler points to the element Object
    + don't use setAttribute for handler it won't work

**addEventListener** - this method used to add an handler to an event

**EventObject** - an event object contains all the details regarding a event and passed as first argument for handlers

we can send object to addEventListener in that case handleEvent method inside the object in called (obj.handleEvent())

## Bubbling and Capturing
+ **Bubbling** almost all event are triggered for the element for the evet triggered nested element to its parent till the top level.
+ **event.target** this is the element the event actually triggered on, for all the bubbling event process this variable won't change. (here this points the element which the hanler assigned too)
+ to stop bubbling use **event.stopPropagation()**
    + to stop propgation for current element included use **event.stopImmediatePropagation()**
+ **Capturing** it's the opposite of bubbling, when enabled handlers are triggered in first capturing event, that is when we try to find the element

## Browser default action
+ to stop browser default action for an event as mentioned earlier use event.stopPropagation()

**CustomEvents**
+ we can create custom event with Event class
``` let event = new Event('my-event'[, options{bubble: false, cancellable: false}])```
+ we can also set properties like bubble and cancellable in second arugment
+ then we can call **dispatchEvent** on the element to trigger element
+ **event.isTrusted** if an event is script created this property will be false
+ there's also **CustomEvent** which is the same as Event but has extra parameter a detail object
+ event calls within event are synchronous
