import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnfoldMoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreW100'

      short_name='UnfoldMore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-158 334-304l20-20 126 126 126-126 20 20-146 146ZM354-636l-20-20 146-146 146 146-20 20-126-126-126 126Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreW100.displayName = 'OnesyIconMaterialUnfoldMoreW100';

export default IconMaterialUnfoldMoreW100;
