import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatIndentDecrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentDecrease'

      short_name='FormatIndentDecrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm320-160q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360h320q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280H480Zm0-160q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520h320q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H480Zm0-160q-17 0-28.5-11.5T440-640q0-17 11.5-28.5T480-680h320q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H480ZM160-760q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Zm86 406L134-466q-6-6-6-14t6-14l112-112q10-10 22-5t12 19v224q0 14-12 19t-22-5Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentDecrease.displayName = 'OnesyIconMaterialFormatIndentDecrease';

export default IconMaterialFormatIndentDecrease;
