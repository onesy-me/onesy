import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreTimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreTimeFilled'

      short_name='MoreTime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120q-75 0-140.5-28T185-225q-49-49-77-114.5T80-480q0-75 28-140.5T185-735q49-49 114.5-77T440-840q21 0 40.5 2.5T520-830v82q-20-6-39.5-9t-40.5-3q-118 0-199 81t-81 199q0 118 81 199t199 81q118 0 199-81t81-199q0-11-1-20t-3-20h82q2 11 2 20v20q0 75-28 140.5T695-225q-49 49-114.5 77T440-120Zm112-192L400-464v-216h80v184l128 128-56 56Zm168-288v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/>
    </Icon>
  );
});

IconMaterialMoreTimeFilled.displayName = 'OnesyIconMaterialMoreTimeFilled';

export default IconMaterialMoreTimeFilled;
