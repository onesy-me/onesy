import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCampaignW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampaignW100'

      short_name='Campaign'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M716-466v-28h120v28H716Zm42 252-96-72 18-22 96 72-18 22Zm-82-442-18-22 96-72 18 22-96 72ZM226-254v-150H124v-152h206l146-86v324l-146-86h-76v150h-28Zm222-114v-224l-110 64H152v96h186l110 64Zm108-2v-220q18 17 29 46t11 64q0 35-11 64t-29 46ZM300-480Z"/>
    </Icon>
  );
});

IconMaterialCampaignW100.displayName = 'OnesyIconMaterialCampaignW100';

export default IconMaterialCampaignW100;
