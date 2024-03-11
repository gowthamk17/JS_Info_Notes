# Document and Resource Loading

**DOMContentLoaded** event trigger when html is parsed and dom created external resources are not yet loaded

**window.onload** event is triggered when document is completely loaded including external styles, scripts and images.

**window.onunload** do an action before tab closes like sending analytics

**window.onbeforeunload** asks user for confirmation befoer closing tab

**document.readyState** for getting current the page loading status

## Scripts: async & defer
+ **defer** keyword enables a script to load after the dom loading and keeps it from blocking the loading, the script order is kept so the first script alwasy loads faster
+ **async** keyword does the same, but the script that loads first runs first
+ **dynamicScripts** which we create script element and append to head it's async by default, if we want it to behave like defer set script.async to false
+ **onload** we can trigger a hadler after an async function is loaded
+ **onerror** if the loading functions has an error it will hanlded here
+ the above to events work for any node with src property
