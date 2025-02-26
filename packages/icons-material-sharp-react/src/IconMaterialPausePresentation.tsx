import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPausePresentation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentation'

      short_name='PausePresentation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialPausePresentation.displayName = 'OnesyIconMaterialPausePresentation';

export default IconMaterialPausePresentation;
