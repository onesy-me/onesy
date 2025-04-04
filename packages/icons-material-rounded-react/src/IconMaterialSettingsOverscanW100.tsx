import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsOverscanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanW100'

      short_name='SettingsOverscan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-522q0-5-4.5-7t-8.5 2l-36 36q-5 5-5 11t5 11l36 36q4 4 8.5 2t4.5-7v-84Zm250 170h-84q-5 0-7 4.5t2 8.5l36 36q5 5 11 5t11-5l36-36q4-4 2-8.5t-7-4.5Zm0-256q5 0 7-4.5t-2-8.5l-36-36q-5-5-11-5t-11 5l-36 36q-4 4-2 8.5t7 4.5h84Zm166 86v84q0 5 4.5 7t8.5-2l36-36q5-5 5-11t-5-11l-36-36q-4-4-8.5-2t-4.5 7ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSettingsOverscanW100.displayName = 'OnesyIconMaterialSettingsOverscanW100';

export default IconMaterialSettingsOverscanW100;
