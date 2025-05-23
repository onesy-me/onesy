import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveExport = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveExport'

      short_name='DriveExport'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m800-264-95 96q-12 12-28.5 12T648-168q-12-12-12-28.5t12-28.5l95-95h-63q-17 0-28.5-11.5T640-360q0-17 11.5-28.5T680-400h160q17 0 28.5 11.5T880-360v160q0 17-11.5 28.5T840-160q-17 0-28.5-11.5T800-200v-64ZM220-100q-17 0-34.5-10.5T160-135L60-310q-8-14-8-34.5t8-34.5l260-446q8-14 25.5-24.5T380-860h200q17 0 34.5 10.5T640-825l144 247q12 21-.5 41.5T747-518q-10-1-18.5-5.5T715-537L574-780H386L132-344l94 164h296q10 0 18 4t14 12q14 20 3.5 42T522-100H220Zm93-180q-11 0-20.5-5T278-300l-6-11q-5-9-5-20t5-20l160-279q5-9 14.5-14.5T467-650h26q11 0 20.5 5.5T528-630l74 130q7 11 5.5 24.5T597-452q-14 15-34 12t-30-20l-53-92-110 192h117q19 0 30.5 14t8.5 33q-2 14-14 23.5t-26 9.5H313Z"/>
    </Icon>
  );
});

IconMaterialDriveExport.displayName = 'OnesyIconMaterialDriveExport';

export default IconMaterialDriveExport;
