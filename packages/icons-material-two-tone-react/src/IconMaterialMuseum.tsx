import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMuseum = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Museum'

      short_name='Museum'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M6,20h12V9H6V20z M8,11h2l2,3l2-3h2v7h-2v-4l-2,3l-2-3v4H8V11z" opacity=".3"/><path d="M22,11V9L12,2L2,9v2h2v9H2v2h20v-2h-2v-9H22z M18,20H6V9h12V20z"/><polygon points="10,14 12,17 14,14 14,18 16,18 16,11 14,11 12,14 10,11 8,11 8,18 10,18"/></g></g>
    </Icon>
  );
});

IconMaterialMuseum.displayName = 'OnesyIconMaterialMuseum';

export default IconMaterialMuseum;
