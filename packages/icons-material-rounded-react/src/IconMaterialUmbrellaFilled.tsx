import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUmbrellaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UmbrellaFilled'

      short_name='Umbrella'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m520-368 78-238-36 9-42-31v260Zm-80 0v-260l-42 32-37-10 79 238Zm40 288q-12 0-22.5-6.5T442-107L263-649q-8-23 8-39.5t39-11.5l70 17 60-46v-95q0-40 29-68t71-28q42 0 71 28t29 68q0 17-11.5 28.5T600-784q-17 0-28.5-11.5T560-824q0-8-6-13.5t-14-5.5q-8 0-14 5.5t-6 13.5v95l60 46 70-17q23-5 39 11.5t8 39.5L518-108q-5 14-15.5 21T480-80Z"/>
    </Icon>
  );
});

IconMaterialUmbrellaFilled.displayName = 'OnesyIconMaterialUmbrellaFilled';

export default IconMaterialUmbrellaFilled;
