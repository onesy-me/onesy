import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrStrong = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrStrong'

      short_name='HdrStrong'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" opacity=".3"/><path d="M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM5 16c2.21 0 4-1.79 4-4S7.21 8 5 8s-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
    </Icon>
  );
});

IconMaterialHdrStrong.displayName = 'OnesyIconMaterialHdrStrong';

export default IconMaterialHdrStrong;
