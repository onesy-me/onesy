import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarpenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Carpenter'

      short_name='Carpenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M563-52 393-221l57-57-326-466 156-156 566 565L563-52Zm-56-283 113-112-340-340-52 52 279 400Zm56 170 169-169-56-57-170 170 57 56Zm-56-170 113-112-113 112Z"/>
    </Icon>
  );
});

IconMaterialCarpenter.displayName = 'OnesyIconMaterialCarpenter';

export default IconMaterialCarpenter;
