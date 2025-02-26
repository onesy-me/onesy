import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowForwardIosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosW100Filled'

      short_name='ArrowForwardIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m320-116-34-34 330-330-330-330 34-34 364 364-364 364Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosW100Filled.displayName = 'OnesyIconMaterialArrowForwardIosW100Filled';

export default IconMaterialArrowForwardIosW100Filled;
