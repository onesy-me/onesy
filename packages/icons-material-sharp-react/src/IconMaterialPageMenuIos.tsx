import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageMenuIos = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageMenuIos'

      short_name='PageMenuIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h480v80H120Zm0-160v-80h720v80H120Zm0-160v-400h720v400H120Zm80-80h560v-240H200v240Zm0 0v-240 240Z"/>
    </Icon>
  );
});

IconMaterialPageMenuIos.displayName = 'OnesyIconMaterialPageMenuIos';

export default IconMaterialPageMenuIos;
