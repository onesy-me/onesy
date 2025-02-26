import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubdirectoryArrowLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowLeftW100Filled'

      short_name='SubdirectoryArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-172 212-360l188-188 20 20-154 154h414v-374h28v402H266l154 154-20 20Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowLeftW100Filled.displayName = 'OnesyIconMaterialSubdirectoryArrowLeftW100Filled';

export default IconMaterialSubdirectoryArrowLeftW100Filled;
