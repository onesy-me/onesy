import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeedbackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedbackW100Filled'

      short_name='Feedback'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-180v-648h696v536H244L132-180Zm348-210q8.5 0 14.25-5.75T500-410q0-8.5-5.75-14.25T480-430q-8.5 0-14.25 5.75T460-410q0 8.5 5.75 14.25T480-390Zm-14-106h28v-244h-28v244Z"/>
    </Icon>
  );
});

IconMaterialFeedbackW100Filled.displayName = 'OnesyIconMaterialFeedbackW100Filled';

export default IconMaterialFeedbackW100Filled;
