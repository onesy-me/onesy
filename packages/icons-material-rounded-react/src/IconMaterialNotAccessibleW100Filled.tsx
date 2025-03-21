import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotAccessibleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessibleW100Filled'

      short_name='NotAccessible'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-136 614-306H487q-23 0-39.5-16.5T431-362v-127L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Zm-379 32q-72 0-124-52t-52-124q0-69 45-118t117-57v28q-62 8-98 50t-36 97q0 62 43 105t105 43q54 0 96.5-35t50.5-99h28q-6 70-56 116t-119 46Zm80-602q-27 0-45.5-18.5T421-770q0-27 18.5-45.5T485-834q27 0 45.5 18.5T549-770q0 27-18.5 45.5T485-706Zm246 224q0 6-5 9.5t-11 1.5q-51-10-89.5-33T552-564l-21-22v43l-90-90q6-9 17-15t27-6q14 0 27 9.5t29 26.5l31 34q30 32 66.5 55t78.5 31q6 2 10 6t4 10Z"/>
    </Icon>
  );
});

IconMaterialNotAccessibleW100Filled.displayName = 'OnesyIconMaterialNotAccessibleW100Filled';

export default IconMaterialNotAccessibleW100Filled;
