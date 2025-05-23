import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayForWorkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayForWorkW100'

      short_name='PlayForWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-212q-74 0-127.5-50T293-385q-1-6 3-10.5t10-4.5q6 0 10 4t5 9q5 63 50.5 105T480-240q63 0 108.5-42T639-387q1-5 5-9t10-4q6 0 10 4.5t3 10.5q-6 73-59.5 123T480-212Zm-14-202v-270q0-6 4-10t10-4q6 0 10 4t4 10v270l80-80q4-4 9.5-4.5T594-494q5 5 5 10t-5 10l-93 93q-5 5-10 7t-11 2q-6 0-11-2t-10-7l-93-93q-4-4-4.5-9.5T366-494q5-5 10-5t10 5l80 80Z"/>
    </Icon>
  );
});

IconMaterialPlayForWorkW100.displayName = 'OnesyIconMaterialPlayForWorkW100';

export default IconMaterialPlayForWorkW100;
