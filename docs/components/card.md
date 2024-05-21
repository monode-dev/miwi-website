---
outline: deep
---

# Card

<!-- Component description -->

## 1.Import Card

First, you need to import the **Card** component from Miwi.

```ts
import { Card } from "miwi";
```

## 2.Use componentNameHere

You can use the Card component to wrap other components or content. Here's an example:

```ts
<Card>
  <Text>Content inside the card</Text>
</Card>
```

In this example, the Card component is used to contain a Text component.
<br><br>

You can also pass in BoxProps to the Card component to customize its appearance:

```ts
<Card
  fill={$theme.colors.accent}
  cornerRadius={0.5}
  shadowSize={1.5}
  shadowDirection={$Align.bottomRight}
  alignCenter
  stroke={$theme.colors.text}
  scale={1}
  pad={1}
>
  <Text>Content inside the card</Text>
</Card>
```

In this example, various properties are set to customize the Card's appearance. The fill property sets the background color, cornerRadius sets the roundness of the corners, shadowSize and shadowDirection control the shadow, alignCenter centers the content, stroke sets the text color (any child componet can modify its own stroke color), scale sets the text size, and pad sets the padding.
<br><br>

Finally, you can also pass in children to the Card component:

```ts
<Card {...props}>{props.children}</Card>
```

In this example, the children of the Card component are rendered inside the Card. This is useful when you want to dynamically populate the Card with content.
