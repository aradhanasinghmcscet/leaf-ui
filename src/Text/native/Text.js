import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Platform } from 'react-native';
import theme from '../../theme';

const isPlatformAndroid = Platform.OS !== 'ios';

const fontFamilies = {
  normal: isPlatformAndroid ? 'Roboto-Regular' : 'SFProDisplay-Regular',
  medium: isPlatformAndroid ? 'Roboto-Medium' : 'SFProDisplay-Medium',
  semibold: isPlatformAndroid ? 'Roboto-Medium' : 'SFProDisplay-Semibold',
  bold: 'Averta-Bold',
};

const Text = styled.Text`
  color: ${(props) => props.theme.color[props.color]};
  font-size: ${(props) => props.theme.fontSize[props.size]};
  font-family: ${(props) => fontFamilies[props.weight]};
  text-align: ${(props) => props.align};
`;

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(theme.fontSize),
  weight: PropTypes.oneOf(theme.fontWeight),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

Text.defaultProps = {
  color: 'greyDarker',
  size: 'm',
  weight: 'normal',
  align: 'left',
};

export default Text;
