import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShapesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapesW100Filled'

      short_name='Shapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372.19-360Q277-360 210.5-426.31T144-587.81q0-95.19 66.31-161.69t161.5-66.5q95.19 0 161.69 66.31t66.5 161.5q0 95.19-66.31 161.69T372.19-360ZM420-144q-24.75 0-42.37-17.63Q360-179.25 360-204v-11q0-11 7-18t18-8q68-4 126.5-28.5T618-342q48-48 72.5-106.5T719-575q1-11 8-18t18-7h11q24.75 0 42.38 17.62Q816-564.75 816-540v336q0 24.75-17.62 42.37Q780.75-144 756-144H420Z"/>
    </Icon>
  );
});

IconMaterialShapesW100Filled.displayName = 'OnesyIconMaterialShapesW100Filled';

export default IconMaterialShapesW100Filled;
