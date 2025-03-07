import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFindReplaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindReplaceW100'

      short_name='FindReplace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-720q-69 0-122.5 41T247-574q-2 5-7 8.5t-10 2.5q-6-2-9-7t-1-11q19-73 81.5-120T440-748q89 0 135.5 43t64.5 75v-104q0-6 4-10t10-4q6 0 10 4t4 10v144q0 13-8.5 21.5T638-560H494q-6 0-10-4t-4-10q0-6 4-10t10-4h134q-17-45-63.5-88.5T440-720Zm0 428q-59 0-115-31t-85-87v104q0 6-4 10t-10 4q-6 0-10-4t-4-10v-144q0-13 8.5-21.5T242-480h144q6 0 10 4t4 10q0 6-4 10t-10 4H252q20 57 71.5 94.5T440-320q68 0 121-40.5T632-464q2-6 7-10.5t11-2.5q6 2 9 7t1 11q-6 27-18.5 47.5T610-368l184 184q4 4 4.5 9.5T794-164q-5 5-10 5t-10-5L590-348q-33 29-70.5 42.5T440-292Z"/>
    </Icon>
  );
});

IconMaterialFindReplaceW100.displayName = 'OnesyIconMaterialFindReplaceW100';

export default IconMaterialFindReplaceW100;
