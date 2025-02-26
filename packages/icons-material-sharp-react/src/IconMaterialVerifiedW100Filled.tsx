import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerifiedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedW100Filled'

      short_name='Verified'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m366-126-64-108-122-26 12-126-82-94 82-94-12-126 122-26 64-108 114 48 114-48 64 108 122 26-12 126 82 94-82 94 12 126-122 26-64 108-114-48-114 48Zm72-248 190-190-20-20-170 170-86-86-20 20 106 106Z"/>
    </Icon>
  );
});

IconMaterialVerifiedW100Filled.displayName = 'OnesyIconMaterialVerifiedW100Filled';

export default IconMaterialVerifiedW100Filled;
