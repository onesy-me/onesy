import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintW100'

      short_name='Print'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-172q-24.75 0-42.37-17.63Q292-207.25 292-232v-100h-70q-24.75 0-42.37-17.63Q162-367.25 162-392v-148q0-28.9 19.5-48.45Q201-608 230-608h500q28.9 0 48.45 19.55Q798-568.9 798-540v148q0 24.75-17.62 42.37Q762.75-332 738-332h-70v100q0 24.75-17.62 42.37Q632.75-172 608-172H352ZM222-360h70q2-23 19.04-39.5T352-416h256q23.92 0 40.96 16.5T668-360h70q14 0 23-9t9-23v-148q0-17-11.5-28.5T730-580H230q-17 0-28.5 11.5T190-540v148q0 14 9 23t23 9Zm418-248v-88q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v88h-28v-88q0-24.75 17.63-42.38Q327.25-756 352-756h256q24.75 0 42.38 17.62Q668-720.75 668-696v88h-28Zm60 128q17 0 28.5-11.5T740-520q0-17-11.5-28.5T700-560q-17 0-28.5 11.5T660-520q0 17 11.5 28.5T700-480Zm-60 248v-124q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v124q0 14 9 23t23 9h256q14 0 23-9t9-23ZM222-580h-32 580-548Z"/>
    </Icon>
  );
});

IconMaterialPrintW100.displayName = 'OnesyIconMaterialPrintW100';

export default IconMaterialPrintW100;
