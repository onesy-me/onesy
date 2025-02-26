import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackW100Filled'

      short_name='ArrowBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m266-466 234 234-20 20-268-268 268-268 20 20-234 234h482v28H266Z"/>
    </Icon>
  );
});

IconMaterialArrowBackW100Filled.displayName = 'OnesyIconMaterialArrowBackW100Filled';

export default IconMaterialArrowBackW100Filled;
