---
outline: deep
---

# Body

The Body component is a wrapper component that uses the Column component with some predefined properties. It takes all the properties of the BoxProps type, which includes properties for layout, interaction, decoration, size, and text.

## 1.Import Body

First, you need to import the **componentNameHere** component from Miwi.

```ts
import { Body } from "miwi";
```

## 2.Use Body

Here's a basic usage example:

```ts
import { Body } from "miwi";

function MyComponent() {
  return (
    <Body>
      <p>This is a child component inside Body.</p>
    </Body>
  );
}
```
In this example, MyComponent is a functional component that uses the Body component from "miwi". The Body component wraps a paragraph element.

  
## 3. Interact with Body

The Body component has several predefined properties:

> * widthGrows and heightGrows: These properties make the component grow to fill its container in the width and height dimensions, respectively.
> * alignTopCenter: This property aligns the component's content to the top center.
preventClickPropagation: This property prevents click events from propagating up the component tree.
> * stroke: This property sets the color of the text. It's set to $theme.colors text, which is a color defined in the theme.
> * scale: This property sets the scale of the component. It's set to 1, which means the component is at its normal size.
> * pad: This property sets the padding of the component. It's set to 1.
> * overflowY and overflowX: These properties control how the component should behave when its content overflows in the vertical (Y) and horizontal (X) dimensions. They're set to $Overflow.scroll and $Overflow.crop, respectively, which means the content will scroll when it overflows vertically and will be cropped when it overflows horizontally.
> * overrideProps: This property allows you to override the predefined properties. It's set to props, which means you can pass in your own properties when you use the Body component.

<br>

You can override these properties by passing them as props to the Body component. For example:

```ts
import { Body } from "miwi";

function MyComponent(props: BoxProps) {
  return (
    <Body scale={2} pad={2}>
      <p>This is a child component inside Body.</p>
    </Body>
  );
}
```

In this example, the Body component will have a scale of 2 and a padding of 2, overriding the predefined scale and padding.

<!-- Final note and references -->
