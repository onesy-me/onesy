import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitPageHeight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitPageHeight'

      short_name='FitPageHeight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-600h240L480-720 360-600Zm120 360 120-120H360l120 120ZM800-80H160v-800h640v800Zm-80-80v-640H240v640h480Zm0-640H240h480Z"/>
    </Icon>
  );
});

IconMaterialFitPageHeight.displayName = 'OnesyIconMaterialFitPageHeight';

export default IconMaterialFitPageHeight;
