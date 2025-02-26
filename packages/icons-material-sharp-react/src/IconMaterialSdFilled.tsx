import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdFilled'

      short_name='Sd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm160-200h200v-140H300v-40h80v20h60v-80H240v140h140v40h-80v-20h-60v80Zm280 0h170l30-30v-180l-30-30H520v240Zm60-60v-120h80v120h-80Z"/>
    </Icon>
  );
});

IconMaterialSdFilled.displayName = 'OnesyIconMaterialSdFilled';

export default IconMaterialSdFilled;
