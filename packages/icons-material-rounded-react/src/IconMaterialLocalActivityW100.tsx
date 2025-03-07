import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalActivityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivityW100'

      short_name='LocalActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-430 34 27q9 7 18 .5t6-17.5l-14-44 43-33q8-7 5-17t-14-10h-48l-16-48q-3-11-14-11t-14 11l-16 48h-49q-11 0-14 10t5 17l42 33-14 46q-3 11 5.5 17.5t17.5-.5l37-29ZM192-212q-25 0-42.5-17.5T132-272v-69q0-8 3.5-15t10.5-11q30-19 48-48t18-65q0-36-18-65t-48-48q-7-4-10.5-11t-3.5-15v-69q0-25 17.5-42.5T192-748h576q25 0 42.5 17.5T828-688v69q0 8-3.5 15T814-593q-30 19-48 48t-18 65q0 36 18 65t48 48q7 4 10.5 11t3.5 15v69q0 25-17.5 42.5T768-212H192Zm0-28h576q14 0 23-9t9-23v-70q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-70q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v70q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v70q0 14 9 23t23 9Zm288-240Z"/>
    </Icon>
  );
});

IconMaterialLocalActivityW100.displayName = 'OnesyIconMaterialLocalActivityW100';

export default IconMaterialLocalActivityW100;
