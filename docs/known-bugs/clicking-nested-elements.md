# Known Bugs

There are some bugs we know about that for one reason or another haven't been fixed yet.

## Size doesn't do what it's suppose to

If you configure sizing, but the component is not sizing itself correctly this might be due to the fact that sometimes css requires min size to be set to zero. I've tried to catch all the places where this is expected and automatically assign min size to zero, but I may have missed some. If you try setting `<Box minSize={"0px"} />` and it fixes the issue, then let me know and I'll update the sizing code to make the bug go away in future.

## Clicking html elements nested in Miwi components doesn't work in some cases

If you're unable to click/interact with HTML media elements _(like &lt;img /&gt;)_ that are children of Miwi components. Then it may be because Miwi often sets pointer-events to false, to prevent unwanted clicks on children. To work around this do:

```ts
<img style="pointer-events: auto;">
```

_(&lt;Page /&gt; does not seem affected, don't know why)_
