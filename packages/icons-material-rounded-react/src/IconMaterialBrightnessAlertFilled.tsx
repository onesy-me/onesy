import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAlertFilled'

      short_name='BrightnessAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480v-160q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v160q0 17 11.5 28.5T480-440ZM346-160H240q-33 0-56.5-23.5T160-240v-106l-77-78q-11-12-17-26.5T60-480q0-15 6-29.5T83-536l77-78v-106q0-33 23.5-56.5T240-800h106l78-77q12-11 26.5-17t29.5-6q15 0 29.5 6t26.5 17l78 77h106q33 0 56.5 23.5T800-720v106l77 78q11 12 17 26.5t6 29.5q0 15-6 29.5T877-424l-77 78v106q0 33-23.5 56.5T720-160H614l-78 77q-12 11-26.5 17T480-60q-15 0-29.5-6T424-83l-78-77Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAlertFilled.displayName = 'OnesyIconMaterialBrightnessAlertFilled';

export default IconMaterialBrightnessAlertFilled;
