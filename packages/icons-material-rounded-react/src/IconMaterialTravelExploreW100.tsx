import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTravelExploreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TravelExploreW100'

      short_name='TravelExplore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q133 0 230 85.5T825-529q1 8-2 14.5t-10 6.5q-7 0-11-5.5t-5-12.5q-12-85-64-152.5T600-778v18q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h42q13 0 21.5 8.5T392-450v90h-32L168-552q-3 18-5.5 36t-2.5 36q0 128 87 220.5T464-160q7 0 11.5 4t4.5 10q0 6-5 10t-12 4q-139-7-235-107.5T132-480Zm698 330L699-279q-17 13-37 20t-42 7q-54 0-91-37t-37-91q0-54 37-91t91-37q54 0 91 37t37 91q0 23-7.5 43.5T719-299l131 129q5 4 5 9.5t-5 10.5q-4 4-9.5 4t-10.5-4ZM620-280q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/>
    </Icon>
  );
});

IconMaterialTravelExploreW100.displayName = 'OnesyIconMaterialTravelExploreW100';

export default IconMaterialTravelExploreW100;
