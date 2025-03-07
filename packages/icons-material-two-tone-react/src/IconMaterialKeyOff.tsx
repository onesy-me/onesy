import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOff'

      short_name='KeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g opacity=".3"><path d="M10.7,13.53l-1.71-1.71C9,11.88,9,11.94,9,12c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.06,0,0.12,0,0.18,0.01L5.47,8.3 C4.02,8.9,3,10.33,3,12c0,2.21,1.79,4,4,4C8.67,16,10.1,14.98,10.7,13.53z M16.26,13.43l1.24-0.93l1.81,1.36L21.17,12l-1-1 l-6.34,0L16.26,13.43z"/></g><g><path d="M10.7,13.53l-1.71-1.71C9,11.88,9,11.94,9,12c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.06,0,0.12,0,0.18,0.01L5.47,8.3 C4.02,8.9,3,10.33,3,12c0,2.21,1.79,4,4,4C8.67,16,10.1,14.98,10.7,13.53z M12.19,15.02C11.15,16.8,9.21,18,7,18 c-3.31,0-6-2.69-6-6c0-2.21,1.2-4.15,2.98-5.19L1.39,4.22l1.41-1.41l18.38,18.38l-1.41,1.41L12.19,15.02z M16.26,13.43l1.24-0.93 l1.81,1.36L21.17,12l-1-1l-6.34,0l-2-2L21,9l0,0l3,3l-4.5,4.5l-0.69-0.51L16.26,13.43z"/></g></g>
    </Icon>
  );
});

IconMaterialKeyOff.displayName = 'OnesyIconMaterialKeyOff';

export default IconMaterialKeyOff;
