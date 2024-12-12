import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCampingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingW100'

      short_name='Camping'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-106v-144l331-445-38-50 23-17 32 44 33-44 22 17-37 50 330 445v144H132Zm348-565L160-241v107h133l187-261 187 261h133v-107L480-671ZM328-134h304L480-347 328-134Zm152-261 187 261-187-261-187 261 187-261Z"/>
    </Icon>
  );
});

IconMaterialCampingW100.displayName = 'OnesyIconMaterialCampingW100';

export default IconMaterialCampingW100;
