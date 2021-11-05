### CSS @import rule

-- allows you to import a style sheet into another style sheet
-- must be at the top of the document (acter @charset declaration)
-- in HTML <head> or CSS
-- supports media queries

  ```
  @import "navigation.css"; /* Using a string */

  @import url("navigation.css"); /* Using a url */
  ```

### Google font API for CSS

[CSS API update](https://developers.google.com/fonts/docs/css2)

[Optimizing for latency and file size
](https://developers.google.com/fonts/docs/css2#optimizing_for_latency_and_file_size)

-- the `font-display` property lets you control what happens while the font is still loading or otherwise unavailable
-- specifying a value other than the default auto is usually appropriate

`https://fonts.googleapis.com/css2?family=Crimson+Pro&display=swap`




### CSS box-sizing

-- by default, the width and height you assign to an element is applied only to the element's content box

--  when you set width and height, you have to adjust the value you give to allow for any border or padding that may be added

-- box-sizing is used to adjust this behaviour

_content-box_
    element: 100px
    border: 4px
    padding: 6px

    final render: 110ox 

  the width of any border or padding will be added to the final rendered width, making the element wider than 100px

-- used with `position: relative` or `position: absolute`
-- allows positioning values to be relative to the content, independent of changes to border and padding sizes


_border-box_

    element: 100px
    border: 4px
    padding: 6px

    final render: 100px

  that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width

-- often used for layout elements

___

**CSS box-size: inherit**
-- inherits this property from its parent element

**px to %** 

[Converter](https://nekocalc.com/px-to-percentage-converter)

**CSS gradient**

[Generator](https://cssgradient.io/)

**CSS backgrop-filter**
-- lets you apply graphical effects such as blurring or color shifting to the area behind an element

```
    backdrop-filter: blur(2px);
    backdrop-filter: brightness(60%);
    backdrop-filter: contrast(40%);
    backdrop-filter: drop-shadow(4px 4px 10px blue);
    backdrop-filter: grayscale(30%);
    backdrop-filter: hue-rotate(120deg);
    backdrop-filter: invert(70%);
    backdrop-filter: opacity(20%);
    backdrop-filter: sepia(90%);
    backdrop-filter: saturate(80%);
```

**CSS filter**

-- applies graphical effects like blur or color shift to an element. -- used to adjust the rendering of images, backgrounds, borders


```
  /* URL to SVG filter */
  filter: url("filters.svg#filter-id");

  /* <filter-function> values */
  filter: blur(5px);
  filter: brightness(0.4);
  filter: contrast(200%);
  filter: drop-shadow(16px 16px 20px blue);
  filter: grayscale(50%);
  filter: hue-rotate(90deg);
  filter: invert(75%);
  filter: opacity(25%);
  filter: saturate(30%);
  filter: sepia(60%);

  /* Multiple filters */
  filter: contrast(175%) brightness(3%);

  /* Use no filter */
  filter: none;

  /* Global values */
  filter: inherit;
  filter: initial;
  filter: revert;
  filter: unset;

```

**transform**
**transition**
**cursor**

**display: block/inline/inline-block**

**selectors ::**

`:active` selects the active link
`:focus`  selects the input element which has focus