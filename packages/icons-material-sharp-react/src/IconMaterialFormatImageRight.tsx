import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatImageRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageRight'

      short_name='FormatImageRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280v-400h400v400H440Zm80-80h240v-240H520v240ZM120-120v-80h720v80H120Zm0-160v-80h240v80H120Zm0-160v-80h240v80H120Zm0-160v-80h240v80H120Zm0-160v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialFormatImageRight.displayName = 'OnesyIconMaterialFormatImageRight';

export default IconMaterialFormatImageRight;
