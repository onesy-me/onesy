import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowForwardIos = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIos'

      short_name='ArrowForwardIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIos.displayName = 'OnesyIconMaterialArrowForwardIos';

export default IconMaterialArrowForwardIos;
