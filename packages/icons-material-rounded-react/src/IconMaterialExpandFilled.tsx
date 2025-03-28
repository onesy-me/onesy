import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandFilled'

      short_name='Expand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-17 0-28.5-11.5T160-120q0-17 11.5-28.5T200-160h560q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H200Zm280-137q-8 0-15-2.5t-13-8.5L348-332q-11-11-11.5-27.5T348-388q11-11 27.5-11.5T404-389l36 35v-252l-36 35q-11 11-27.5 11T348-572q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11.5 27.5T612-572q-11 11-27.5 11.5T556-571l-36-35v252l36-35q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L508-228q-6 6-13 8.5t-15 2.5ZM200-800q-17 0-28.5-11.5T160-840q0-17 11.5-28.5T200-880h560q17 0 28.5 11.5T800-840q0 17-11.5 28.5T760-800H200Z"/>
    </Icon>
  );
});

IconMaterialExpandFilled.displayName = 'OnesyIconMaterialExpandFilled';

export default IconMaterialExpandFilled;
