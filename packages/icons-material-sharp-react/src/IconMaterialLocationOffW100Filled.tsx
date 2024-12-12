import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffW100Filled'

      short_name='LocationOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 632-288q-31 38-68.5 76.5T480-131Q345-252 276-357t-69-190q0-37 8.5-70.5T239-681L90-830l19-21L872-88l-20 20ZM696-376 537-535q2-5 2.5-9.5t.5-9.5q0-25-17.5-42.5T480-614q-5 0-9.5.5T461-611L306-766q35-29 79-45.5t95-16.5q116 0 194.5 80.5T753-547q0 38-14 81t-43 90Z"/>
    </Icon>
  );
});

IconMaterialLocationOffW100Filled.displayName = 'OnesyIconMaterialLocationOffW100Filled';

export default IconMaterialLocationOffW100Filled;
