import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationDisabled'

      short_name='LocationDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M918-478q0 17-11.5 28.5T878-438h-40q-3 26-9 49.5T813-342q-6 15-22 20t-30-3q-14-8-19-23.5t1-31.5q8-23 12.5-47.5T760-478q0-116-82-198t-198-82q-26 0-50.5 4.5T382-741q-16 6-31.5 1T327-759q-8-14-3-30t20-22q23-10 46.5-16t49.5-9v-40q0-17 11.5-28.5T480-916q17 0 28.5 11.5T520-876v40q125 14 214.5 103.5T838-518h40q17 0 28.5 11.5T918-478ZM440-80v-40q-125-14-214.5-103.5T122-438H82q-17 0-28.5-11.5T42-478q0-17 11.5-28.5T82-518h40q5-42 19-79.5t35-72.5l-92-92q-11-11-11-28t11-28q11-11 28-11t28 11l679 679q12 12 12 28.5T819-82q-12 11-28.5 11.5T762-82l-90-92q-35 21-72.5 35T520-120v40q0 17-11.5 28.5T480-40q-17 0-28.5-11.5T440-80Zm40-118q36 0 70-8.5t64-25.5L234-612q-17 30-25.5 64t-8.5 70q0 116 82 198t198 82Z"/>
    </Icon>
  );
});

IconMaterialLocationDisabled.displayName = 'OnesyIconMaterialLocationDisabled';

export default IconMaterialLocationDisabled;
