import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowForwardIosFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosFilled'

      short_name='ArrowForwardIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosFilled.displayName = 'OnesyIconMaterialArrowForwardIosFilled';

export default IconMaterialArrowForwardIosFilled;
