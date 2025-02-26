import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubdirectoryArrowLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowLeft'

      short_name='SubdirectoryArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-120 160-360l241-241 56 57-144 144h367v-400h80v480H313l144 143-57 57Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowLeft.displayName = 'OnesyIconMaterialSubdirectoryArrowLeft';

export default IconMaterialSubdirectoryArrowLeft;
