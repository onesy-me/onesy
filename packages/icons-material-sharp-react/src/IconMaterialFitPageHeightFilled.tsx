import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitPageHeightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitPageHeightFilled'

      short_name='FitPageHeight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-600h240L480-720 360-600Zm120 360 120-120H360l120 120ZM800-80H160v-800h640v800Z"/>
    </Icon>
  );
});

IconMaterialFitPageHeightFilled.displayName = 'OnesyIconMaterialFitPageHeightFilled';

export default IconMaterialFitPageHeightFilled;
