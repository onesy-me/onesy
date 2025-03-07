import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoofing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Roofing'

      short_name='Roofing'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><rect height="2" opacity=".3" width="2" x="11" y="16"/><path d="M13,18h-2v-2h2V18z M15,14H9v6h6V14L15,14z M19,9.3L19,9.3V4h-3v2.6v0L12,3L2,12h3l7-6.31L19,12h3L19,9.3z"/>
    </Icon>
  );
});

IconMaterialRoofing.displayName = 'OnesyIconMaterialRoofing';

export default IconMaterialRoofing;
