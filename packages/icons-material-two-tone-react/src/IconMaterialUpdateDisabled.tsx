import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpdateDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateDisabled'

      short_name='UpdateDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><path d="M8.67,5.84L7.22,4.39C8.6,3.51,10.24,3,12,3c2.74,0,5.19,1.23,6.84,3.16L21,4v6h-6l2.41-2.41C16.12,6.02,14.18,5,12,5 C10.8,5,9.66,5.31,8.67,5.84z M13,7h-2v1.17l2,2V7z M19.78,22.61l-3-3C15.39,20.48,13.76,21,12,21c-4.97,0-9-4.03-9-9 c0-1.76,0.51-3.4,1.39-4.78L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M15.32,18.15L5.84,8.67C5.31,9.66,5,10.8,5,12 c0,3.86,3.14,7,7,7C13.2,19,14.34,18.69,15.32,18.15z M20.94,13h-2.02c-0.12,0.83-0.39,1.61-0.77,2.32l1.47,1.47 C20.32,15.67,20.79,14.38,20.94,13z"/>
    </Icon>
  );
});

IconMaterialUpdateDisabled.displayName = 'OnesyIconMaterialUpdateDisabled';

export default IconMaterialUpdateDisabled;
