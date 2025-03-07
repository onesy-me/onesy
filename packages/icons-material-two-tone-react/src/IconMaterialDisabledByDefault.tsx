import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisabledByDefault = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefault'

      short_name='DisabledByDefault'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M5,5v14h14V5H5z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7 L17,8.41L13.41,12L17,15.59z" opacity=".3"/><path d="M19,19H5V5h14V19z M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7 L17,8.41L13.41,12L17,15.59z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefault.displayName = 'OnesyIconMaterialDisabledByDefault';

export default IconMaterialDisabledByDefault;
