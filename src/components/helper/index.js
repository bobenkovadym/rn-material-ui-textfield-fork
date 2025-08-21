import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Animated } from 'react-native'
import { TextPropTypes } from 'deprecated-react-native-prop-types'

import styles from './styles'

export default class Helper extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    style: TextPropTypes.style,
    baseColor: PropTypes.string,
    errorColor: PropTypes.string,
    focusAnimation: PropTypes.instanceOf(Animated.Value),
  }

  constructor(props) {
    super(props)

    const { error, focusAnimation, title } = this.props

    const opacityFromFocus = focusAnimation.interpolate({
      inputRange: [-1, -0.5, 0],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    })

    this.localOpacity = new Animated.Value(1)

    this.animationValue = 0
    this._isMounted = false

    this.state = {
      errored: !!error,
      opacityFromFocus,
      currentText: !!error ? error : title,
    }
  }

  componentDidMount() {
    const { focusAnimation } = this.props
    this._isMounted = true
    this.listener = focusAnimation.addListener(this.onAnimation)
  }

  componentWillUnmount() {
    const { focusAnimation } = this.props
    this._isMounted = false
    focusAnimation.removeListener(this.listener)
    this._fade && this._fade.stop && this._fade.stop()
  }

  onAnimation = ({ value }) => {
    if (this.animationValue > -0.5 && value <= -0.5) {
      this.setState({
        errored: true,
        currentText: this.props.error,
      })
    }

    if (this.animationValue < -0.5 && value >= -0.5) {
      this.setState({
        errored: false,
        currentText: this.props.title,
      })
    }

    this.animationValue = value
  }

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error || prevProps.title !== this.props.title) {
      const { errored, currentText } = this.state
      const desiredText = errored ? this.props.error : this.props.title

      if (desiredText === currentText) return

      const nearSwap = Math.abs((this.animationValue ?? 0) + 0.5) < 0.02

      if (nearSwap) {
        this.setState({ currentText: desiredText })
        return
      }

      this._fade && this._fade.stop()
      this._fade = Animated.sequence([
        Animated.timing(this.localOpacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(this.localOpacity, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ])

      this._fade.start(() => {
        this.setState({ currentText: desiredText })
      })
    }
  }

  render() {
    let { errored, opacityFromFocus, currentText } = this.state
    let { style, disabled, baseColor, errorColor } = this.props

    let textStyle = {
      opacity: opacityFromFocus,

      color: !disabled && errored ? errorColor : baseColor,
    }

    return <Animated.Text style={[styles.text, style, textStyle]}>{currentText}</Animated.Text>
  }
}
