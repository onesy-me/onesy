import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiveHelpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveHelpW100Filled'

      short_name='LiveHelp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-114-98-98H172v-616h616v616H578l-98 98Zm1-207q11 0 18.5-7.5T507-347q0-11-7.5-18.5T481-373q-11 0-18.5 7.5T455-347q0 11 7.5 18.5T481-321Zm-16-126h28q1-12 3-21t7-18q5-9 13-18.5t19-20.5q27-27 39.5-47.5T587-619q0-45-31-72.5T483-719q-39 0-67.5 21.5T373-649l28 12q11-23 29-38.5t51-15.5q41 0 59.5 22.5T559-619q0 21-11 37t-29 33q-14 14-24.5 26.5T477-498q-7 12-9.5 24.5T465-447Z"/>
    </Icon>
  );
});

IconMaterialLiveHelpW100Filled.displayName = 'OnesyIconMaterialLiveHelpW100Filled';

export default IconMaterialLiveHelpW100Filled;
