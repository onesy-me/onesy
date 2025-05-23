import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial360W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='360W100Filled'

      short_name='360'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M406-336q-113-15-193.5-54.5T132-480q0-59 101.5-103.5T480-628q145 0 246.5 44.5T828-480q0 36-46.5 71T657-354q-6 2-11.5-1t-5.5-9q0-7 4.5-11.5T655-382q70-20 107.5-48.5T800-480q0-35-85.5-77.5T480-600q-149 0-234.5 42.5T160-480q0 30 71 66t175 50l-80-80q-4-4-4.5-9.5T326-464q5-5 10-5t10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T326-236q-5-5-5-10t5-10l80-80Z"/>
    </Icon>
  );
});

IconMaterial360W100Filled.displayName = 'OnesyIconMaterial360W100Filled';

export default IconMaterial360W100Filled;
