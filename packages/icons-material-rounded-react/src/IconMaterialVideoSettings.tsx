import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoSettings = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoSettings'

      short_name='VideoSettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q0 17-11.5 28.5T840-520q-17 0-28.5-11.5T800-560v-160H160v480h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160Zm-60-195v-250q0-18 15.5-26.5T426-630l195 125q14 9 14 25t-14 25L426-330q-15 10-30.5 1.5T380-355ZM711-56l-9-44q-12-5-22.5-10.5T658-124l-43 13q-7 2-13-.5t-10-8.5l-24-40q-4-6-2-13t7-12l33-29q-2-14-2-26t2-26l-33-29q-5-5-7-12t2-13l24-40q4-6 10-8.5t13-.5l43 13q11-8 21.5-13.5T702-380l9-44q2-7 6.5-11.5T730-440h48q8 0 12.5 4.5T797-424l9 44q12 5 22.5 11t21.5 15l42-15q7-2 13.5.5T916-360l24 42q4 6 2.5 13t-6.5 12l-34 29q2 12 2 25t-2 25l33 29q5 5 7 12t-2 13l-24 40q-4 6-10 8.5t-13 .5l-43-13q-11 8-21.5 13.5T806-100l-9 44q-2 7-6.5 11.5T778-40h-48q-8 0-12.5-4.5T711-56Zm43-104q33 0 56.5-23.5T834-240q0-33-23.5-56.5T754-320q-33 0-56.5 23.5T674-240q0 33 23.5 56.5T754-160Z"/>
    </Icon>
  );
});

IconMaterialVideoSettings.displayName = 'OnesyIconMaterialVideoSettings';

export default IconMaterialVideoSettings;
