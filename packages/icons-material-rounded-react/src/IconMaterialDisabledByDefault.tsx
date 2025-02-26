import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisabledByDefault = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefault'

      short_name='DisabledByDefault'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-424 116 116q11 11 28 11t28-11q11-11 11-28t-11-28L536-480l116-116q11-11 11-28t-11-28q-11-11-28-11t-28 11L480-536 364-652q-11-11-28-11t-28 11q-11 11-11 28t11 28l116 116-116 116q-11 11-11 28t11 28q11 11 28 11t28-11l116-116ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefault.displayName = 'OnesyIconMaterialDisabledByDefault';

export default IconMaterialDisabledByDefault;
