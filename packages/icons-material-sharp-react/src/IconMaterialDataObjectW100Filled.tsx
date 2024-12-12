import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataObjectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataObjectW100Filled'

      short_name='DataObject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M587-212v-28h133v-232h71v-16h-71v-232.26H587V-748h161v238h80v60h-80v238H587Zm-375 0v-238h-80v-60h80v-238h161v28H240v232h-71v16h71v232.26h133V-212H212Z"/>
    </Icon>
  );
});

IconMaterialDataObjectW100Filled.displayName = 'OnesyIconMaterialDataObjectW100Filled';

export default IconMaterialDataObjectW100Filled;
