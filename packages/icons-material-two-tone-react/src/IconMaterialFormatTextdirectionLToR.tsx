import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextdirectionLToR = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextdirectionLToR'

      short_name='FormatTextdirectionLToR'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 8V4c-1.1 0-2 .9-2 2s.9 2 2 2z" opacity=".3"/><path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm0-6v4c-1.1 0-2-.9-2-2s.9-2 2-2zm12 14l-4-4v3H5v2h12v3z"/>
    </Icon>
  );
});

IconMaterialFormatTextdirectionLToR.displayName = 'OnesyIconMaterialFormatTextdirectionLToR';

export default IconMaterialFormatTextdirectionLToR;
