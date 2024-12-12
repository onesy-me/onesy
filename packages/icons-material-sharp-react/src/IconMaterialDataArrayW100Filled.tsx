import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataArrayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArrayW100Filled'

      short_name='DataArray'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M622-212v-28h98v-480h-98v-28h126v536H622Zm-410 0v-536h126v28h-98v480h98v28H212Z"/>
    </Icon>
  );
});

IconMaterialDataArrayW100Filled.displayName = 'OnesyIconMaterialDataArrayW100Filled';

export default IconMaterialDataArrayW100Filled;
