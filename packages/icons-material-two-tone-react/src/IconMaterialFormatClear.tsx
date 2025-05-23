import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatClear = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClear'

      short_name='FormatClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8V5H6.39l3 3h1.83l-.55 1.28 2.09 2.1L14.21 8zM3.41 4.86L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21l1.41-1.41z"/>
    </Icon>
  );
});

IconMaterialFormatClear.displayName = 'OnesyIconMaterialFormatClear';

export default IconMaterialFormatClear;
