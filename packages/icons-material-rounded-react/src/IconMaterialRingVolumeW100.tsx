import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRingVolumeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeW100'

      short_name='RingVolume'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-686q-6 0-10-4t-4-10v-120q0-6 4-10t10-4q6 0 10 4t4 10v120q0 6-4 10t-10 4Zm214 92q-5-5-5-10t5-10l86-84q4-4 9.5-4.5T801-698q5 5 5 10t-5 10l-86 84q-4 4-9.5 4.5T695-594Zm-428 0q-4 4-9.5 4.5T247-593l-87-82q-5-5-5-11t5-11q5-5 11-5t11 5l85 83q5 4 5 9.5t-5 10.5ZM133-209l-51-49q-13-12-12.5-29.5T83-318q75-75 181.5-118.5T480-480q109 0 215.5 43.5T877-318q13 13 13.5 30.5T878-258l-51 49q-14 13-30 15t-30-8l-76-58q-13-10-19-21t-6-25v-111q-52-19-95-27t-91-8q-48 0-91 8t-95 27v111q0 14-6 25t-19 21l-76 58q-14 10-30 8t-30-15Zm133-202q-47 21-91 51t-73 59q-5 5-5 10t5 10l50 49q5 5 12.5 6.5T178-229l76-57q5-4 8.5-10t3.5-11v-104Zm428 0v104q0 5 3.5 11t8.5 10l76 57q6 5 13.5 3.5T808-232l50-49q5-5 5-10t-5-10q-29-29-73-59t-91-51Zm-428-2Zm428 0Z"/>
    </Icon>
  );
});

IconMaterialRingVolumeW100.displayName = 'OnesyIconMaterialRingVolumeW100';

export default IconMaterialRingVolumeW100;
