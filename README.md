# steller-css
A functional CSS framework for creating design systems

* 12 column grid system built with CSS Grid
* Out-of-the-box responsive typography support
* Clear, predictable class syntax
* Only 12kb gzipped

>⚠️ PSA: This project is a work in progress and isn't built for configurability at the moment.

## Usage

I made this repository mainly for myself, for quickly creating a composable css framework for my projects' design systems. If you are interested in giving this a spin, I would just clone the project, and copy pasta the files in `src/packages` into your projects assets directory then import them into your `index.scss` or equivilent. Check `src/index.scss` to view necessary import order.

This method will allow you to configure the variables to your projects needs and integrate in your asset pipeline. If you're interested in a similar package that offers simpler configurability, check out [TailwindCSS](https://tailwindcss.com).

## Docs

## Responsive

For breakpoint specific stylings, add the breakpoint label prefix to the beginning of the class.

```html
<span class="sm:font-size-lg md:font-size-xl">
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

```scss
$spacing-sizes: (
  (4px, 'xs'),
  (8px, 'sm'),
  (16px, 'md'),
  (24px, 'lg'),
  (32px, 'xl'),
  (48px, "2xl"),
  (64px, "3xl"),
);
```

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
Check the appropriate files within `src/packages` to view the basic atomic utility classes.

#### Want to learn more about functional/atomic/utility-frist CSS?

* [CSS and Scalability by Adam Morse](http://mrmrs.cc/writing/2016/03/24/scalable-css/)
* [Functional CSS at Scale: Clean & composable UI on a massive app](https://www.youtube.com/watch?v=uHVqbCPnOwU)
