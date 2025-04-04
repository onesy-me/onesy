import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextIncreaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextIncreaseW100Filled'

      short_name='TextIncrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m162-372-56 137q-2 4-5 6.5t-7.92 2.5Q85-226 81-232t-1-13l202-483q1-2 3.21-4t4.79-2h7.76q3.24 0 5.24 2t3 4l201 480q3 8-1.64 15t-12.55 7q-4.81 0-8.95-2.67-4.14-2.66-5.86-7.33l-56-136H162Zm10-26h240L295.67-682H290L172-398Zm568-68H634q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H768v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106Z"/>
    </Icon>
  );
});

IconMaterialTextIncreaseW100Filled.displayName = 'OnesyIconMaterialTextIncreaseW100Filled';

export default IconMaterialTextIncreaseW100Filled;
