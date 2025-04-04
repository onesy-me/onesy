import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMergeTypeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeTypeW100Filled'

      short_name='MergeType'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-222q-5 5-10.5 4.5T674-222L484-412q-8-8-13-19.5t-5-23.5v-278L346-613q-5 5-10 5t-10-5q-5-5-4.5-10.5t4.5-9.5l133-133q5-5 10-7t11-2q6 0 11 2t10 7l133 133q5 5 5 10t-5 10q-5 5-10.5 4.5T614-613L494-733v278q0 6 2 11.5t7 10.5l191 191q5 5 5 10t-5 10Zm-428 0q-5-5-4.5-10.5t4.5-9.5l128-128q4-4 9.5-4.5T414-370q5 5 5 10t-5 10L286-222q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialMergeTypeW100Filled.displayName = 'OnesyIconMaterialMergeTypeW100Filled';

export default IconMaterialMergeTypeW100Filled;
