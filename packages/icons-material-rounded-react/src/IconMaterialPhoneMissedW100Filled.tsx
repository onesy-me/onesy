import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneMissedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedW100Filled'

      short_name='PhoneMissed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m133-209-51-49q-13-12-12.5-29.5T83-318q75-75 181.5-118.5T480-480q109 0 215.5 43.5T877-318q13 13 13.5 30.5T878-258l-51 49q-14 13-30 15t-30-8l-76-58q-13-10-19-21t-6-25v-111q-52-19-95-27t-91-8q-48 0-91 8t-95 27v111q0 14-6 25t-19 21l-76 58q-14 10-30 8t-30-15Zm134-391q-6 0-10-4t-4-10v-144q0-13 8.5-21.5T283-788h144q6 0 10 4t4 10q0 6-4 10t-10 4H301l157 157q9 9 23 9t23-9l176-176q4-4 9.5-4.5T700-779q5 5 5 10t-5 10L523-582q-17 17-42 17t-42-17L281-740v126q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedW100Filled.displayName = 'OnesyIconMaterialPhoneMissedW100Filled';

export default IconMaterialPhoneMissedW100Filled;
