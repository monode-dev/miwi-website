---
outline: deep
---

# Column

The Column component is a wrapper component arranging its children components verically.

## 1. Import componentNameHere

First, you need to import the **Column** component from Miwi.

```ts
import { Column } from "miwi";
```

## 2. Use Column

You can use the Column component to arrange child components vertically. Here's a basic example:

```ts
<Column>
  <ChildComponent1 />
  <ChildComponent2 />
  <ChildComponent3 />
</Column>
```

In this example, ChildComponent1, ChildComponent2, and ChildComponent3 will be arranged in a column layout.

<br>

The Column component uses the BoxProps type, so it accepts all the properties that a Box component does. Here's an example of using some of these properties:

```ts
<Column column overrideProps={props}>
  <ChildComponent />
</Column>
```

## Column default props:

The Column component doesn't have any default styling or props. It simply passes all received props to the underlying Box component.