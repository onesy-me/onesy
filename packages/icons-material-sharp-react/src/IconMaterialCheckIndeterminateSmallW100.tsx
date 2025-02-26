import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckIndeterminateSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmallW100'

      short_name='CheckIndeterminateSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-466v-28h376v28H292Z"/>
    </Icon>
  );
});

IconMaterialCheckIndeterminateSmallW100.displayName = 'OnesyIconMaterialCheckIndeterminateSmallW100';

export default IconMaterialCheckIndeterminateSmallW100;
