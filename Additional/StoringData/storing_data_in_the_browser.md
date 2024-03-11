# Storing Data in the Browser
## Cookies, document.cookie
+ when a browser loads a site if the site sends a SET-COOKIE header with a string it automatically added to the browser cookie
+ so next time a second call is initiated this cookie is send automatically
+ **document.cookie** to visit all the cookie element for the page
    + this is a getter/setting for cookie
    + only one value can be set at a time
    + string value more than 4kb cannot be saved
    + it's not possible to share a cookie between sites
    + possibe to share between domain and subdomain but disabled by default
    + for accessing cookie in subdomain set 'domain=site.com' value in cookie
    + by setting 'path=/' cookie we can share it with all the paths of this site
    + if a cookie doesn't have expire/max-age attribute it will disappear when window is closed
    + by setting max-age we can decide when the cookie will be deleted
    + if we set "secure" flag the cookie will not be share with http protocal
    + httpOnly when it's enabled document.cookie is not visible
## LocalStorage
+ able to store much more data 5mb
+ but cannot be shareable with other paths or subdomains
+ and cannot get from http request only via javascript
+ it has object like structure
+ methods are close to same as Map object
+ **setItem** create an entry
+ **getItem** get an entery
+ **removeItem** remove form localStorage
+ **key(i)** access key by index
+ **length** get number of entries
+ can use for...in keys to get entries, or loop over like array
+ key and value both must be string
## SessionStorage
+ basical all the same as localstorage
+ but it won't servive tab close
## IndexedDB
+ much more capable than the others
+ focused on offline apps and work with serviceWorkers
+ information is stored in table like structure caled ObjectStore
