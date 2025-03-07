import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageNotSupportedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedFilled'

      short_name='ImageNotSupported'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.775 22.6-1.6-1.6H5q-.825 0-1.413-.587Q3 19.825 3 19V5.8L1.4 4.2q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.3.3.288.7-.013.4-.313.7-.3.275-.7.287-.4.013-.7-.287ZM7 17h7.175l-2.325-2.325-.85 1.05-1.6-2.175q-.15-.2-.4-.2t-.4.2l-2 2.65q-.2.25-.05.525Q6.7 17 7 17Zm14 1.175L5.825 3H19q.825 0 1.413.587Q21 4.175 21 5Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedFilled.displayName = 'OnesyIconMaterialImageNotSupportedFilled';

export default IconMaterialImageNotSupportedFilled;
