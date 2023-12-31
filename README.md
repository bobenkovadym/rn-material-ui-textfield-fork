[example-url]: https://cloud.githubusercontent.com/assets/2055622/24325711/eaa4ff08-11af-11e7-8550-2504c1580979.gif
[original-url]: https://github.com/gabrieldonadel/rn-material-ui-textfield/
[rn-textinput]: https://facebook.github.io/react-native/docs/textinput.html#props
[md-textfield]: https://material.io/guidelines/components/text-fields.html

# rn-material-ui-textfield
### Fork from [original][original-url]

Material UI texfield with consistent behaviour on iOS and Android

![example][example-url]

## Features

- Material design [guidelines][md-textfield] compliance
- Consistent look and feel on iOS and Android
- Animated state transitions (normal, focused and errored)
- Customizable font size, colors and animation duration
- Disabled state (with dotted underline)
- Outlined and filled fields
- Masked input support
- Multiline text input
- Character counter
- Prefix and suffix
- Accessory views
- Helper text
- RTL support
- Pure javascript implementation

## Properties

| name                 | description                                 |      type | default                 |
| :------------------- | :------------------------------------------ | --------: | :---------------------- |
| textColor            | Text input color                            |    String | rgba(0, 0, 0, .87)      |
| fontSize             | Text input font size                        |    Number | 16                      |
| labelFontSize        | Text field label font size                  |    Number | 12                      |
| lineWidth            | Text field underline width                  |    Number | 0.5                     |
| activeLineWidth      | Text field active underline width           |    Number | 2                       |
| disabledLineWidth    | Text field disabled underline width         |    Number | 1                       |
| tintColor            | Text field accent color                     |    String | rgb(0, 145, 234)        |
| baseColor            | Text field base color                       |    String | rgba(0, 0, 0, .38)      |
| label                | Text field label text                       |    String | -                       |
| title                | Text field helper text                      |    String | -                       |
| prefix               | Text field prefix text                      |    String | -                       |
| suffix               | Text field suffix text                      |    String | -                       |
| error                | Text field error text                       |    String | -                       |
| errorColor           | Text field color for errored state          |    String | rgb(213, 0, 0)          |
| lineType             | Text field line type                        |    String | solid                   |
| disabledLineType     | Text field line type in disabled state      |    String | dotted                  |
| animationDuration    | Text field animation duration in ms         |    Number | 225                     |
| characterRestriction | Text field soft limit for character counter |    Number | -                       |
| disabled             | Text field availability                     |   Boolean | false                   |
| editable             | Text field text can be edited               |   Boolean | true                    |
| multiline            | Text filed multiline input                  |   Boolean | false                   |
| contentInset         | Layout configuration object                 |    Object | [{...}](#content-inset) |
| labelOffset          | Label position adjustment                   |    Object | [{...}](#label-offset)  |
| inputContainerStyle  | Style for input container view              |    Object | -                       |
| containerStyle       | Style for container view                    |    Object | -                       |
| labelTextStyle       | Style for label inner Text component        |    Object | -                       |
| titleTextStyle       | Style for title inner Text component        |    Object | -                       |
| affixTextStyle       | Style for affix inner Text component        |    Object | -                       |
| formatText           | Input mask callback                         |  Function | -                       |
| renderLeftAccessory  | Render left input accessory view            |  Function | -                       |
| renderRightAccessory | Render right input accessory view           |  Function | -                       |
| onChangeText         | Change text callback                        |  Function | -                       |
| onFocus              | Focus callback                              |  Function | -                       |
| onBlur               | Blur callback                               |  Function | -                       |
| inputRef             | TextInput ref                               | RefObject | -                       |

Other [TextInput][rn-textinput] properties will also work.

### Content Inset

| name  | description                       | Normal | Filled | Outlined |
| :---- | :-------------------------------- | -----: | -----: | -------: |
| top   | Inset on the top side             |     16 |      8 |        0 |
| left  | Inset on the left side            |      0 |     12 |       12 |
| right | Inset on the right side           |      0 |     12 |       12 |
| label | Space between label and TextInput |      4 |      4 |        4 |
| input | Space between line and TextInput  |      8 |      8 |       16 |

### Label Offset

| name | description                          | Normal | Filled | Outlined |
| :--- | :----------------------------------- | -----: | -----: | -------: |
| x0   | Horizontal offset for inactive state |      0 |      0 |        0 |
| y0   | Vertical offset for inactive state   |      0 |    -10 |        0 |
| x1   | Horizontal offset for active state   |      0 |      0 |        0 |
| y1   | Vertical offset for active state     |      0 |     -2 |      -10 |

## Methods

| name                   | description                   | returns |
| :--------------------- | :---------------------------- | ------: |
| focus()                | Acquire focus                 |       - |
| blur()                 | Release focus                 |       - |
| clear()                | Clear text field              |       - |
| value()                | Get current value             |  String |
| isFocused()            | Get current focus state       | Boolean |
| isErrored()            | Get current error state       | Boolean |
| isRestricted()         | Get current restriction state | Boolean |
| isDefaultVisible()     | Get default value visibility  | Boolean |
| isPlaceholderVisible() | Get placeholder visibility    | Boolean |
| setValue()             | Set current value             |       - |
