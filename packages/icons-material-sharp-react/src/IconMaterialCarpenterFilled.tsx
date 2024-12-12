import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarpenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterFilled'

      short_name='Carpenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M563-52 393-221l57-57-326-466 156-156 566 565L563-52Zm0-113 169-169-56-57-170 170 57 56Z"/>
    </Icon>
  );
});

IconMaterialCarpenterFilled.displayName = 'OnesyIconMaterialCarpenterFilled';

export default IconMaterialCarpenterFilled;
