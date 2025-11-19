import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusPencilW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusPencilW100'

      short_name='StylusPencil'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m288-356 170-432h43l170 432H288Zm41-28h301L480-765 329-384Zm0 0h301-301ZM212-172l31-84h474l31 84H212Z"/>
    </Icon>
  );
});

IconMaterialStylusPencilW100.displayName = 'OnesyIconMaterialStylusPencilW100';

export default IconMaterialStylusPencilW100;
