# react-naitve-SeamlessScroll
react-native 简单的无缝平滑滚动组件 用于横向或纵向的平滑滚动

## Browsers

* support IE9+, Chrome, Firefox, Safari

## Install

```ssh
    npm install react-native-seamless-scroll
    yarn add react-native-seamless-scroll
```

## Usage

```jsx
import { SeamlessScroll } from 'react-native-seamless-scrolls';

<SeamlessScroll scrolltime={8000} direction='row' meter={20} styles={{ width: 320, flexDirection: 'row' }}>
  <View style={{ paddingRight: 20 }}>
    <Text>
      测试公告内容是否能正常播放，会不会卡条！
    </Text>
  </View>
  <View>
    <Text style={styles.noticeText}>
      测试公告内容是否能正常播放，会不会卡条！
    </Text>
  </View>
</SeamlessScroll>
```

## API
### data 接收一个数组对象，形成单个或多个进度形状

|   属性         |                       说明                       |  类型   |   默认值    |
| ---------------| ------------------------------------------------ | ------- | ----------- |
| direction      | 必选 方向 默认纵向'vertical' 横向'row'               | string  | ``vertical`` |
| meter          | 选填 调节参数（在滚动元素有padding或margin时做对应调节，或处理ios和android兼容调节）| number  | ``0`` |
| styles         | 必选 对应的滚动适口宽度或高度（width或height）也是滚动一个周期的对应值| Object  | ``null`` |
| scrolltime     | 滚动一个周期所需时间（毫秒）                              | number  | ``5000`` |


