# Fixed Size

Miwi's numerical sizing is based off of `rem` a.k.a the preferred font size of the current device.

```tsx
<Row width={3.5} height={12} />
```

One `mu` (Miwi Unit) isn't always `1 rem`. You can specify the ratio of `mu` to `rem` when setting the theme in your main JavaScript file.

```ts
setTheme({
  // I don't think we have muToRem quite figured
  // out, details might change in the future.
  muToRem: 1.125,
  // Other settings...
});
```

_(Since pixel density varies wildly between different screens we've found `rem` to be much more consistently look correct than `px`. This also has the added benefit that if an end user wants a bigger font size the Miwi UI easily adapts for them.)_
