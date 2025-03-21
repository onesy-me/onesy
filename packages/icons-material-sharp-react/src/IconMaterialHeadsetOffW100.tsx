import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadsetOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetOffW100'

      short_name='HeadsetOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m788-278-28-28v-102H657l-28-28h131v-84q0-116-82-198t-198-82q-44 0-86.5 14T318-748l-20-20q30-24 78-42t104-18q64 0 120 24t98 66q42 42 66 98t24 120v242ZM480-124v-28h280l-60-60h-72v-72L242-670q-18 30-30 70.5T200-520v84h128v224H172v-308q0-48 13.5-91t36.5-79L60-852l20-20 720 720v28H480ZM200-240h100v-168H200v168Zm0-168h100-100Zm457 0h103-103Z"/>
    </Icon>
  );
});

IconMaterialHeadsetOffW100.displayName = 'OnesyIconMaterialHeadsetOffW100';

export default IconMaterialHeadsetOffW100;
