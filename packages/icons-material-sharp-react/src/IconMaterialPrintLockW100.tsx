import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintLockW100'

      short_name='PrintLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M629-171v-164h35v-40q0-26.81 19.13-45.91 19.14-19.09 46-19.09 26.87 0 45.37 19.09Q793-401.81 793-375v40h35v164H629Zm63-164h73v-40q0-17-9.5-27T729-412q-17 0-27 10t-10 27v40ZM190-580h580-580Zm101.65 408v-160H162v-276h636v101l-14-2q-7-1-14-1v-70H190v220h102v-56h286q-5 7-9.5 13.5T560-388H320v188h223q2 8 5.5 14.5T555-172H291.65ZM640-608v-120H320v120h-28v-148h376v148h-28Z"/>
    </Icon>
  );
});

IconMaterialPrintLockW100.displayName = 'OnesyIconMaterialPrintLockW100';

export default IconMaterialPrintLockW100;
