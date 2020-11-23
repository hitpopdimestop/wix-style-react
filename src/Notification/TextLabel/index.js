import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import { dataHooks } from '../constants';
import { classes } from '../Notification.st.css';
import { EllipsisCommonProps } from '../../common/PropTypes/EllipsisCommon';

const TextLabel = ({ children, ...ellipsisProps }) => (
  <div className={classes.label}>
    <Text
      weight="normal"
      {...ellipsisProps}
      light
      dataHook={dataHooks.notificationLabel}
    >
      {children}
    </Text>
  </div>
);

TextLabel.propTypes = {
  children: PropTypes.node,
  ...EllipsisCommonProps,
};

TextLabel.defaultProps = {
  ellipsis: true,
  placement: 'bottom',
};

TextLabel.displayName = 'Notification.TextLabel';

export default TextLabel;
