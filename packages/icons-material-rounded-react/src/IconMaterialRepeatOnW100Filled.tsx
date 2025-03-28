import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepeatOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOnW100Filled'

      short_name='RepeatOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-92q-12 0-20-8t-8-20v-720q0-12 8-20t20-8h720q12 0 20 8t8 20v720q0 12-8 20t-20 8H120Zm106-150h438q25 0 42.5-17.5T724-302v-114q0-6-4-10t-10-4q-6 0-10 4t-4 10v114q0 14-9 23t-23 9H226l80-80q5-5 5-10t-5-10q-5-5-10.5-4.5T286-370l-93 93q-5 5-7 10t-2 11q0 6 2 11t7 10l93 93q5 5 10 5t10-5q5-5 4.5-10.5T306-162l-80-80Zm508-448-80 80q-5 5-5 10t5 10q5 5 10.5 4.5t9.5-4.5l93-93q5-5 7-10t2-11q0-6-2-11t-7-10l-93-93q-5-5-10-5t-10 5q-5 5-4.5 10.5t4.5 9.5l80 80H296q-25 0-42.5 17.5T236-658v114q0 6 4 10t10 4q6 0 10-4t4-10v-114q0-14 9-23t23-9h438Z"/>
    </Icon>
  );
});

IconMaterialRepeatOnW100Filled.displayName = 'OnesyIconMaterialRepeatOnW100Filled';

export default IconMaterialRepeatOnW100Filled;
