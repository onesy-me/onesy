import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighQuality = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQuality'

      short_name='HighQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M590-300h60v-60h70v-240H520v240h70v60Zm-350-60h60v-80h80v80h60v-240h-60v100h-80v-100h-60v240Zm340-60v-120h80v120h-80ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialHighQuality.displayName = 'OnesyIconMaterialHighQuality';

export default IconMaterialHighQuality;
