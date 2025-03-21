import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProductivityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProductivityFilled'

      short_name='Productivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-640q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm240 0q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T584-952q14-5 28-6.5t28-1.5q66 0 113 47t47 113q0 66-47 113t-113 47Zm120 480q-83 0-141.5-58.5T560-360q0-84 58.5-142T760-560q84 0 142 58t58 142q0 83-58 141.5T760-160Zm-28-110 141-142-28-28-113 113-57-57-28 29 85 85ZM80-320v-112q0-34 17.5-62.5T144-538q62-31 126-46.5T400-600q45 0 89 7t88 22q-54 47-78 113.5T483-320H80Z"/>
    </Icon>
  );
});

IconMaterialProductivityFilled.displayName = 'OnesyIconMaterialProductivityFilled';

export default IconMaterialProductivityFilled;
