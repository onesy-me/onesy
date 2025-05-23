import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCabinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CabinW100Filled'

      short_name='Cabin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-200h416q14 0 23-9t9-23v-88H240v88q0 14 9 23t23 9Zm-32-148h480v-120H240v120Zm0-148h480v-60l-79-60H319l-79 60v60Zm116-148h249l-106-80q-8-7-19-7t-19 7l-105 80ZM212-232v-303l-68 53q-5 4-10 3t-9-6q-4-5-3.5-10t5.5-9l85-66v-86q0-6 4-10t10-4q6 0 10 4t4 10v64l204-155q17-12 36.5-12t35.5 12l317 243q5 4 5.5 9t-3.5 10q-4 5-9 6t-10-3l-68-53v303q0 25-17.5 42.5T688-172H272q-25 0-42.5-17.5T212-232Zm13-488q-5 0-9-4t-3-9q4-29 27-47t52-18q18 0 33-10.5t18-27.5q1-5 5-8.5t9-3.5q6 0 10.5 4.5T371-833q-5 28-27.5 45.5T292-770q-18 0-33 9t-18 26q-2 6-6 10.5t-10 4.5Z"/>
    </Icon>
  );
});

IconMaterialCabinW100Filled.displayName = 'OnesyIconMaterialCabinW100Filled';

export default IconMaterialCabinW100Filled;
