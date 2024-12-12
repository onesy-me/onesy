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
      <path d="M240-440v-80h480v80H240Z"/>
    </Icon>
  );
});

IconMaterialCheckIndeterminateSmallFilled.displayName = 'OnesyIconMaterialCheckIndeterminateSmallFilled';

export default IconMaterialCheckIndeterminateSmallFilled;
