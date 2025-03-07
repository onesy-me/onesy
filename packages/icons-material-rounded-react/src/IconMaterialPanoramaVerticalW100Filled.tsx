import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaVerticalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVerticalW100Filled'

      short_name='PanoramaVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M255-131q-18 0-24.5-12.5T229-171q7-23 14.5-54.5T258-296q7-39 11-84.5t4-98.5q0-53-4-99t-11-85q-7-39-14.5-71T229-789q-5-15 1.5-26.5T255-827h450q18 0 24.5 11.5T731-789q-7 23-14.5 55T703-663q-6 39-10 85t-4 99q0 53 4 98.5t10 84.5q6 39 13.5 70.5T731-171q5 15-1.5 27.5T705-131H255Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalW100Filled.displayName = 'OnesyIconMaterialPanoramaVerticalW100Filled';

export default IconMaterialPanoramaVerticalW100Filled;
