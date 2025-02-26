import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDynamicFeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeedW100Filled'

      short_name='DynamicFeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M204-184q-26 0-43-17t-17-43v-194q0-6 4-10t10-4q6 0 10 4t4 10v194q0 12 10 22t22 10h274q6 0 10 4t4 10q0 6-4 10t-10 4H204Zm148-148q-26 0-43-17t-17-43v-194q0-6 4-10t10-4q6 0 10 4t4 10v194q0 12 10 22t22 10h274q6 0 10 4t4 10q0 6-4 10t-10 4H352Zm148-148q-26 0-43-17t-17-43v-176q0-26 17-43t43-17h256q26 0 43 17t17 43v176q0 26-17 43t-43 17H500Zm0-28h256q12 0 22-10t10-22v-128H468v128q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialDynamicFeedW100Filled.displayName = 'OnesyIconMaterialDynamicFeedW100Filled';

export default IconMaterialDynamicFeedW100Filled;
