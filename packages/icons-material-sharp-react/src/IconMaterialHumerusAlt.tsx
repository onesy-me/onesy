import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumerusAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusAlt'

      short_name='HumerusAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-320q17 0 28.5-11.5T440-360v-4q0-2-1-4 17 0 29-11.5t12-28.5q0-17-11.5-28.5T440-448q-8 0-15.5 3.5T412-436L309-552q5-5 8-12.5t3-15.5q0-17-11.5-28.5T280-620q-17 0-28.5 11.5T240-580v4q0 2 1 4-17 0-29 11.5T200-532q0 17 11.5 28.5T240-492q9 0 16.5-3.5T269-505l103 116q-6 5-9 13t-3 16q0 17 11.5 28.5T400-320ZM80-449l44-70 316 297q12 11 26.5 16.5T495-200q12 0 23-3.5t20-8.5l342-216v94L580-145q-19 12-40.5 18.5T494-120q-30 0-58-11.5T385-164L80-449Zm177-283 43-68q75 37 139 101.5T535-564q36-38 79.5-60.5T736-668q46-13 79.5-25t64.5-27v88q-27 11-56.5 21T757-591q-84 22-125.5 49T554-458q-5 8-14 13t-20 5q-14 0-25-9t-14-22q-18-76-80.5-149T257-732ZM124-519q72 67 158 148.5T440-222q12 11 26.5 16.5T495-200q12 0 23-3.5t20-8.5q63-39 165-103.5T880-428L538-212q-9 5-20 8.5t-23 3.5q-14 0-28.5-5.5T440-222L124-519Z"/>
    </Icon>
  );
});

IconMaterialHumerusAlt.displayName = 'OnesyIconMaterialHumerusAlt';

export default IconMaterialHumerusAlt;
