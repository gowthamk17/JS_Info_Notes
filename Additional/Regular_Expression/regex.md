# Regular Expression

## Creation
+ using **Regex** class ```let regex = new Regex()```
+ using **/.../** literal ```let regex = /abcd/```

## Flags
+ there are flags we can create a regex with which indicates a beahvirous
+ **i** - case insensitive
+ **g** - find all matches, if g is not present the search will stop at first match
+ **m** - multi line mode
+ **s** - dotball mode enalbes to **.** to represent \n character
+ **u** - enalbles unicode
+ **y** - sticky mode searching in the exact position

## Searching
+ **str.match** search a sting with the given regex, returns the result as array if there is no match then null is returned
+ **str.replace** search a string and replace it with given string which matches the regex
+ **regexp.test** search for atleast one match returns true if found

## Chracter Classes
+ **\d** (digit) represents all numbers 0..9
+ **\s** (space) represents space character such as \t, \n, \f & \v
+ **\w** stands for words all letter and latin ones, numbers and underscore (non latin are not considered)

## Inverse Classes
+ match the characters except that character
+ **\D** any character except a digit
+ **\S** any character except a space
+ **\W** anythin except word character

## Dot Character
+ **.(dot)** character represents any character except new line
+ with **s** flag \n character also considered

## Unicode flag
+ add **u** flag to compute unicodes properly
+ unicode properties **\p{...}** represent a category of character like **L** represents all letters include non latin ones
+ with unicode property we can search for a specific language also

## Anchors
+ **^** for string start
+ **$** for string end
+ adding **m** changes anchors behaviour slightly 

## Word Boundary
+ **\b** is a special character just like anchors but represt a location with a non word character

## regex escape
+ **\\** is used to represent escape character for konwn charcters in regex like \, ^, (, ), etc,.
+ if we use new regex we should consider string \ behaviour and add \\ there

## Sets & Ranges
+ **[..]** searched for the any one of the character in the given list
+ ranges are slight different i checks for a range like [0-9] check for number 0...9 and [a-z] checks for letter a...z

## Excluding range
+ **[^...]** it represents anything except given range
+ escaping not needed here

## Quantifier
+ It represents the number of times for a character
+ \d{3} is the same as \d\d\d
+ \d{2,5} means 3 to 5 digit number
+ **+** shorthand means one or more times same as {1,} example \d+
+ **?** shorthand means zero or more times same as {0, 1}

## Capture Group
+ **(...)** is used to group symbols quantifier added after the bracket is consdered for the whole symbols in the bracket.
+ **\<name>** used for naming a capture group
+ backreference a capture group by \1 (first capture group) or it's name \k\<name>

## Alternation (OR)
+ **|** used for optional symbola (a|b) repreesnts a or b

## Lookahead
+ syntax: ```X(?=Y)``` means look for expression x only if it was followed by Y expression
+ syntax: ```X(?!Y)``` this expression means look for expression x only when expression y is not followed
+ Lookbehind the same but a little different syntax like ```(?=Y)X``` means look for expression x only when expression y is before it there also negative version ```(?!Y)X```

## Methods
+ **str.match(regexp)** search a regex in a string
+ **str.matchAll(regexp)** doesn't need g flag automatically searches, always return an iterable object
+ **str.split(regexp, limit)** splits a string with give expression
+ **str.search(regexp)** search for expression returns it's index if not found -1 returned
+ **str.replace(regexp|str, str|func)** replace string in string, only for first occurence
+ **str.replaceAll(regexp|str, str|func)** replace all the matches
+ **regexp.exec(str)** without g finds first match and returns with g for every call upate lastIndex property on the next call search start from there
+ **regexp.test(str)** check for regex match in str return true/false