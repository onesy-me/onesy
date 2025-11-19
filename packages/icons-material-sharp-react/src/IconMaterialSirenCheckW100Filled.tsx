import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSirenCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SirenCheckW100Filled'

      short_name='SirenCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M689-94q-69 0-116.5-47.5T525-258q0-69 47.5-116.5T689-422q69 0 116.5 47.5T853-258q0 69-47.5 116.5T689-94Zm-28-93 122-122-20-20-102 102-46-46-20 20 66 66Zm-529 15v-175h111v-206q0-98 69-166.5T480-788q99 0 168 68.5T717-553v32q-7 0-14-.5t-14-.5q-111 0-188 77.5T424-258q0 22 3.5 43.5T438-172H132Zm223-271h28v-110q0-40 28.5-68t68.5-28v-28q-52 0-88.5 36T355-553v110Z"/>
    </Icon>
  );
});

IconMaterialSirenCheckW100Filled.displayName = 'OnesyIconMaterialSirenCheckW100Filled';

export default IconMaterialSirenCheckW100Filled;
