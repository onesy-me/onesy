import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubdirectoryArrowLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowLeftW100'

      short_name='SubdirectoryArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-172 212-360l188-188 20 20-154 154h414v-374h28v402H266l154 154-20 20Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowLeftW100.displayName = 'OnesyIconMaterialSubdirectoryArrowLeftW100';

export default IconMaterialSubdirectoryArrowLeftW100;
