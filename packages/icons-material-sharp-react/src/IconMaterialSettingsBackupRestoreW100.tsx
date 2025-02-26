import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsBackupRestoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBackupRestoreW100'

      short_name='SettingsBackupRestore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-452q-11 0-19.5-8.5T450-480q0-11 8.5-19.5T478-508q11 0 19.5 8.5T506-480q0 11-8.5 19.5T478-452Zm0 280q-117 0-204-76.5T173-440h28q17 103 94.9 171.5T478-200q117 0 198.5-81.5T758-480q0-117-81.5-198.5T478-760q-60 0-113 24.5T270-668h96v28H222v-144h28v96q45-47 104-73.5T478-788q64.08 0 120.04 24Q654-740 696-698q42 42 66 97.94 24 55.95 24 120Q786-416 762-360t-66 98q-42 42-97.96 66-55.96 24-120.04 24Z"/>
    </Icon>
  );
});

IconMaterialSettingsBackupRestoreW100.displayName = 'OnesyIconMaterialSettingsBackupRestoreW100';

export default IconMaterialSettingsBackupRestoreW100;
