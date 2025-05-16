# Size Shrinks

Setting size shrink will attempt to make the element as small as possible on this axis, while still respecting padding, and any fixed size or size grows children.

```tsx
<Row widthShrinks />
```

For most components size shrinks is the default size for both width and height.

**Note:** A child having size grows will override its parent having size shrinks.

```tsx
/* This <Row /> will behave like it has widthGrows
 * because one of its children does. */
<Row>
  <Box width={3} />
  <Box widthGrows />
</Row>
```
