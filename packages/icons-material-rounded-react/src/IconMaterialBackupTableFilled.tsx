import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackupTableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupTableFilled'

      short_name='BackupTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h200v-200H320v200Zm0-280h480v-200H320v200Zm280 280h200v-200H600v200Zm-280 80q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Z"/>
    </Icon>
  );
});

IconMaterialBackupTableFilled.displayName = 'OnesyIconMaterialBackupTableFilled';

export default IconMaterialBackupTableFilled;
