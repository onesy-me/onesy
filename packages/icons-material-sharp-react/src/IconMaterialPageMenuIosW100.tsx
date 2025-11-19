import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageMenuIosW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageMenuIosW100'

      short_name='PageMenuIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h395v28H172Zm0-128v-28h616v28H172Zm0-128v-360h616v360H172Zm28-28h560v-304H200v304Zm0 0v-304 304Z"/>
    </Icon>
  );
});

IconMaterialPageMenuIosW100.displayName = 'OnesyIconMaterialPageMenuIosW100';

export default IconMaterialPageMenuIosW100;
