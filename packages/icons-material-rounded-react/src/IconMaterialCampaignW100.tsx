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
      <path d="M822-466h-92q-6 0-10-4t-4-10q0-6 4-10t10-4h92q6 0 10 4t4 10q0 6-4 10t-10 4ZM671-297q4-5 9.5-6t10.5 3l73 55q5 4 6 9.5t-3 10.5q-4 5-9.5 6t-10.5-3l-73-55q-5-4-6-9.5t3-10.5Zm89-422-73 55q-5 4-10.5 3t-9.5-6q-4-5-3-10.5t6-9.5l73-55q5-4 10.5-3t9.5 6q4 5 3 10.5t-6 9.5ZM226-404h-42q-25 0-42.5-17.5T124-464v-32q0-25 17.5-42.5T184-556h146l101-59q15-9 30-.5t15 25.5v220q0 17-15 25.5t-30-.5l-101-59h-76v136q0 6-4 10t-10 4q-6 0-10-4t-4-10v-136Zm222 36v-224l-110 64H184q-12 0-22 10t-10 22v32q0 12 10 22t22 10h154l110 64Zm108-2v-220q18 17 29 46t11 64q0 35-11 64t-29 46ZM300-480Z"/>
    </Icon>
  );
});

IconMaterialCampaignW100.displayName = 'OnesyIconMaterialCampaignW100';

export default IconMaterialCampaignW100;
