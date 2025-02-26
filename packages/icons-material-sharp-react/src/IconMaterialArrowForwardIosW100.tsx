import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowForwardIosW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosW100'

      short_name='ArrowForwardIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m320-116-34-34 330-330-330-330 34-34 364 364-364 364Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosW100.displayName = 'OnesyIconMaterialArrowForwardIosW100';

export default IconMaterialArrowForwardIosW100;
