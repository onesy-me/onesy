import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatListNumberedRtl = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumberedRtl'

      short_name='FormatListNumberedRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 11h14v2H2zm16 6h2v.5h-1v1h1v.5h-2v1h3v-4h-3zm0-6h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3zm2-3V4h-2v1h1v3zM2 17h14v2H2zM2 5h14v2H2z"/>
    </Icon>
  );
});

IconMaterialFormatListNumberedRtl.displayName = 'OnesyIconMaterialFormatListNumberedRtl';

export default IconMaterialFormatListNumberedRtl;
