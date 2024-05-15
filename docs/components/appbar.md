---
outline: deep
---

# AppBar

The AppBar component is a versatile navigation bar that can be customized with various elements

## 1. Here's how to use it:

First, you need to import the **AppBar** component from its file.

```ts
import { AppBar } from "miwi";
```

## 2. Use AppBar

<!-- example with code -->

The AppBar component accepts several props that allow you to customize its behavior and appearance.

```ts
<AppBar
  left={/* JSX.Element */}
  right={/* JSX.Element */}
  bottom={/* JSX.Element */}
  shouldShowBackArrowWhenApplicable={/* boolean */}
  /* BoxProps */
>
  {/* children */}
</AppBar>
```

Here's what each prop does:

- left: This prop accepts a JSX element that will be displayed on the left side of the AppBar.
- right: This prop accepts a JSX element that will be displayed on the right side of the AppBar.
- bottom: This prop accepts a JSX element that will be displayed at the bottom of the AppBar.
- shouldShowBackArrowWhenApplicable: This boolean prop determines whether a back arrow should be displayed when applicable. If it's true and there's more than one page in the navigation stack, a back arrow will be displayed on the left side of the AppBar. If a left prop is provided, the back arrow will not be displayed regardless of this prop's value.
- BoxProps: These are props from the Box component that allow you to customize the appearance of the AppBar. You can set properties like fill, zIndex, shadowSize, shadowDirection, stroke, and others.
- children: These are the JSX elements that will be displayed in the center of the AppBar.

## 3. Interact with the AppBar

The AppBar interacts with the navigation stack through the useNav hook from src/Nav.tsx. If shouldShowBackArrowWhenApplicable is true and there's more than one page in the navigation stack, clicking the back arrow will pop the top page from the stack.

<!-- Other example with code -->

Here's an example of how to use the AppBar component:

```ts
import { AppBar } from "miwi";
import { Icon } from "./Icon";
import { mdiMenu, mdiBell } from "@materialDesignIconLibrary";

function MyComponent() {
  return (
    <AppBar
      left={<Icon iconPath={mdiMenu} />}
      right={<Icon iconPath={mdiBell} />}
      shouldShowBackArrowWhenApplicable={true}
      fill="blue"
      zIndex={1}
    >
      My App
    </AppBar>
  );
}
```

In this example, the AppBar has a menu icon on the left, a bell icon on the right, a back arrow when applicable, a blue background, and a z-index of 1. The title in the center of the AppBar is "My App".

<!-- Example notes -->

---

The AppBar component in accepts BoxProps as part of its props that includes style-related properties. You can pass in any properties that BoxProps accepts to customize the styling of the AppBar. For example, you might be able to change the fill color, shadow size, alignment, stroke color, and more.

<!-- Extra example with code -->

```ts
<AppBar fill="red" shadowSize={2} alignBottomCenter stroke="blue" />
```

<!-- Final note -->

This would change the fill color to red, the shadow size to 2, align the content to the bottom center, and change the stroke color to blue.

For more specific styling options, you would need to look at the definition of BoxProps
