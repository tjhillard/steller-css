# steller-css ⛰️
A functional (aka "atomic" or "utility-first") CSS framework for creating design systems. Includes several built-in smart defaults for building responsive, accesible, and beautiful user interfaces.

* Configurable
* 12 column grid system built with CSS Grid
* Out-of-the-box responsive typography support
* Clear, predictable class syntax
* SASS based
* Only 12kb gzipped

## Installation

```
npm i steller-css
```

```
yarn add steller-css
```

## Usage

1. Create a `theme.scss` or `variables.scss`, or whatever name you prefer
2. Copy pasta the values in the [example config](https://github.com/tjhillard/steller-css/blob/master/src/example-theme.scss) 
3. Adjust the theme variables to your design system's needs. In your `index.scss` or equivilent
4. Import your newly created `theme.scss` at the top of your entry point sass file before any of your application imports

```scss
// Your index.scss / sass main file

@import 'steller-theme'; // Your config file
@import '~steller-css/index'; // Steller from node_modules
```

## Docs

## Responsive

For breakpoint specific stylings, add the breakpoint label prefix to the beginning of the class.

```html
<span class="font-size-lg md:font-size-xl">
	I'm bigger on the medium breakpoint and above
</span>
```

### Container
| Class | Properties |
| --- | --- |
| .container | margin: 0 auto; max-width: $container-width; position: relative; font-size: $font-size-md; |

### Grid

Codepen Example: https://codepen.io/tjhillard/pen/WmYEJG

| Class | Properties |
| --- | --- |
| .grid | display: grid; grid-template-columns: repeat($grid-columns, 1fr); |
| .col-{$breakpont}-{$span} | grid-column: span $span; |
| .row-{$breakpont}-{$span} | grid-row: span $span; |
| .col-start-{$breakpont}-{$span} | grid-column: $span / span $i; |

To configure, adjsut the variables in `breakpoints.scss` and `grid.scss` as needed.

### Typography

| Class | Properties |
| --- | --- |
| .font-size-{$size} | font-size: $size |
| .font-weight-{$weight} | font-size: $weight |
| .leading-{$leading} | line-height: $leading |
| .italic | font-style: italic; |
| .underline | text-decoration: underline; |
| .no-underline | text-decoration: none; |
| .lowercase | text-transform: lowercase; |
| .uppercase | text-transform: uppercase; |
| .capitalize | text-transform: captialize; |

### Color

| Class | Properties |
| --- | --- |
| .text-{$color} | color: $color |
| .bg-{$color} | background-color: $color |

### Spacing

| Class | Properties |
| --- | --- |
| .m-{$size} | margin: $size; |
| .p-{$size} | padding: $size; |
| .mx-{$size} | margin-left: $size; margin-right: $size; |
| .px-{$size} | padding-left: $size; padding-right: $size; |
| .my-{$size} | margin-top: $size; margin-bottom: $size; |
| .py-{$size} | padding-top: $size; padding-bottom: $size; |
| .mt-{$size} | margin-top: $size; |
| .pt-{$size} | padding-top: $size; |
| .mr-{$size} | margin-right: $size; |
| .pr-{$size} | padding-right: $size; |
| .mb-{$size} | margin-bottom: $size; |
| .pb-{$size} | padding-bottom: $size; |
| .ml-{$size} | margin-left: $size; |
| .pl-{$size} | padding-left: $size; |

## Flexbox / Sizing / Effects / Motion / Etc
>Documentation WIP

#### Want to learn more about functional/atomic/utility-frist CSS?

* [CSS and Scalability by Adam Morse](http://mrmrs.cc/writing/2016/03/24/scalable-css/)
* [Functional CSS at Scale: Clean & composable UI on a massive app](https://www.youtube.com/watch?v=uHVqbCPnOwU)
