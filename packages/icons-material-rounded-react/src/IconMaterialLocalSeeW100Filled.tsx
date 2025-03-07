import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalSeeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalSeeW100Filled'

      short_name='LocalSee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-672-36 28q-5 3-9.5 0t-2.5-8l14-46-39-32q-5-3-3-8t7-5h47l15-45q2-5 7-5t7 5l15 45h47q5 0 7 5t-2 8l-39 32 14 46q2 5-2 8t-9 0l-38-28ZM480-288q-48 0-80-32t-32-80q0-48 32-79.5t79-32.5q24 35 52 67.5t59 63.5q-7 41-37 67t-73 26ZM192-132q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l56-61q5-5 10-9t12-6q8-3 15.5 3t6.5 17v4q0 50 14.5 94.5T462-539q-52 7-87 46t-35 93q0 59 40.5 99.5T480-260q48 0 84.5-27.5T614-358l66 60q8 8 18.5 12t21.5 4q11 0 21.5-4t18.5-12q5-4 9-8t9-8q15-13 32.5-5.5T828-292v100q0 26-17 43t-43 17H192Zm528-277q6 0 11-1.5t10-6.5q63-60 127-130.5T932-714q0-100-64-159t-148-59q-84 0-148 59t-64 159q0 96 64 166.5T699-417q5 5 10 6.5t11 1.5Z"/>
    </Icon>
  );
});

IconMaterialLocalSeeW100Filled.displayName = 'OnesyIconMaterialLocalSeeW100Filled';

export default IconMaterialLocalSeeW100Filled;
