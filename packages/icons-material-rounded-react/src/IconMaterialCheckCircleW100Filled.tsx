import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckCircleW100Filled'

      short_name='CheckCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M422-372 318-476q-4-4-9.5-4.5T298-476q-5 5-5 10t5 10l103 103q9 9 21 9t21-9l217-217q4-4 4.5-9.5T660-590q-5-5-10-5t-10 5L422-372Zm58.17 240q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialCheckCircleW100Filled.displayName = 'OnesyIconMaterialCheckCircleW100Filled';

export default IconMaterialCheckCircleW100Filled;
