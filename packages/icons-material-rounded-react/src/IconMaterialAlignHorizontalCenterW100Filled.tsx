import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenterW100Filled'

      short_name='AlignHorizontalCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-146v-170H327q-14 0-24.5-10.5T292-351q0-14 10.5-24.5T327-386h139v-188H207q-14 0-24.5-10.5T172-609q0-14 10.5-24.5T207-644h259v-170q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v170h259q14 0 24.5 10.5T788-609q0 14-10.5 24.5T753-574H494v188h139q14 0 24.5 10.5T668-351q0 14-10.5 24.5T633-316H494v170q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenterW100Filled.displayName = 'OnesyIconMaterialAlignHorizontalCenterW100Filled';

export default IconMaterialAlignHorizontalCenterW100Filled;
