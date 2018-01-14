import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// export default class Header extends React.Component {
//   render() {
//     const { textStyle, viewStyle } = styles;
//
//     return (
//       <View style={viewStyle}>
//         <Text style={textStyle}>{this.props.headerText}</Text>
//       </View>
//     );
//   }
// }

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',   // column direction
    alignItems: 'center',       // row direction
    height: 60,
    padding: 15,
    shadowColor: '#000',        // 'shadow' is ios specific
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,               // needed for android
    position: 'relative',       // needed for android
  },
  textStyle: {
    fontSize: 20,
  },
};

export default Header;