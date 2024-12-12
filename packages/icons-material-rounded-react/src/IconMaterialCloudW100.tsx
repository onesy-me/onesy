import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudW100'

      short_name='Cloud'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-212q-70 0-119-49T92-380q0-66 47-117t115-51q10-86 74.5-143T480-748q95 0 161.5 66.5T708-520v52h32q54 0 91 37t37 91q0 54-37 91t-91 37H260Zm0-28h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z"/>
    </Icon>
  );
});

IconMaterialCloudW100.displayName = 'OnesyIconMaterialCloudW100';

export default IconMaterialCloudW100;
