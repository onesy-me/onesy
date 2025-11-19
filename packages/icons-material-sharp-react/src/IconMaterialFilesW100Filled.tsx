import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilesW100Filled'

      short_name='Files'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-188h348v-348h348v536H132Zm0-191v-265h265L132-403Zm64-25 256-256v256H196Z"/>
    </Icon>
  );
});

IconMaterialFilesW100Filled.displayName = 'OnesyIconMaterialFilesW100Filled';

export default IconMaterialFilesW100Filled;
