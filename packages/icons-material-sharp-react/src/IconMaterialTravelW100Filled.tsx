import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTravelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TravelW100Filled'

      short_name='Travel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m305-305-98-53 18-18 91 14 169-169-289-156 22-23 356 90 106-107q10-10 23-10t23 10q10 10 10 23.5T726-680L621-573l89 355-22 23-157-289-167 167 13 92-19 19-53-99Z"/>
    </Icon>
  );
});

IconMaterialTravelW100Filled.displayName = 'OnesyIconMaterialTravelW100Filled';

export default IconMaterialTravelW100Filled;
