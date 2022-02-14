# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learnt](#what-i-learnt)

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![Screenshot of website](images/screenshot.png)

### Links

- Solution URL: [https://github.com/Brandon-Gui123/order-summary-component-with-tailwind-css](https://github.com/Brandon-Gui123/order-summary-component-with-tailwind-css)
- Live Site URL: [https://brandon-gui123.github.io/order-summary-component-with-tailwind-css/](https://brandon-gui123.github.io/order-summary-component-with-tailwind-css/)

## My process

### Built with

- Semantic HTML5 markup
- [Tailwind CSS](https://tailwindcss.com/)

### What I Learnt

It is possible to control the opacity of an element's background colour by [adding the colour opacity modifier](https://tailwindcss.com/docs/background-color#changing-the-opacity).

This is possible by placing a forward slash after the utility class, followed by a number.

For example:

```html
<div class="bg-red-600/20"></div>
```

The code above will give a red colour with opacity of 20%.

I used this feature mainly to colour the drop shadows of the order summary component and the "Proceed to Payment" button such that it matches with what the design shows.

I decided to do this because I have not found a way to individually state the offsets, blur, spread and colour with utility classes (unlike with margin, which you can with utility classes like `mx-*`, `my-*`, `mt-*` etc.). Adding some opacity is good enough to make the shadow look like it is blurred.

I could use arbitrary values like what they described [here](https://tailwindcss.com/docs/box-shadow#arbitrary-values) but I wasn't thinking much about those so I didn't use them.
