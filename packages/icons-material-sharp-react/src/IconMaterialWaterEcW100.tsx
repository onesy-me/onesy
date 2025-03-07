import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterEcW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterEcW100'

      short_name='WaterEc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m466-266 105-198h-77v-150L389-416h77v150Zm13.82 134Q365-132 288.5-211.1T212-408q0-82 66.5-182.5T480-812q135 121 201.5 221.5T748-408q0 117.8-76.68 196.9-76.69 79.1-191.5 79.1Zm.18-28q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-312Z"/>
    </Icon>
  );
});

IconMaterialWaterEcW100.displayName = 'OnesyIconMaterialWaterEcW100';

export default IconMaterialWaterEcW100;
