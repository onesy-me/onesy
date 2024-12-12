import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnfoldMoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreW100Filled'

      short_name='UnfoldMore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-158 334-304l20-20 126 126 126-126 20 20-146 146ZM354-636l-20-20 146-146 146 146-20 20-126-126-126 126Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreW100Filled.displayName = 'OnesyIconMaterialUnfoldMoreW100Filled';

export default IconMaterialUnfoldMoreW100Filled;
