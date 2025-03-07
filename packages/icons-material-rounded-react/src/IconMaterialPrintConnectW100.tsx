import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintConnectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnectW100'

      short_name='PrintConnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m718-229 132-132q3.75-4 9.38-4 5.62 0 9.62 4 5 4 4.5 10t-4.5 10L739-211q-9 9-21 9t-21-9l-46-45q-5-4.09-5-9.55 0-5.45 5-10.67 5-4.78 10-4.78t10 5l47 47ZM190-580h580-580Zm-28 40q0-28.9 19.5-48.45Q201-608 230-608h500q28.9 0 48.45 19.55Q798-568.9 798-540v29q0 5.95-4.11 9.98-4.1 4.02-10.18 4.02-5.71 0-9.71-4.02-4-4.03-4-9.98v-29q0-17-11.5-28.5T730-580H230q-17 0-28.5 11.5T190-540v148q0 14 9 23t23 9h70q0-23 16.45-39.5T348-416h195q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H352q-14 0-23 9t-9 23v124q0 14 9 23t23 9h191q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H352q-24.75 0-42.37-17.63Q292-207.25 292-232v-100h-70q-24.75 0-42.37-17.63Q162-367.25 162-392v-148Zm130-68v-88q0-24.75 17.63-42.38Q327.25-756 352-756h256q24.75 0 42.38 17.62Q668-720.75 668-696v88h-28v-88q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v88h-28Z"/>
    </Icon>
  );
});

IconMaterialPrintConnectW100.displayName = 'OnesyIconMaterialPrintConnectW100';

export default IconMaterialPrintConnectW100;
