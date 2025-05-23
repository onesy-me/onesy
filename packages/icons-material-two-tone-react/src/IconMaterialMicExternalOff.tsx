import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicExternalOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOff'

      short_name='MicExternalOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon enableBackground="new" opacity=".3" points="6.21,10 6.81,16 7.19,16 7.73,10.56 7.17,10"/><path d="M10,5c0-1.66-1.34-3-3-3C6.38,2,5.81,2.19,5.33,2.5l4.15,4.15C9.8,6.18,10,5.61,10,5z"/><path d="M14,6c0-1.1,0.9-2,2-2s2,0.9,2,2v9.17l2,2V6c0-2.21-1.79-4-4-4s-4,1.79-4,4v3.17l2,2V6z"/><path d="M2.1,2.1L0.69,3.51L5.17,8H4l1,10h1c0,2.21,1.79,4,4,4s4-1.79,4-4v-1.17l6.49,6.49l1.41-1.41L2.1,2.1z M7.19,16H6.81 l-0.6-6h0.96l0.56,0.56L7.19,16z M12,18c0,1.1-0.9,2-2,2s-2-0.9-2-2h1l0.56-5.61L12,14.83V18z"/></g></g>
    </Icon>
  );
});

IconMaterialMicExternalOff.displayName = 'OnesyIconMaterialMicExternalOff';

export default IconMaterialMicExternalOff;
