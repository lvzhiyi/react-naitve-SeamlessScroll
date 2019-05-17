import React, { PureComponent } from 'react'
import {
    Animated,
    Easing,
} from 'react-native';


export default class SeamlessScroll extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            newChildren: this.props.children
        }
        this.animation = new Animated.Value(0),
        this.direction = this.props.direction === 'vertical' ? 'height' : 'width';
        this.transationValue = this.props.styles[this.direction];
        this.key = 0;
        this.arr = [];
    }
    startAnimation(){
        const meter = this.props.meter || 0;
        Animated.timing(this.animation, {
            toValue: -this.transationValue + meter,
            duration: this.props.scrolltime || 5000, 
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            this.animation = new Animated.Value(0);
            this.initPosition();
            this.startAnimation();
        });
    }

    initPosition(){
        this.key++;
        if(this.key < 2){
            React.Children.forEach(this.props.children, (child, index) => {
                let props = {
                    key: `${this.key}${index}`,
                    ...child.props
                };
                this.arr.push(React.cloneElement(child, props));
            });
            React.Children.forEach(this.props.children, (child, index) => {
                let newProps = {
                    key: `${this.key}${index}flag`,
                    ...child.props
                };
                this.arr.push(React.cloneElement(child, newProps));
            });
        }
        
        this.setState({
            newChildren: [...this.arr]
        })
    }

    componentDidMount() {
        this.initPosition();
        this.startAnimation();
    }

    componentWillUnmount() {
        this.startAnimation = () => {};
    }

    render() {
        const { styles, direction } = this.props;
        const { newChildren } = this.state;
        return (
            <Animated.View style={[{
                    transform: [direction !== 'vertical' ? {translateX: this.animation} : {translateY: this.animation}]
                }, styles]}>
                {newChildren}
            </Animated.View>
        )
    }
}


