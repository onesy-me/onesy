import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeHeatOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatOffW100'

      short_name='ModeHeatOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-428Zm0 0Zm0 0Zm0 0ZM794-74 126-742l20-20 334 334L814-94l-20 20Zm-81-234-20-20q14-26 20.5-54.41Q720-410.82 720-440q0-50-18.5-94.5T648-614q-20 13-42.1 19.5t-45.2 6.5q-62.29 0-107.99-41Q407-670 401-732q-16 12.95-30 26.97Q357-691 344-677l-21-21q23-25 49.5-47t55.5-42v39q0 56.1 38.59 94.05Q505.17-616 561-616q19 0 37.5-6t35.5-17l17-11q46 38 71.5 93.5T748-440q0 35.65-9 69.33Q730-337 713-308ZM480-172q-112.23 0-190.11-77.89Q212-327.77 212-440q0-50 16.5-98.5T274-634l21 21q-27 43-41 86t-14 87q0 74 41.5 135T392-217q-10-14-15-29.5t-5-31.5q0-21 8.5-40.5T404-352l76-75 19 19-76 76q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6.5-29.35Q547-320.7 536-332l20-20 108 108q-36 34-83 53t-101 19Z"/>
    </Icon>
  );
});

IconMaterialModeHeatOffW100.displayName = 'OnesyIconMaterialModeHeatOffW100';

export default IconMaterialModeHeatOffW100;
