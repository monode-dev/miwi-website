# Clicking Nested Elements

Unable to click/interact with HTML media elements inside Miwi components.
Miwi often sets pointer-events to false, preventing clicks on children.
&lt;Page&gt; does not seem affected.

Workaround:
```ts
<nestedElement style="pointer-events: auto;">
```
