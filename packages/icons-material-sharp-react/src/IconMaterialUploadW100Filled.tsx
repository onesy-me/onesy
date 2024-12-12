import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUploadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadW100Filled'

      short_name='Upload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-342v-352l-90 90-20-20 124-124 124 124-20 20-90-90v352h-28ZM212-212v-150h28v122h480v-122h28v150H212Z"/>
    </Icon>
  );
});

IconMaterialUploadW100Filled.displayName = 'OnesyIconMaterialUploadW100Filled';

export default IconMaterialUploadW100Filled;
