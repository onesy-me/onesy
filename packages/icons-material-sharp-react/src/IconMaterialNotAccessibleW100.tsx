import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotAccessibleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessibleW100'

      short_name='NotAccessible'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 614-306H487q-23 0-39.5-16.5T431-362v-127L126-794l20-20 668 668-20 20Zm-389 22q-72 0-124-52t-52-124q0-69 45-118t117-57v28q-62 8-98 50t-36 97q0 62 43 105t105 43q54 0 96.5-35t50.5-99h28q-6 70-56 116t-119 46Zm80-602q-27 0-45.5-18.5T421-770q0-27 18.5-45.5T485-834q27 0 45.5 18.5T549-770q0 27-18.5 45.5T485-706Zm246 238q-58-8-99.5-32T552-564l-21-22v43l-90-90q6-9 17-15t27-6q14 0 27 9.5t29 26.5l31 34q32 35 73 59t86 29v28Z"/>
    </Icon>
  );
});

IconMaterialNotAccessibleW100.displayName = 'OnesyIconMaterialNotAccessibleW100';

export default IconMaterialNotAccessibleW100;
