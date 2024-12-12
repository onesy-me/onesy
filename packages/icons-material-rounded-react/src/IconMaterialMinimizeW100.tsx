import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMinimizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeW100'

      short_name='Minimize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h400q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H280Z"/>
    </Icon>
  );
});

IconMaterialMinimizeW100.displayName = 'OnesyIconMaterialMinimizeW100';

export default IconMaterialMinimizeW100;
