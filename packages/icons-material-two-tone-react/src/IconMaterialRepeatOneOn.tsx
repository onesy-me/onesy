import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepeatOneOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOneOn'

      short_name='RepeatOneOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M21,1H3C1.9,1,1,1.9,1,3v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V3C23,1.9,22.1,1,21,1z M19,19H7v3l-4-4l4-4v3h10v-4h2V19z M10,10.5V9h3v6h-1.5v-4.5H10z M17,10V7H7v4H5V5h12V2l4,4L17,10z"/></g>
    </Icon>
  );
});

IconMaterialRepeatOneOn.displayName = 'OnesyIconMaterialRepeatOneOn';

export default IconMaterialRepeatOneOn;
