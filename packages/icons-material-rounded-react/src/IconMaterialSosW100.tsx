import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSosW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SosW100'

      short_name='Sos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M436-326q-25 0-42.5-17.5T376-386v-188q0-25 17.5-42.5T436-634h88q25 0 42.5 17.5T584-574v188q0 25-17.5 42.5T524-326h-88Zm-222 0h-94q-6 0-10-4t-4-10q0-6 4-10t10-4h94q14 0 23-9t9-23v-48q0-14-9-23t-23-9h-48q-25 0-42.5-17.5T106-526v-48q0-25 17.5-42.5T166-634h94q6 0 10 4t4 10q0 6-4 10t-10 4h-94q-14 0-23 9t-9 23v48q0 14 9 23t23 9h48q25 0 42.5 17.5T274-434v48q0 25-17.5 42.5T214-326Zm580 0h-94q-6 0-10-4t-4-10q0-6 4-10t10-4h94q14 0 23-9t9-23v-48q0-14-9-23t-23-9h-48q-25 0-42.5-17.5T686-526v-48q0-25 17.5-42.5T746-634h94q6 0 10 4t4 10q0 6-4 10t-10 4h-94q-14 0-23 9t-9 23v48q0 14 9 23t23 9h48q25 0 42.5 17.5T854-434v48q0 25-17.5 42.5T794-326Zm-358-28h88q14 0 23-9t9-23v-188q0-14-9-23t-23-9h-88q-14 0-23 9t-9 23v188q0 14 9 23t23 9Z"/>
    </Icon>
  );
});

IconMaterialSosW100.displayName = 'OnesyIconMaterialSosW100';

export default IconMaterialSosW100;
