import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3pW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3pW100'

      short_name='3p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-446h248v-2q0-28-35.5-47T480-514q-53 0-88.5 19T356-448v2Zm124-140q23 0 38.5-15.5T534-640q0-23-15.5-38.5T480-694q-23 0-38.5 15.5T426-640q0 23 15.5 38.5T480-586ZM244-292l-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterial3pW100.displayName = 'OnesyIconMaterial3pW100';

export default IconMaterial3pW100;
