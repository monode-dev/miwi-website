# Size Grows

Expands to fill all available space on this axis. If there is padding or fixed size elements on this axis then they will get given space first then size grow elements will divvy up whatever is left.

```tsx
<Column widthGrows />
```

You can alternately supply a flex num to control how available space is split up between size grow elements.

```tsx
<Row>
  <Box widthGrows /* Default is 1*/ />
  <Box widthGrows={3} />
  <Box widthGrows={5} />
</Row>
```

**Note:** A child having size grows will override its parent having size shrinks.

```tsx
/* This <Row /> will behave like it has widthGrows
 * because one of its children does. */
<Row>
  <Box width={3} />
  <Box widthGrows />
</Row>
```
