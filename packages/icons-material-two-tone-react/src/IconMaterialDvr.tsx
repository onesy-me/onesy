import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDvr = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dvr'

      short_name='Dvr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17h18V5H3v12zm5-9h11v2H8V8zm0 4h11v2H8v-2zM5 8h2v2H5V8zm0 4h2v2H5v-2z" opacity=".3"/><path d="M8 12h11v2H8zm0-4h11v2H8zm13-5H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zM5 12h2v2H5zm0-4h2v2H5z"/>
    </Icon>
  );
});

IconMaterialDvr.displayName = 'OnesyIconMaterialDvr';

export default IconMaterialDvr;
