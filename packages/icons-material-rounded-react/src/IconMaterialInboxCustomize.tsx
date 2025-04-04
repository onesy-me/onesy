import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInboxCustomize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxCustomize'

      short_name='InboxCustomize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v161q0 17-11.5 28T800-600q-17 0-28.5-11.5T760-640v-160H200v360h142q12 0 21 5.5t14 14.5q11 17 24.5 28.5T432-372q11 5 17.5 15t6.5 22q0 20-15.5 33.5T402-296q-26-8-45.5-26T320-360H200v120h216q17 0 28.5 11.5T456-200q0 17-11.5 28.5T416-160H200Zm0-80h253-253Zm469 60q-12-5-22.5-10.5T625-204l-43 13q-7 2-13-.5t-10-8.5l-24-40q-4-6-2-13t7-12l33-29q-2-12-2-26t2-26l-33-29q-5-5-7-12t2-13l24-40q4-6 10-8.5t13-.5l43 13q11-8 21.5-13.5T669-460l9-44q2-7 6.5-11.5T697-520h48q8 0 12.5 4.5T764-504l9 44q12 5 22.5 10.5T817-436l43-13q7-2 13 .5t10 8.5l24 40q4 6 2 13t-7 12l-33 29q2 12 2 26t-2 26l33 29q5 5 7 12t-2 13l-24 40q-4 6-10 8.5t-13 .5l-43-13q-11 8-21.5 13.5T773-180l-9 44q-2 7-6.5 11.5T745-120h-48q-8 0-12.5-4.5T678-136l-9-44Zm52-60q33 0 56.5-23.5T801-320q0-33-23.5-56.5T721-400q-33 0-56.5 23.5T641-320q0 33 23.5 56.5T721-240Z"/>
    </Icon>
  );
});

IconMaterialInboxCustomize.displayName = 'OnesyIconMaterialInboxCustomize';

export default IconMaterialInboxCustomize;
