import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallFilled'

      short_name='CheckSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
    </Icon>
  );
});

IconMaterialCheckSmallFilled.displayName = 'OnesyIconMaterialCheckSmallFilled';

export default IconMaterialCheckSmallFilled;
