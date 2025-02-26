import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCaptureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CaptureW100'

      short_name='Capture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-330h460v-300H250v300ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialCaptureW100.displayName = 'OnesyIconMaterialCaptureW100';

export default IconMaterialCaptureW100;
