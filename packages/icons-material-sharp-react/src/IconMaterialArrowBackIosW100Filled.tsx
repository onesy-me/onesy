import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackIosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosW100Filled'

      short_name='ArrowBackIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-116 36-480l364-364 34 34-330 330 330 330-34 34Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosW100Filled.displayName = 'OnesyIconMaterialArrowBackIosW100Filled';

export default IconMaterialArrowBackIosW100Filled;
