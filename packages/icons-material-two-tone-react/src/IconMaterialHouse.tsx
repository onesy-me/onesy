import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='House'

      short_name='House'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M7,10.19V18h2v-6h6v6h2v-7.81l-5-4.5L7,10.19z M14,10h-4c0-1.1,0.9-2,2-2S14,8.9,14,10z" opacity=".3"/><path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h6v-6h2v6h6v-8h3L19,9.3z M17,18h-2v-6H9v6H7v-7.81l5-4.5l5,4.5V18z"/><path d="M10,10h4c0-1.1-0.9-2-2-2S10,8.9,10,10z"/></g></g>
    </Icon>
  );
});

IconMaterialHouse.displayName = 'OnesyIconMaterialHouse';

export default IconMaterialHouse;
