import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLunchDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LunchDiningW100'

      short_name='LunchDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-168h696v168H132Zm28-140v112h640v-112H160Zm320-154q-35 0-53.5 20T364-426q-44 0-62.5-20T248-466q-35 0-53.5 20T132-426v-28q35 0 53.5-20t62.5-20q44 0 62.5 20t53.5 20q35 0 53.5-20t62.5-20q44 0 62.5 20t53.5 20q35 0 52.5-20t61.5-20q44 0 63.5 20t54.5 20v28q-44 0-61.5-20T714-466q-35 0-54.5 20T596-426q-44 0-62.5-20T480-466ZM132-580v-20q0-88 76-138t272-50q196 0 272 50t76 138v20H132Zm348-180q-166 0-243 40.5T160-608h640q0-71-77-111.5T480-760Zm0 448Zm0-296Z"/>
    </Icon>
  );
});

IconMaterialLunchDiningW100.displayName = 'OnesyIconMaterialLunchDiningW100';

export default IconMaterialLunchDiningW100;
