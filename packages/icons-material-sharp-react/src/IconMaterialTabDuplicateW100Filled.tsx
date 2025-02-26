import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabDuplicateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabDuplicateW100Filled'

      short_name='TabDuplicate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M277-276v-552h551v552H277Zm-1 144v-40h40v40h-40ZM172-708h-40v-40h40v40Zm248 576v-40h40v40h-40Zm144 0v-40h40v40h-40Zm-432 0v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm576 392h40v40h-40v-40ZM540-682h260v-118H540v118Z"/>
    </Icon>
  );
});

IconMaterialTabDuplicateW100Filled.displayName = 'OnesyIconMaterialTabDuplicateW100Filled';

export default IconMaterialTabDuplicateW100Filled;
