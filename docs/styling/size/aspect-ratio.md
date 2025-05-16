# Aspect Ratio Sizing

Miwi supports aspect ratio based sizing like

```tsx
/* Whatever this width of this box ends up
 * being, the height will 2 / 3 of that. */
<Box widthGrows heightFromAspectRatio={3 / 2} fill={`red`} />
```

**Note:** Yeah the aspect ratio number is sometimes backwards right now. In future we'll change the aspect ratio to use the more intuitive fraction.
