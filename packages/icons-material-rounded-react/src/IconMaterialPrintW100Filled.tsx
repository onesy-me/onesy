import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintW100Filled'

      short_name='Print'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-172q-24.75 0-42.37-17.63Q292-207.25 292-232v-100h-70q-24.75 0-42.37-17.63Q162-367.25 162-392v-148q0-28.9 19.5-48.45Q201-608 230-608h500q28.9 0 48.45 19.55Q798-568.9 798-540v148q0 24.75-17.62 42.37Q762.75-332 738-332h-70v100q0 24.75-17.62 42.37Q632.75-172 608-172H352Zm316-464H292v-60.18q0-24.82 17.63-42.32Q327.25-756 352-756h256q24.75 0 42.38 17.62Q668-720.75 668-696v60Zm32 156q17 0 28.5-11.5T740-520q0-17-11.5-28.5T700-560q-17 0-28.5 11.5T660-520q0 17 11.5 28.5T700-480ZM352-200h256q14 0 23-9t9-23v-124q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v124q0 14 9 23t23 9Z"/>
    </Icon>
  );
});

IconMaterialPrintW100Filled.displayName = 'OnesyIconMaterialPrintW100Filled';

export default IconMaterialPrintW100Filled;
