# Using Vue 3 & Tailwind CSS with less of a learning curve

#### This sample app is using vanilla Vue 3. The point of this is to prove that Tailwind CSS can be used just like regular CSS. Only difference is that "@apply" and the Tailwind class names are used.

## Example

### Instead of using:
```
h1 {
  color: blue;
}
```

### You will be using:
```
h1 {
  @apply text-blue-500;
}
```
##

#### Included is everything needed to make Tailwind CSS work.

#### If you are using VS Code, then you need to have Vetur installed and setup. Open settings.json in VS Code and make sure this is included:
```
"tailwindCSS.includeLanguages": {
        "vue": "css",
        "vue-html": "css"
},
```

#### If you want to use Tailwind CSS in any future Vue 3 projects I would recommend that you set it up the same exact way each time and you can use this sample app for reference.

#### Have fun and happy coding!
