import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const styles = {
  color(props) {
    if (props.kind === 'filled') {
      return props.theme.color.white;
    } else if (props.kind === 'outlined') {
      return props.theme.color[props.color];
    } else if (props.kind === 'transparent') {
      return props.theme.color[props.color];
    }
    return '';
  },
  background(props) {
    if (props.kind === 'filled') {
      return props.theme.color[props.color];
    } else if (props.kind === 'outlined') {
      return 'transparent';
    } else if (props.kind === 'transparent') {
      return 'transparent';
    }
    return '';
  },
  padding(props) {
    if (props.size === 'small') {
      return props.theme.px(1);
    } else if (props.size === 'medium') {
      return props.theme.px(2);
    } else if (props.size === 'large') {
      return props.theme.px([2, 3]);
    }
    return '';
  },
  border(props) {
    if (props.kind === 'filled') {
      return `1px solid ${props.theme.color[props.color]}`;
    } else if (props.kind === 'outlined') {
      return `1px solid ${props.theme.color[props.color]}`;
    } else if (props.kind === 'transparent') {
      return '1px solid transparent';
    }
    return '';
  },
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    } else if (props.shape === 'sharpEdged') {
      return '0';
    } else if (props.shape === 'capsular') {
      return props.theme.px(10);
    } else if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  },
  pointerEvents(props) {
    if (props.disabled) {
      return 'none';
    }
    return '';
  },
  opacity(props) {
    if (props.disabled) {
      return '0.5';
    }
    return '';
  },
  hover: {
    color(props) {
      if (props.kind === 'filled') {
        return props.theme.color.white;
      } else if (props.kind === 'outlined') {
        return props.theme.color[`${props.color}Dark`];
      } else if (props.kind === 'transparent') {
        return props.theme.color.white;
      }
      return '';
    },
    background(props) {
      if (props.kind === 'filled') {
        return props.theme.color[`${props.color}Dark`];
      } else if (props.kind === 'outlined') {
        return props.theme.color[`${props.color}Lighter`];
      } else if (props.kind === 'transparent') {
        return props.theme.color[props.color];
      }
      return '';
    },
    border(props) {
      if (props.kind === 'filled') {
        return `1px solid ${props.theme.color[`${props.color}Dark`]}`;
      } else if (props.kind === 'outlined') {
        return `1px solid ${props.theme.color[`${props.color}Dark`]}`;
      } else if (props.kind === 'transparent') {
        return '1px solid transparent';
      }
      return '';
    },
  },
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${styles.color};
  background: ${styles.background};
  padding: ${styles.padding};
  width: ${(props) => props.block ? '100%' : ''};
  border: ${styles.border};
  border-radius: ${styles.borderRadius};
  pointer-events: ${styles.pointerEvents};
  opacity: ${styles.opacity};

  &:hover {
    color: ${styles.hover.color};
    background: ${styles.hover.background};
    border: ${styles.hover.border};
  }
`;

const Button = (props, context) => (
  <StyledButton
    {...props}
    disabled={
      props.disabled || (
        props.type === 'submit' &&
        context.formik &&
        !context.formik.isValid
      )
    }
  />
);

Button.propTypes = {
  color: PropTypes.string,
  kind: PropTypes.oneOf(['filled', 'outlined', 'transparent']),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'circular']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  color: 'primary',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
  block: false,
  disabled: false,
};

Button.contextTypes = {
  formik: PropTypes.object,
};

export default Button;