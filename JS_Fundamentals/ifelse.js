const condition = 1 > 0 || undefined == null

if (condition) {
    console.log('Condition is truthy')
} else {
    console.log('Condition is falsy')
}

const accessAllowed = condition ? true : false