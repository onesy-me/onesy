import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageNotSupported = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupported'

      short_name='ImageNotSupported'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5.825L1.4 4.2q-.275-.275-.287-.688Q1.1 3.1 1.4 2.8q.275-.275.7-.275.425 0 .7.275l18.4 18.4q.3.3.288.7-.013.4-.313.7-.3.275-.7.287-.4.013-.7-.287l-1.6-1.6Zm0-2h11.175l-2-2H7q-.3 0-.45-.275-.15-.275.05-.525l2-2.65q.15-.2.4-.2t.4.2l1.6 2.175.85-1.05L5 7.825V19Zm16-.825-2-2V5H7.825l-2-2H19q.825 0 1.413.587Q21 4.175 21 5Zm-7.525-7.525ZM10.6 13.425Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupported.displayName = 'OnesyIconMaterialImageNotSupported';

export default IconMaterialImageNotSupported;
