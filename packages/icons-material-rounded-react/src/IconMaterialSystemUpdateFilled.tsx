import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSystemUpdateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateFilled'

      short_name='SystemUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Zm160-234v-126q0-17 11.5-28.5T480-640q17 0 28.5 11.5T520-600v126l36-35q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L508-348q-12 12-28 12t-28-12L348-452q-11-11-11.5-27.5T348-508q11-11 27.5-11.5T404-509l36 35Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateFilled.displayName = 'OnesyIconMaterialSystemUpdateFilled';

export default IconMaterialSystemUpdateFilled;
