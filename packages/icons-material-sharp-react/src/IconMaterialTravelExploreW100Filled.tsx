import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTravelExploreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TravelExploreW100Filled'

      short_name='TravelExplore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q138 0 237 92.5T827-508h-28q-8-91-61-163.5T600-778v18q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h72v120h-32L168-552q-3 18-5.5 36t-2.5 36q0 131 92 225t228 95v28Zm360-8L699-279q-17 13-37 20t-42 7q-54 0-91-37t-37-91q0-54 37-91t91-37q54 0 91 37t37 91q0 23-7.5 43.5T719-299l141 139-20 20ZM620-280q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/>
    </Icon>
  );
});

IconMaterialTravelExploreW100Filled.displayName = 'OnesyIconMaterialTravelExploreW100Filled';

export default IconMaterialTravelExploreW100Filled;
