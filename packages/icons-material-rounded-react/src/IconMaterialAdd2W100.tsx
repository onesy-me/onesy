import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdd2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Add2W100'

      short_name='Add2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.96-172q-5.96 0-9.96-4.02-4-4.03-4-9.98v-280H186q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h280v-280q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v280h280q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494v280q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialAdd2W100.displayName = 'OnesyIconMaterialAdd2W100';

export default IconMaterialAdd2W100;
