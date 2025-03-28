import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCo2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2W100Filled'

      short_name='Co2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M444-376q-11 0-19.5-8.5T416-404v-152q0-11 8.5-19.5T444-584h112q11 0 19.5 8.5T584-556v152q0 11-8.5 19.5T556-376H444Zm0-28h112v-152H444v152Zm252 134v-76q0-11 8.5-19.5T724-374h92v-62H709q-5 0-9-4t-4-10q0-5 4-9.5t10-4.5h106q11 0 19.5 8.5T844-436v62q0 11-8.5 19.5T816-346h-92v62h106q5 0 9.5 4.5t4.5 9.5q0 6-4.5 10t-9.5 4H710q-6 0-10-4t-4-10ZM164-376q-12 0-20-8t-8-20v-152q0-11 8-19.5t20-8.5h112q11 0 19.5 8.5T304-556v37q0 6-4.5 9.5T290-506q-6 0-10-4t-4-10v-36H164v152h112v-36q0-5 4-9.5t10-4.5q5 0 9.5 4.5t4.5 9.5v36q0 12-8.5 20t-19.5 8H164Z"/>
    </Icon>
  );
});

IconMaterialCo2W100Filled.displayName = 'OnesyIconMaterialCo2W100Filled';

export default IconMaterialCo2W100Filled;
