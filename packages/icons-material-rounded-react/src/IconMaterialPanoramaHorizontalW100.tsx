import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaHorizontalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalW100'

      short_name='PanoramaHorizontal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M170-228q-15 5-26.5-1.5T132-254v-450q0-18 11.5-24.5T170-730q23 7 55 14.5t71 13.5q39 6 85 10t99 4q53 0 98.5-4t84.5-10q39-6 70.5-13.5T788-730q15-5 27.5 1.5T828-704v450q0 18-12.5 24.5T788-228q-23-7-54.5-14.5T663-257q-39-7-84.5-11t-98.5-4q-53 0-99 4t-85 11q-39 7-71 14.5T170-228Zm-10-26q78-23 158.5-34.5T480-300q81 0 161.5 11.5T800-254v-450q-78 23-158.5 33.5T480-660q-81 0-161.5-10.5T160-704v450Zm320-225Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalW100.displayName = 'OnesyIconMaterialPanoramaHorizontalW100';

export default IconMaterialPanoramaHorizontalW100;
