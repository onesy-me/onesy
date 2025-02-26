import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCampaignFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampaignFilled'

      short_name='Campaign'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160H80v-240h240l200-120v480L320-360h-40v160h-80Zm360-146v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346Z"/>
    </Icon>
  );
});

IconMaterialCampaignFilled.displayName = 'OnesyIconMaterialCampaignFilled';

export default IconMaterialCampaignFilled;
