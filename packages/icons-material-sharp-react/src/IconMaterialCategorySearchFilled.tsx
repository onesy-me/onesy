import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCategorySearchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategorySearchFilled'

      short_name='CategorySearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-140v-320h320v320H80Zm140-420 220-360 220 360H220ZM863-42 757-148q-21 14-45.5 21t-51.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T813-204L919-98l-56 56ZM660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/>
    </Icon>
  );
});

IconMaterialCategorySearchFilled.displayName = 'OnesyIconMaterialCategorySearchFilled';

export default IconMaterialCategorySearchFilled;
