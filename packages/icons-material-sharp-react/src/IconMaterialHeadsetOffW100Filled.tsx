import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadsetOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetOffW100Filled'

      short_name='HeadsetOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M792-278 652-417v-19h112v-84q0-116-82-198t-198-82q-44 0-86.5 14T322-748l-20-20q30-24 78-42t104-18q64 0 120 24t98 66q42 42 66 98t24 120v242Zm64 218-64-64H484v-28h280l-60-60h-52v-52L246-670q-18 30-30 70.5T204-520v84h112v224H176v-308q0-48 13.5-91t36.5-79L64-852l20-20L876-80l-20 20Z"/>
    </Icon>
  );
});

IconMaterialHeadsetOffW100Filled.displayName = 'OnesyIconMaterialHeadsetOffW100Filled';

export default IconMaterialHeadsetOffW100Filled;
