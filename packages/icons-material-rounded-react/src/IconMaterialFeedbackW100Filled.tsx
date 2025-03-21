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
      <path d="m244-292-61 61q-14 14-32.5 6.34Q132-232.31 132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm236-98q8.5 0 14.25-5.75T500-410q0-8.5-5.75-14.25T480-430q-8.5 0-14.25 5.75T460-410q0 8.5 5.75 14.25T480-390Zm.04-106q5.96 0 9.96-4.02 4-4.03 4-9.98v-216q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v216q0 5.95 4.04 9.98 4.03 4.02 10 4.02Z"/>
    </Icon>
  );
});

IconMaterialFeedbackW100Filled.displayName = 'OnesyIconMaterialFeedbackW100Filled';

export default IconMaterialFeedbackW100Filled;
