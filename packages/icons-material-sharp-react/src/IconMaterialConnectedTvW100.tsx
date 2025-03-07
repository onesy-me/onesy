import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConnectedTvW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTvW100'

      short_name='ConnectedTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-336h48q-5-18-17.5-30.5T216-384v48Zm142 0h28q0-71-49.73-120.5Q286.55-506 216-506v28q59 0 100.5 41.5T358-336Zm122 0h28q0-60-22.81-113.43-22.81-53.44-62.51-93.17-39.69-39.73-93.07-62.57Q276.23-628 216-628v28q110 0 187 77.08 77 77.09 77 186.92ZM372-172v-80H132v-536h696v536H588v80H372ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialConnectedTvW100.displayName = 'OnesyIconMaterialConnectedTvW100';

export default IconMaterialConnectedTvW100;
