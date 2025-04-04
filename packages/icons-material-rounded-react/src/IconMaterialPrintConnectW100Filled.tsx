import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintConnectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnectW100Filled'

      short_name='PrintConnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m718-229 132-132q3.75-4 9.38-4 5.62 0 9.62 4 5 4 4.5 10t-4.5 10L739-211q-9 9-21 9t-21-9l-46-45q-5-4.09-5-9.55 0-5.45 5-10.67 5-4.78 10-4.78t10 5l47 47Zm-366 57q-24.75 0-42.37-17.63Q292-207.25 292-232v-100h-70q-24.75 0-42.37-17.63Q162-367.25 162-392v-148q0-28.9 19.5-48.45Q201-608 230-608h500q28.9 0 48.45 19.55Q798-568.9 798-540q0 13-7 22.5t-21 7.5q-60 0-115 28.5T568-402q-3.87 6.3-10.06 10.15Q551.74-388 544-388H352q-14 0-23 9t-9 23v124q0 14 9 23t23 9h191q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H352Zm-29.59-464q-13.41 0-21.91-8.65t-8.5-21.44v-30.09q0-24.82 17.63-42.32Q327.25-756 352-756h256q24.75 0 42.38 17.67Q668-720.66 668-695.85v30.07q0 12.78-8.62 21.28-8.63 8.5-21.38 8.5H322.41Z"/>
    </Icon>
  );
});

IconMaterialPrintConnectW100Filled.displayName = 'OnesyIconMaterialPrintConnectW100Filled';

export default IconMaterialPrintConnectW100Filled;
