# ScrollTrigger
SrollTrigger is a piece of code using jquery to determine a point in the page which when it arrives trigger anything which you want

## Dependencies
- Jquery

## Usage
```
const config = {
  start: '<selector-start>',
  end: '<selector-end>',
  respire: <pixel-without-px>, // 100 = 100px
};

triggerElement(
  config,
  () => console.log('Trigger'),
  () => $box.removeClass('Trigger exception'),
);
```

When you specify just START the function is invoked when arriving in this div and will be always execute in this div to down.

```
const config = {
  start: '#start',
};
```

When you specify START and END the first function it will be fired between of this two DIVS and the second function (exception) is invoked outside of this divs.
```
const config = {
  start: '#start',
  end: '#end',
}
```

Respire: is the anticipation to invoke the first function of parameters. This is invoked 100px before
```
const config = {
  start: '#start',
  end: '#end',
  respire: 100,
}
```
