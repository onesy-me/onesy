import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUrologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UrologyW100Filled'

      short_name='Urology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M430-204v71q0 6-4 10t-10 4q-6 0-10-4t-4-10v-71h-2q-22 0-38.5-14T341-254l-2-16q-5-28 13-49t46-21h4v-87q-14 13-30.5 20t-35.5 7q-84 0-139-63.5T142-614v-28q0-87 55-150.5T336-856q39 0 66.5 27.5T430-762q0 39-27.5 66.5T336-668h-40q-6 0-10-4t-4-10q0-6 4-10t10-4h40q27 0 46.5-19.5T402-762q0-27-19.5-46.5T336-828q-72 0-119 55.5T170-642v28q0 75 47 130.5T336-428q27 0 46.5-19.5T402-494q0-27-19.5-46.5T336-560h-40q-6 0-10-4t-4-10q0-6 4-10t10-4h40q39 0 66.5 27.5T430-494v154h100v-154q0-39 27.5-66.5T624-588h40q6 0 10 4t4 10q0 6-4 10t-10 4h-40q-27 0-46.5 19.5T558-494q0 27 19.5 46.5T624-428q72 0 119-55.5T790-614v-28q0-75-47-130.5T624-828q-27 0-46.5 19.5T558-762q0 27 19.5 46.5T624-696h40q6 0 10 4t4 10q0 6-4 10t-10 4h-40q-39 0-66.5-27.5T530-762q0-39 27.5-66.5T624-856q84 0 139 63.5T818-642v28q0 87-55 150.5T624-400q-19 0-35.5-7T558-427v87h4q28 0 46 21t13 49l-2 16q-4 22-20.5 36T560-204h-2v71q0 6-4 10t-10 4q-6 0-10-4t-4-10v-71H430Z"/>
    </Icon>
  );
});

IconMaterialUrologyW100Filled.displayName = 'OnesyIconMaterialUrologyW100Filled';

export default IconMaterialUrologyW100Filled;
