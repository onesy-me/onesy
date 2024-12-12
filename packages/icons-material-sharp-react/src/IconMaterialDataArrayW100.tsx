import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataArrayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArrayW100'

      short_name='DataArray'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M622-212v-28h98v-480h-98v-28h126v536H622Zm-410 0v-536h126v28h-98v480h98v28H212Z"/>
    </Icon>
  );
});

IconMaterialDataArrayW100.displayName = 'OnesyIconMaterialDataArrayW100';

export default IconMaterialDataArrayW100;
