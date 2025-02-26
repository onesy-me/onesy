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
      <path d="M294-320h226v-226H294v226Zm0-254h480v-226H294v226Zm254 254h226v-226H548v226Zm-282 28v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialBackupTableW100.displayName = 'OnesyIconMaterialBackupTableW100';

export default IconMaterialBackupTableW100;
