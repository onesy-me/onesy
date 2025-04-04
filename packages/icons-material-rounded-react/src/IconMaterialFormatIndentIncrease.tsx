import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatIndentIncrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentIncrease'

      short_name='FormatIndentIncrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm320-160q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360h320q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280H480Zm0-160q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520h320q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H480Zm0-160q-17 0-28.5-11.5T440-640q0-17 11.5-28.5T480-680h320q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H480ZM160-760q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Zm-6 406q-10 10-22 5t-12-19v-224q0-14 12-19t22 5l112 112q6 6 6 14t-6 14L154-354Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentIncrease.displayName = 'OnesyIconMaterialFormatIndentIncrease';

export default IconMaterialFormatIndentIncrease;
