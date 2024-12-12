import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighQualityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualityFilled'

      short_name='HighQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M590-300h60v-60h70v-240H520v240h70v60Zm-350-60h60v-80h80v80h60v-240h-60v100h-80v-100h-60v240Zm340-60v-120h80v120h-80ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialHighQualityFilled.displayName = 'OnesyIconMaterialHighQualityFilled';

export default IconMaterialHighQualityFilled;
