import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCheck'

      short_name='NetworkCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M42-558q-18-18-17-43.5T46-643q45-36 94.5-65.5T245-758q55-20 112-30.5T472-800q24 0 39.5 18.5T524-738q-3 25-22 41t-45 17q-43 2-84.5 10.5T291-647q-45 16-85.5 39T129-556q-20 16-45 15.5T42-558Zm257 175q-27 20-51.5 14T209-392q-14-17-14-40t20-39q32-25 68.5-42.5T358-542q28-8 47 5.5t26 34.5q7 21-1.5 43T392-428q-25 8-48.5 19T299-383Zm153 217q-32-11-47-42.5t-1-59.5l240-488q4-8 11.5-10.5t16.5.5q8 3 12 10.5t2 15.5L556-214q-8 32-39.5 46.5T452-166Zm467-396q-15 17-39 21.5T830-557q-8-8-19.5-15.5T790-586q-27-18-30-42t8-43q11-19 32.5-27t44.5 6q17 11 35.5 24.5T914-642q21 17 20.5 40T919-562ZM791-348q-16 16-39.5 19T705-346l-5.5-5.5Q696-355 693-357q-24-20-24-44t14-42q14-18 38-23.5t47 13.5q5 5 11.5 10.5T791-432q20 20 18 44t-18 40Z"/>
    </Icon>
  );
});

IconMaterialNetworkCheck.displayName = 'OnesyIconMaterialNetworkCheck';

export default IconMaterialNetworkCheck;
