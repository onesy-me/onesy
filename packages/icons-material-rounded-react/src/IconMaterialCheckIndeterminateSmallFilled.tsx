import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckIndeterminateSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmallFilled'

      short_name='CheckIndeterminateSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520h400q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440H280Z"/>
    </Icon>
  );
});

IconMaterialCheckIndeterminateSmallFilled.displayName = 'OnesyIconMaterialCheckIndeterminateSmallFilled';

export default IconMaterialCheckIndeterminateSmallFilled;
