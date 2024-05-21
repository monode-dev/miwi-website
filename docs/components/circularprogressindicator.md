---
outline: deep
---

# Circular Progress Indicator

The CircularProgressIndicator is a component that displays a circular loading indicator. It's useful for showing the progress of a task or that something is loading.

## 1. Import Circular Progress Indicator

First, you need to import the **Circular Progress Indicator** component from Miwi.

```ts
import { CircularProgressIndicator } from "miwi";
```

## 2. Use Circular Progress Indicator

You can use the CircularProgressIndicator component in your JSX code. Here's a basic example:
```ts
<CircularProgressIndicator />
```
This will render a default Circular Progress Indicator.

<br>

You can also customize the CircularProgressIndicator by passing props to it. Here's an example where we specify the diameter, thickness, and color:

```ts
<CircularProgressIndicator diameter={50} thickness={5} color="red" />
```

In this example, the diameter of the circular progress indicator is set to 50, the thickness of the circle is set to 5, and the color is set to red.

## Note
The diameter and thickness props can accept either a number (representing pixels) or a string (representing a CSS value). The color prop accepts a string representing a CSS color.

```ts
<CircularProgressIndicator diameter="5em" thickness="0.5em" color="blue" />
```

In this example, the diameter is set to 5em, the thickness is set to 0.5em, and the color is set to blue.


## The CircularProgressIndicator default styling is:

**diameter**: The default value is **4**. This property determines the diameter of the circular progress indicator.

**thickness**: The default value is **diameter / 8** if **diameter** is a number, otherwise it's the same as diameter. This property determines the thickness of the circular progress indicator.

**color**: The default value is strokeTexture (which can be seth in Miwi's Theme). This property determines the color of the circular progress indicator.
