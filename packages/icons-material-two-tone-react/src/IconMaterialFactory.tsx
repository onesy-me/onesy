import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFactory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Factory'

      short_name='Factory'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M12,12l0-2.05l-5,2V10l-3,1.32V20h16v-8H12z M9,18H7v-4h2V18z M13,18h-2v-4h2V18z M17,18h-2v-4h2V18z" opacity=".3"/><path d="M22,22H2V10l7-3v2l5-2l0,3h3l1-8h3l1,8V22z M12,9.95l-5,2V10l-3,1.32V20h16v-8h-8L12,9.95z M11,18h2v-4h-2V18z M7,18h2v-4 H7V18z M17,14h-2v4h2V14z"/></g>
    </Icon>
  );
});

IconMaterialFactory.displayName = 'OnesyIconMaterialFactory';

export default IconMaterialFactory;
