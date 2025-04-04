import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlatwareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlatwareFilled'

      short_name='Flatware'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-17 0-28.5-11.5T200-160v-360q-33 0-56.5-23.5T120-600v-212q0-12 8-20t20-8q12 0 20 8t8 20v132h36v-132q0-12 8-20t20-8q12 0 20 8t8 20v132h36v-132q0-12 8-20t20-8q12 0 20 8t8 20v212q0 33-23.5 56.5T280-520v360q0 17-11.5 28.5T240-120Zm280 0q-17 0-28.5-11.5T480-160v-364q-42-20-61-62.5T400-676q0-63 31.5-113.5T520-840q57 0 88.5 50.5T640-676q0 47-19 89.5T560-524v364q0 17-11.5 28.5T520-120Zm200 0q-17 0-28.5-11.5T680-160v-633q0-17 11-28.5t28-11.5q45 0 83 48t38 105v200q0 17-11.5 28.5T800-440h-40v280q0 17-11.5 28.5T720-120Z"/>
    </Icon>
  );
});

IconMaterialFlatwareFilled.displayName = 'OnesyIconMaterialFlatwareFilled';

export default IconMaterialFlatwareFilled;
