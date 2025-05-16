# Sizing

Miwi has the following properties to control sizing.

- **minWidth:** MuNum or CssString
- **width:** MuNum or CssString - Default width usually is widthShrinks
  - **widthShrinks:** boolean
  - **widthGrows:** boolean or FlexNum
  - **widthFromAspectRatio:** number or CssString - Base width off of the height
  - **$asWideAsParent:** boolean - Recklessly sets `width: 100%`
    - _(Usually it's best to use `widthGrows` instead)_
- **maxWidth:** MuNum or CssString
- **minHeight:** MuNum or CssString
- **height:** MuNum or CssString - Default height usually is heightShrinks
  - **heightShrinks:** boolean
  - **heightGrows:** boolean or FlexNum
  - **heightFromAspectRatio:** number or CssString - Base height off of the width
  - **$asTallAsParent:** boolean - Recklessly sets `height: 100%`
    - _(Usually it's best to use `heightGrows` instead)_
- **maxHeight:** MuNum or CssString
- **$isFlexDisplay:** boolean - Recklessly toggles `display: flex`

_(Width and height can also be set to SIZE_SHRINKS, grow(3), or aspectRatioSize(1 / 2), but usually its best to use widthGrows, widthShrinks, etc.. instead of directly setting width or height to these values.)_
