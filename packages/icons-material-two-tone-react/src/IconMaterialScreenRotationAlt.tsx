import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenRotationAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationAlt'

      short_name='ScreenRotationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M4,7.59l5-5c0.78-0.78,2.05-0.78,2.83,0L20.24,11h-2.83L10.4,4L5.41,9H8v2H2V5h2V7.59z M20,19h2v-6h-6v2h2.59l-4.99,5 l-7.01-7H3.76l8.41,8.41c0.78,0.78,2.05,0.78,2.83,0l5-5V19z"/></g>
    </Icon>
  );
});

IconMaterialScreenRotationAlt.displayName = 'OnesyIconMaterialScreenRotationAlt';

export default IconMaterialScreenRotationAlt;
