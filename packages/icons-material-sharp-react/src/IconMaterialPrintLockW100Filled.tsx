import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintLockW100Filled'

      short_name='PrintLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M629-171v-164h35v-40q0-26.81 19.13-45.91 19.14-19.09 46-19.09 26.87 0 45.37 19.09Q793-401.81 793-375v40h35v164H629Zm63-164h73v-40q0-17-9.5-27T729-412q-17 0-27 10t-10 27v40ZM291.65-172v-160H162v-276h636v101q-7.85-1.4-16.42-2.2Q773-510 765-510q-65 0-119.5 32.5T560-388H320v188h223q2 8 5.5 14.5T555-172H291.65Zm.35-464v-120h376v120H292Z"/>
    </Icon>
  );
});

IconMaterialPrintLockW100Filled.displayName = 'OnesyIconMaterialPrintLockW100Filled';

export default IconMaterialPrintLockW100Filled;
