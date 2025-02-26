import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeFilled'

      short_name='Landscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m88-304 160-213q6-8 14.5-12t17.5-4q9 0 17.5 4t14.5 12l136 181q6 8 14 12t18 4q25 0 36-22.5t-4-42.5l-84-111q-8-11-8-24t8-24l100-133q6-8 14.5-12t17.5-4q9 0 17.5 4t14.5 12l280 373q15 20 4 42t-36 22H120q-25 0-36-22t4-42Z"/>
    </Icon>
  );
});

IconMaterialLandscapeFilled.displayName = 'OnesyIconMaterialLandscapeFilled';

export default IconMaterialLandscapeFilled;
