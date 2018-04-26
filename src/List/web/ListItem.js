import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  color: ${(props) => props.disabled ? props.theme.color.greyLight : ''};
  padding: ${(props) => props.theme.px(2)};
  cursor: ${(props) => props.onClick ? 'pointer' : ''};
  pointer-events: ${(props) => props.disabled ? 'none' : ''};
  opacity: ${(props) => props.disabled ? '0.5' : ''};

  &:hover,
  &:focus {
    background: ${(props) => props.onClick ? props.theme.color.translucent : ''};
  }
`;

ListItem.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ListItem.defaultProps = {
  disabled: false,
};

export default ListItem;