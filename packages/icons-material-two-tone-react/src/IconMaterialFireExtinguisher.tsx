import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireExtinguisher = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireExtinguisher'

      short_name='FireExtinguisher'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M7,19h10v1c0,1.1-0.9,2-2,2H9c-1.1,0-2-0.9-2-2V19z M7,18h10v-5H7V18z M17,3v6l-3.15-0.66c-0.01,0-0.01,0.01-0.02,0.02 c1.55,0.62,2.72,1.98,3.07,3.64H7.1c0.34-1.66,1.52-3.02,3.07-3.64c-0.33-0.26-0.6-0.58-0.8-0.95L5,6.5v-1l4.37-0.91 C9.87,3.65,10.86,3,12,3c0.7,0,1.34,0.25,1.85,0.66L17,3z M13,6c-0.03-0.59-0.45-1-1-1s-1,0.45-1,1s0.45,1,1,1S13,6.55,13,6z"/></g>
    </Icon>
  );
});

IconMaterialFireExtinguisher.displayName = 'OnesyIconMaterialFireExtinguisher';

export default IconMaterialFireExtinguisher;
