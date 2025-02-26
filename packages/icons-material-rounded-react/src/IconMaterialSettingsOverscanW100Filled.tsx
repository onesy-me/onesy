import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsOverscanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanW100Filled'

      short_name='SettingsOverscan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-521.76q0-5.24-4.5-7.24t-8.2 1.7L223-491q-5 4.64-5 10.82 0 6.18 5 11.18l36.3 36.3q3.7 3.7 8.2 1.83 4.5-1.87 4.5-7.11v-83.78ZM522.02-352h-83.78q-5.24 0-7.24 4.5t1.7 8.2L469-303q4.64 5 10.82 5 6.18 0 11.18-5l36.3-36.3q3.7-3.7 1.83-8.2-1.87-4.5-7.11-4.5Zm-.26-256q5.24 0 7.24-4.5t-1.7-8.2L491-657q-4.64-5-10.82-5-6.18 0-11.18 5l-36.3 36.3q-3.7 3.7-1.83 8.2 1.87 4.5 7.11 4.5h83.78ZM688-522.02v83.78q0 5.24 4.5 7.24t8.2-1.7L737-469q5-4.64 5-10.82 0-6.18-5-11.18l-36.3-36.3q-3.7-3.7-8.2-1.83-4.5 1.87-4.5 7.11ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialSettingsOverscanW100Filled.displayName = 'OnesyIconMaterialSettingsOverscanW100Filled';

export default IconMaterialSettingsOverscanW100Filled;
