import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoLibrary = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibrary'

      short_name='VideoLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h12V4H8v12zm4-10.5l6 4.5-6 4.5v-9z" opacity=".3"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM12 5.5v9l6-4.5z"/>
    </Icon>
  );
});

IconMaterialVideoLibrary.displayName = 'OnesyIconMaterialVideoLibrary';

export default IconMaterialVideoLibrary;
