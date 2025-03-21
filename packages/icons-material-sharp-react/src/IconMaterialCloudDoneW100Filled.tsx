import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudDoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDoneW100Filled'

      short_name='CloudDone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m414-316 190-190-20-20-170 170-86-86-20 20 106 106ZM260-212q-70 0-119-49T92-380q0-66 47-117t115-51q10-86 74.5-143T480-748q95 0 161.5 66.5T708-520v52h32q54 0 91 37t37 91q0 54-37 91t-91 37H260Z"/>
    </Icon>
  );
});

IconMaterialCloudDoneW100Filled.displayName = 'OnesyIconMaterialCloudDoneW100Filled';

export default IconMaterialCloudDoneW100Filled;
