import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterListOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListOff'

      short_name='FilterListOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M10.83,8H21V6H8.83L10.83,8z M15.83,13H18v-2h-4.17L15.83,13z M14,16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h0.17 L1.39,4.22l1.41-1.41l18.38,18.38l-1.41,1.41L14,16.83z"/></g>
    </Icon>
  );
});

IconMaterialFilterListOff.displayName = 'OnesyIconMaterialFilterListOff';

export default IconMaterialFilterListOff;
