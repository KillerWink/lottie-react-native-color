# lottie-react-native-color
Color changer for lottie react native

<strong>lottie-react-native-color</strong> is a utility that allows you change the color of a react native lottie file to any #hex value you pass to it.

This version will only allow one color to be changed across the .json file, This utility will <strong>not</strong> change the following -> <strong>transparency / white / black.</strong> This is by design and and further functionality to control this behaviour will be introduced.

# How to install

<code>
  npm i @killerwink/lottie-react-native-color
</code>

# How to use

Import the utility into your file.

```javascript
  import changeSVGColor from '@killerwink/lottie-react-native-color';
```


Invoke the function with 2 parameters


<ul>
  <li><strong>SVG</strong> the path to the .json file</li>
  <li><strong>color</strong> #hex represntation of the color</li>
</ul>

```javascript
  changeSVGColor(require('./assets/lottie.json'), '#0081CF');
```

# Example Code

```javascript
import React from 'react';
import LottieView from "lottie-react-native";
import changeSVGColor from '@killerwink/lottie-react-native-color';

export const Animation = () => {

    return (
        <LottieView
            ref={ani => {
                this.ani = ani;
            }}
            source={changeSVGColor(require('./assets/lottie.json'), '#0081CF')}
        />
    );
};
```
