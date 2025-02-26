import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdW100Filled'

      short_name='Sd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm140-164h168v-118H300v-62h112v20h28v-48H272v118h140v62H300v-20h-28v48Zm248 0h146l22-23v-163l-22-22H520v208Zm28-28v-152h112v152H548Z"/>
    </Icon>
  );
});

IconMaterialSdW100Filled.displayName = 'OnesyIconMaterialSdW100Filled';

export default IconMaterialSdW100Filled;
