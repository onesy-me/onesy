import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonEditW100Filled'

      short_name='PersonEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M572-202v-23q0-12.44 5-23.72T590-268l193-192q5-4 9.89-6 4.89-2 9.78-2 5.33 0 10.65 2 5.33 2 9.68 6l37 38q4 5 6 10t2 10q0 5-1.5 10t-6.5 10L668-190q-8 8-19.28 13-11.28 5-23.72 5h-23q-12.75 0-21.37-8.63Q572-189.25 572-202Zm-360-60v-22q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q24 0 48.5 3t49.5 8l-79 79q-13.11 12.8-20.06 29.36Q472-272.07 472-254v22H242q-12.75 0-21.37-8.63Q212-249.25 212-262Zm591-102 37-38-37-38-38 38 38 38ZM480-512q-44.55 0-76.27-31.72Q372-575.45 372-620t31.73-76.28Q435.45-728 480-728t76.28 31.72Q588-664.55 588-620t-31.72 76.28Q524.55-512 480-512Z"/>
    </Icon>
  );
});

IconMaterialPersonEditW100Filled.displayName = 'OnesyIconMaterialPersonEditW100Filled';

export default IconMaterialPersonEditW100Filled;
