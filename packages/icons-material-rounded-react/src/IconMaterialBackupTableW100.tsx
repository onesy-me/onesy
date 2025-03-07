import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackupTableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupTableW100'

      short_name='BackupTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-320h194v-226H294v194q0 12 10 22t22 10Zm-32-254h480v-194q0-12-10-22t-22-10H326q-12 0-22 10t-10 22v194Zm254 254h194q12 0 22-10t10-22v-194H548v226Zm-222 28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Z"/>
    </Icon>
  );
});

IconMaterialBackupTableW100.displayName = 'OnesyIconMaterialBackupTableW100';

export default IconMaterialBackupTableW100;
