import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighQualityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualityW100'

      short_name='HighQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M590-316h28v-60h70v-208H520v208h70v60Zm-318-60h28v-80h112v80h28v-208h-28v100H300v-100h-28v208Zm276-28v-152h112v152H548ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialHighQualityW100.displayName = 'OnesyIconMaterialHighQualityW100';

export default IconMaterialHighQualityW100;
