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
      <path d="M659-171q-12.75 0-21.37-8.63Q629-188.25 629-201v-105q0-13 10.5-21t24.5-8v-40q0-26.81 19.13-45.91 19.14-19.09 46-19.09 26.87 0 45.37 19.09Q793-401.81 793-375v40q14 0 24.5 8t10.5 21v105q0 12.75-8.62 21.37Q810.75-171 798-171H659Zm33-164h73v-40q0-17-9.5-27T729-412q-17 0-27 10t-10 27v40ZM352-172q-24.75 0-42.37-17.63Q292-207.25 292-232v-100h-70q-24.75 0-42.37-17.63Q162-367.25 162-392v-148q0-28.9 19.5-48.45Q201-608 230-608h500q28.9 0 48.45 19.55Q798-568.9 798-540q0 13-7 22.5t-21 7.5q-60 0-115 28.5T568-402q-3.87 6.3-10.06 10.15Q551.74-388 544-388H352q-14 0-23 9t-9 23v124q0 14 9 23t23 9h191q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H352Zm-29.59-464q-13.41 0-21.91-8.65t-8.5-21.44v-30.09q0-24.82 17.63-42.32Q327.25-756 352-756h256q24.75 0 42.38 17.67Q668-720.66 668-695.85v30.07q0 12.78-8.62 21.28-8.63 8.5-21.38 8.5H322.41Z"/>
    </Icon>
  );
});

IconMaterialPrintLockW100Filled.displayName = 'OnesyIconMaterialPrintLockW100Filled';

export default IconMaterialPrintLockW100Filled;
