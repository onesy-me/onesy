import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUploadFileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFileW100Filled'

      short_name='UploadFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-264h28v-194l90 90 20-20-124-124-124 124 20 20 90-90v194ZM212-132v-696h374l162 162v534H212Zm360-520h148L572-800v148Z"/>
    </Icon>
  );
});

IconMaterialUploadFileW100Filled.displayName = 'OnesyIconMaterialUploadFileW100Filled';

export default IconMaterialUploadFileW100Filled;
