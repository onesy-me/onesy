import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEscalatorWarning = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorWarning'

      short_name='EscalatorWarning'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M6.5,2c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S5.4,2,6.5,2z M15.5,9.5c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S17.83,8,17,8S15.5,8.67,15.5,9.5z M18.5,12h-2.84c-0.58,0.01-1.14,0.32-1.45,0.86l-0.92,1.32L9.72,8C9.35,7.37,8.69,7.01,8.01,7H5 C3.9,7,3,7.9,3,9v6h1.5v7h5V11.61L12.03,16h2.2L15,14.9V22h4v-5h1v-3.5C20,12.68,19.33,12,18.5,12z"/></g>
    </Icon>
  );
});

IconMaterialEscalatorWarning.displayName = 'OnesyIconMaterialEscalatorWarning';

export default IconMaterialEscalatorWarning;
