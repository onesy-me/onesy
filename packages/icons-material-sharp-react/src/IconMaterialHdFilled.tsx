import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdFilled'

      short_name='Hd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h60v-80h80v80h60v-240h-60v100h-80v-100h-60v240Zm280 0h170l30-30v-180l-30-30H520v240Zm60-60v-120h80v120h-80ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialHdFilled.displayName = 'OnesyIconMaterialHdFilled';

export default IconMaterialHdFilled;
