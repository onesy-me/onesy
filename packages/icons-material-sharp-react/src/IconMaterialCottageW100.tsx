import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCottageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CottageW100'

      short_name='Cottage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-363l-79 61-17-22 96-74v-100h28v78l240-183 364 279-17 22-79-61v363H212Zm28-28h180v-200h120v200h180v-356L480-739 240-556v356Zm-28-520q0-32 19.5-55t60.5-23q29 0 40.5-14.5T344-848h28q0 32-19.5 55T292-770q-29 0-40.5 14.5T240-720h-28Zm28 520h480-480Z"/>
    </Icon>
  );
});

IconMaterialCottageW100.displayName = 'OnesyIconMaterialCottageW100';

export default IconMaterialCottageW100;
