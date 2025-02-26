import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCaptureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CaptureW100Filled'

      short_name='Capture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-330h460v-300H250v300ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialCaptureW100Filled.displayName = 'OnesyIconMaterialCaptureW100Filled';

export default IconMaterialCaptureW100Filled;
