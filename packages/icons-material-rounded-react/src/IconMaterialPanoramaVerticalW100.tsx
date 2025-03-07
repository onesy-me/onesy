import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVerticalW100'

      short_name='PanoramaVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M255-131q-18 0-24.5-12.5T229-171q7-23 14.5-54.5T258-296q7-39 11-84.5t4-98.5q0-53-4-99t-11-85q-7-39-14.5-71T229-789q-5-15 1.5-26.5T255-827h450q18 0 24.5 11.5T731-789q-7 23-14.5 55T703-663q-6 39-10 85t-4 99q0 53 4 98.5t10 84.5q6 39 13.5 70.5T731-171q5 15-1.5 27.5T705-131H255Zm45.94-348q0 81-11.47 161.5T255-159h450q-23-78-33.5-158.5T661-479q0-81 10.5-161.5T705-799H255q23 78 34.47 158.5Q300.94-560 300.94-479ZM480-479Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalW100.displayName = 'OnesyIconMaterialPanoramaVerticalW100';

export default IconMaterialPanoramaVerticalW100;
