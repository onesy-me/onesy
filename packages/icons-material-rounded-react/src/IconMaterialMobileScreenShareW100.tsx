import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileScreenShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreenShareW100'

      short_name='MobileScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-370q-6 0-10-4t-4-10v-36q0-39 27.5-66.5T480-514h50v-26q0-5 4.5-7t8.5 2l34 34q5 5 5 11t-5 11l-34 34q-4 4-8.5 2t-4.5-7v-26h-50q-27 0-46.5 19.5T414-420v36q0 6-4 10t-10 4ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-94v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H280Zm0-28h400v-532H280v532Zm0-560h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialMobileScreenShareW100.displayName = 'OnesyIconMaterialMobileScreenShareW100';

export default IconMaterialMobileScreenShareW100;
