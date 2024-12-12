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
      <path d="M120-120v-80h720v80H120Zm320-160v-80h400v80H440Zm0-160v-80h400v80H440Zm0-160v-80h400v80H440ZM120-760v-80h720v80H120Zm0 440v-320l160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentIncrease.displayName = 'OnesyIconMaterialFormatIndentIncrease';

export default IconMaterialFormatIndentIncrease;
