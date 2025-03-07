import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerifiedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedW100Filled'

      short_name='Verified'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-414-76-76q-4-4-9.5-4.5T342-490q-5 5-5 10t5 10l75 75q9 9 21 9t21-9l159-159q4-4 4.5-9.5T618-574q-5-5-10-5t-10 5L438-414Zm-85 265-51-85-96-20q-11-2-17.5-12t-5.5-21l9-99-65-74q-8-8-8-20t8-20l65-74-9-99q-1-11 5.5-21t17.5-12l96-20 51-85q6-10 16-14t21 1l90 38 90-38q11-5 21-1t16 14l51 85 96 20q11 2 17.5 12t5.5 21l-9 99 65 74q8 8 8 20t-8 20l-65 74 9 99q1 11-5.5 21T754-254l-96 20-51 85q-6 10-16 14t-21-1l-90-38-90 38q-11 5-21 1t-16-14Z"/>
    </Icon>
  );
});

IconMaterialVerifiedW100Filled.displayName = 'OnesyIconMaterialVerifiedW100Filled';

export default IconMaterialVerifiedW100Filled;
