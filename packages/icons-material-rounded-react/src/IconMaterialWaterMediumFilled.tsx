import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterMediumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterMediumFilled'

      short_name='WaterMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M245-474q47-23 97.5-34.5T445-520q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h19l35-320H210l35 326Zm34 394q-31 0-53.5-20.5T200-151l-70-640q-4-35 19.5-62t59.5-27h542q36 0 59.5 27t19.5 62l-70 640q-3 30-25.5 50.5T681-80H279Z"/>
    </Icon>
  );
});

IconMaterialWaterMediumFilled.displayName = 'OnesyIconMaterialWaterMediumFilled';

export default IconMaterialWaterMediumFilled;
