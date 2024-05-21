---
outline: deep
---

# Button

The Button component is a customizable button that accepts several props to adjust its appearance.

## 1.Import Button

First, you need to import the **Button** component from Miwi.

```ts
import { Button } from "miwi";
```

## 2.Use Button

<!-- Example with code  -->

```ts
import { Button } from "./Button";

function MyComponent() {

  return (
    <Body>
      <Button
        round={false} // Makes the button round. Default is false.
        pill={true} // Makes the button pill-shaped. Default is false.
        raised={true} // Gives the button a shadow, making it appear raised. Default is false.
        outlined={true} // Gives the button an outline. Default is false.
      >
        Click me
      </Button>
    </Body>
  );
}
```

Here's a breakdown of the props:

> * round: If true, the button will be round.
> * pill: If true, the button will be pill-shaped.
> * raised: If true, the button will have a shadow, making it appear raised.
> * outlined: If true, the button will have an outline.

The Button component also accepts all props from BoxProps, allowing you to further customize its appearance.

### Note

When both *round* and *pill* are set to **true**, the button will appear as an ellipse. To ensure proper rendering, set one of these properties to false or omit the irrelevant property to use the default settings. By default, all properties are set to **false**.