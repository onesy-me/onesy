import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkRingOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRingOffFilled'

      short_name='PhonelinkRingOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-28 28-820l56-56L876-84l-56 56ZM200-703l80 80v383h384l96 96v104H200v-663Zm153-17L206-868v-52h554v240h-80v-40H353Zm381 354-58-58q12-11 18.5-25.5T701-480q0-16-6.5-30.5T676-536l58-58q23 23 35 52.5t12 61.5q0 32-12 61.5T734-366Zm98 98-56-56q31-31 48-71t17-85q0-45-17-85t-48-71l56-56q43 42 66 97t23 115q0 60-23 115t-66 97Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRingOffFilled.displayName = 'OnesyIconMaterialPhonelinkRingOffFilled';

export default IconMaterialPhonelinkRingOffFilled;
