import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaHorizontalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalW100Filled'

      short_name='PanoramaHorizontal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M170-228q-15 5-26.5-1.5T132-254v-450q0-18 11.5-24.5T170-730q23 7 55 14.5t71 13.5q39 6 85 10t99 4q53 0 98.5-4t84.5-10q39-6 70.5-13.5T788-730q15-5 27.5 1.5T828-704v450q0 18-12.5 24.5T788-228q-23-7-54.5-14.5T663-257q-39-7-84.5-11t-98.5-4q-53 0-99 4t-85 11q-39 7-71 14.5T170-228Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalW100Filled.displayName = 'OnesyIconMaterialPanoramaHorizontalW100Filled';

export default IconMaterialPanoramaHorizontalW100Filled;
