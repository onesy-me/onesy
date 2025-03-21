import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsOverscanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanFilled'

      short_name='SettingsOverscan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-536q0-7-6-9.5t-11 2.5l-49 49q-6 6-6 14t6 14l49 49q5 5 11 2.5t6-9.5v-112Zm256 176H424q-7 0-9.5 6t2.5 11l49 49q6 6 14 6t14-6l49-49q5-5 2.5-11t-9.5-6Zm0-240q7 0 9.5-6t-2.5-11l-49-49q-6-6-14-6t-14 6l-49 49q-5 5-2.5 11t9.5 6h112Zm144 64v112q0 7 6 9.5t11-2.5l49-49q6-6 6-14t-6-14l-49-49q-5-5-11-2.5t-6 9.5ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialSettingsOverscanFilled.displayName = 'OnesyIconMaterialSettingsOverscanFilled';

export default IconMaterialSettingsOverscanFilled;
