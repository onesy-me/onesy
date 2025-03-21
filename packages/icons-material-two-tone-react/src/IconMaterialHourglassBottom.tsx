import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassBottom'

      short_name='HourglassBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="16,16.5 12,12.5 8,16.5 8,20 16,20"/><polygon opacity=".3" points="16,16.5 12,12.5 8,16.5 8,20 16,20"/><path d="M6,22h12v-6l-4-4l3.99-4.01L18,2H6l0.01,5.99L10,12l-4,3.99V22z M8,7.5V4h8v3.5l-4,4L8,7.5z M8,16.5l4-4l4,4V20H8V16.5z"/></g></g>
    </Icon>
  );
});

IconMaterialHourglassBottom.displayName = 'OnesyIconMaterialHourglassBottom';

export default IconMaterialHourglassBottom;
