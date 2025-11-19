import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudAlertW100Filled'

      short_name='CloudAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-212q-70 0-119-49T92-380q0-66 47-117t115-51q10-86 74.5-143T480-748q95 0 161.5 66.5T708-520v52h32q54 0 91 37t37 91q0 54-37 91t-91 37H260Zm206-249h28v-153h-28v153Zm0 88h28v-28h-28v28Z"/>
    </Icon>
  );
});

IconMaterialCloudAlertW100Filled.displayName = 'OnesyIconMaterialCloudAlertW100Filled';

export default IconMaterialCloudAlertW100Filled;
