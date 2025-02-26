import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPlayW100Filled'

      short_name='PersonPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m213-507-64-64q-9-9-8.5-21t9.5-21l63-63q9-9 21-9t21 9l63 63q9 9 9 21t-9 21l-63 63q-9 9-21 9.5t-21-8.5Zm219 375q-12.75 0-21.37-8.63Q402-149.25 402-162v-149q-53.81-4.14-106.54-11.38Q242.73-329.62 190-341q-7-2-12-6.5t-3-11q2-6.5 8-9.5t13-1q70 16 141.17 23 71.18 7 142.83 7t142.83-7Q694-353 764-369q7-2 13.03.91 6.03 2.91 7.97 9.09 2 7-3 11.5t-12 6.5q-52.73 11.38-105.46 18.62T558-311v149q0 12.75-8.62 21.37Q540.75-132 528-132h-96Zm48-528q-35 0-59.5-24.5T396-744q0-35 24.5-59.5T480-828q35 0 59.5 24.5T564-744q0 35-24.5 59.5T480-660Zm0 249q-26.4 0-45.2-18.8Q416-448.6 416-475q0-26.4 18.8-45.2Q453.6-539 480-539q26.4 0 45.2 18.8Q544-501.4 544-475q0 26.4-18.8 45.2Q506.4-411 480-411Zm190-92-31-54q-4-6.68-4-14.84t4-15.16l31-54q4-7 10.83-11t15.17-4h59q8.34 0 15.17 4T781-641l31 54q4 6.68 4 14.84T812-557l-31 54q-4 7-10.83 11T755-488h-59q-8.34 0-15.17-4T670-503Z"/>
    </Icon>
  );
});

IconMaterialPersonPlayW100Filled.displayName = 'OnesyIconMaterialPersonPlayW100Filled';

export default IconMaterialPersonPlayW100Filled;
