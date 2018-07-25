# bulaga


### About

_Bulaga_ is an open-source javascript library using jQuery that shows a content with effect when the page is scrolled. Bulaga is the Filipino version of Peek-a-boo!


### Prerequisite

1. jQuery

### How to use

Using a normal DOM selector in jQuery, call the bulaga() function.

```javascript
$(selector).bulaga(options);
```

You may also add some options depending on your preferences. _options_ is in JSON format. If you want to set the duration of your animation, you can do...

```javascript
$(selector).bulaga({"duration": 2000});
```

### Options
| Key | Description | Type | Values | Default |
|-----|-------------|------|--------|---------|
|animation|Sets the type of animation you want for the element|`String`|`FADE_IN` `SLIDE_LEFT` `SLIDE_RIGHT` `SLIDE_UP` `SLIDE_DOWN`|`FADE_IN`|
|duration|The duration of animation in milliseconds you want for the element.|`Integer`||500|
|position|The percentage of your screen you want your element to show relatively to the original position of your element. Basically, the higher the number, the sooner the element will show.|`Integer`|0-1|.25|
|bounce|Option for a bounce effect.|`Boolean`|`true` `false`|`false`|
|distance|The starting distance from the original position.|`Integer`||100|
|base|The css attribute to be used for animation. This can only be used if the element's position is absolute or fixed. If false, the css attribute to be used depends on the direction of your slide animation.|`String`|`top` `bottom` `left` `right`|`false`|
|repeat|The animation will repeat if scrolled again.|`Boolean`|`true` `false`|`false`|
|callback|Things you want to do after the animation has ended.|`Function`||`false`|

### Examples

```javascript
$("#sample1").bulaga({"animation": "FADE_IN", "repeat": true});
$("#sample2").bulaga({"animation": "SLIDE_LEFT", "repeat": true});
$("#sample3").bulaga({"animation": "SLIDE_RIGHT", "bounce": true, "repeat": true});
$("#sample4").bulaga({"animation": "SLIDE_UP", "duration": 2000, "bounce": true, "repeat": true});
$("#sample5").bulaga({"animation": "SLIDE_DOWN", "duration": 2000, "bounce": true, "repeat": true, "callback": function() { alert("Animation Done!"); }});
```

For live demos, open index.html.