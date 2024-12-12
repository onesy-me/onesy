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
      <path d="M219-132q23-81 38.5-161.5T273-480q0-106-15.5-186.5T219-828h522q-23 81-37.5 161.5T689-480q0 106 14.5 186.5T741-132H219Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalW100Filled.displayName = 'OnesyIconMaterialPanoramaVerticalW100Filled';

export default IconMaterialPanoramaVerticalW100Filled;
