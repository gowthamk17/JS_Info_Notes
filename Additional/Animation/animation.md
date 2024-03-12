# Animation

## Bezier Curve
+ a bezier curve can have 2,3,4 control points
+ by De Casteljau’s algorithm we can determine if the two curves are interwined
more on: https://javascript.info/bezier-curve#summary

## CSS Animation
+ there four property to describe css animation
    + transition-property - list of propert to animation use all for all the properties
    + transition-duration - how long the animation should be either s or ms
    + transition-timing-function - the animation speed overall time accepst bezier curve
    + transition-delay - how long the trasition will be delayed
+ after css animation ended transitioned event is triggered
+ we can join multiple css animation using @keyframes

## JS-Animations
+ **setInterval** using this interval method we can change property and make it look like mooving
+ use **requestAnimationFrame** to avoid overloading cpu and more performent animation
+ For more about animation timing function visit here: https://javascript.info/js-animation#structured-animation
