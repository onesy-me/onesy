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
      <path d="M306-466q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h348q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H306Z"/>
    </Icon>
  );
});

IconMaterialCheckIndeterminateSmallW100.displayName = 'OnesyIconMaterialCheckIndeterminateSmallW100';

export default IconMaterialCheckIndeterminateSmallW100;
