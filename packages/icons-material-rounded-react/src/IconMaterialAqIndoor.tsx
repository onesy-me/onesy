import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAqIndoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AqIndoor'

      short_name='AqIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M550-280q20 0 39-8t33-22l18-18q9-9 9-21t-9-21q-9-9-21-9t-21 9l-18 18q-6 6-14 8.5t-16 2.5q-8 0-16-2.5t-14-8.5l-38-38q-14-14-33-21.5t-39-7.5q-20 0-39 7.5T338-390l-18 18q-9 9-9 21t9 21q9 9 21 9t21-9l18-18q6-6 14-8.5t16-2.5q8 0 16 2.5t14 8.5l38 38q14 14 33 22t39 8Zm0-120q20 0 39-8t33-22l18-18q9-9 9-21t-9-21q-9-9-21-9t-21 9l-18 18q-6 6-14 8.5t-16 2.5q-8 0-16-2.5t-14-8.5l-38-38q-14-14-33-21.5t-39-7.5q-20 0-39 7.5T338-510l-18 18q-9 9-9 21t9 21q9 9 21 9t21-9l18-18q6-6 14-8.5t16-2.5q8 0 16 2.5t14 8.5l38 38q14 14 33 22t39 8Zm0-120q20 0 39-8t33-22l18-18q9-9 9-21t-9-21q-9-9-21-9t-21 9l-18 18q-6 6-14 8.5t-16 2.5q-8 0-16-2.5t-14-8.5l-38-38q-14-14-33-21.5t-39-7.5q-20 0-39 7.5T338-630l-18 18q-9 9-9 21t9 21q9 9 21 9t21-9l18-18q6-6 14-8.5t16-2.5q8 0 16 2.5t14 8.5l38 38q14 14 33 22t39 8ZM240-160q-33 0-56.5-23.5T160-240v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-160H240Zm0-80h480v-360L480-780 240-600v360Zm240-270Z"/>
    </Icon>
  );
});

IconMaterialAqIndoor.displayName = 'OnesyIconMaterialAqIndoor';

export default IconMaterialAqIndoor;
