import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionBlurW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionBlurW100Filled'

      short_name='MotionBlur'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-306v-28h299q-40-27-58.5-62T506-466H354v-28h152q4-37 22.5-72t56.5-60H146v-28h534q72.21 0 123.1 50.85 50.9 50.85 50.9 123T803.1-357q-50.89 51-123.1 51H286Zm394-28q60 0 103-43t43-103q0-60-43-103t-103-43q-60 0-103 43t-43 103q0 60 43 103t103 43ZM106-466v-28h208v28H106Zm40 160v-28h100v28H146Z"/>
    </Icon>
  );
});

IconMaterialMotionBlurW100Filled.displayName = 'OnesyIconMaterialMotionBlurW100Filled';

export default IconMaterialMotionBlurW100Filled;
