import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLapsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LapsW100Filled'

      short_name='Laps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-520q0-95 66.5-161.5T360-748h240q95 0 161.5 66.5T828-520q0 90-60 155t-149 73q-8 1-13.5-2.5T600-305q0-7 6-10.5t14-4.5q78-8 129-65t51-135q0-83-58.5-141.5T600-720H360q-83 0-141.5 58.5T160-520q0 84 58 142.5T360-319h69l-79-80q-4-4-4-9.5t4-9.5q5-5 10-5t10 5l92 92q9 9 9 21t-9 21l-93 93q-4 4-9.5 4t-9.5-4q-5-4-4.5-10t4.5-10l80-80h-70q-95 0-161.5-67T132-520Z"/>
    </Icon>
  );
});

IconMaterialLapsW100Filled.displayName = 'OnesyIconMaterialLapsW100Filled';

export default IconMaterialLapsW100Filled;
