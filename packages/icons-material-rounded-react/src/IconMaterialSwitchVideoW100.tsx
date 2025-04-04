import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideoW100'

      short_name='SwitchVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M275-466h300l-60 60q-4 4-4.5 9.5T515-386q5 5 10 5t10-5l73-73q5-5 7-10t2-11q0-6-2-11t-7-10l-73-73q-4-4-9.5-4.5T515-574q-5 5-5 10t5 10l60 60H275l60-60q4-4 4.5-9.5T335-574q-5-5-10-5t-10 5l-73 73q-5 5-7 10t-2 11q0 6 2 11t7 10l73 73q4 4 9.5 4.5T335-386q5-5 5-10t-5-10l-60-60Zm-58 254q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v188l84-84q7-7 16.5-3.5T803-574v188q0 10-9.5 13.5T777-376l-84-84v188q0 26-17 43t-43 17H217Zm0-28h416q14 0 23-9t9-23v-416q0-14-9-23t-23-9H217q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSwitchVideoW100.displayName = 'OnesyIconMaterialSwitchVideoW100';

export default IconMaterialSwitchVideoW100;
