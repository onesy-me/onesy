import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResetExposureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetExposureFilled'

      short_name='ResetExposure'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-80h94q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q129 0 226.5 79.5T831-560h-83q-26-88-99-144t-169-56q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-110h80v240H160Zm320 40v-400h400v400H480Zm80-80h240v-240L560-160Z"/>
    </Icon>
  );
});

IconMaterialResetExposureFilled.displayName = 'OnesyIconMaterialResetExposureFilled';

export default IconMaterialResetExposureFilled;
