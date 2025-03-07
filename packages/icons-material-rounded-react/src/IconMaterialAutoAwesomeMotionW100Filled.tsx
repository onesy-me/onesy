import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoAwesomeMotionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionW100Filled'

      short_name='AutoAwesomeMotion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M512.33-132Q486-132 469-149t-17-43.33v-255.34Q452-474 469-491t43.33-17h255.34Q794-508 811-491t17 43.33v255.34Q828-166 811-149t-43.33 17H512.33ZM292-294v-314q0-26 17-43t43-17h314q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H352q-12 0-22 10t-10 22v314q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98ZM132-454v-314q0-26 17-43t43-17h314q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H192q-12 0-22 10t-10 22v314q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMotionW100Filled.displayName = 'OnesyIconMaterialAutoAwesomeMotionW100Filled';

export default IconMaterialAutoAwesomeMotionW100Filled;
