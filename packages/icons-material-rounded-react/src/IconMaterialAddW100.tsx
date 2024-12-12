import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddW100'

      short_name='Add'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-466H266q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h200v-200q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v200h200q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494v200q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-200Z"/>
    </Icon>
  );
});

IconMaterialAddW100.displayName = 'OnesyIconMaterialAddW100';

export default IconMaterialAddW100;
