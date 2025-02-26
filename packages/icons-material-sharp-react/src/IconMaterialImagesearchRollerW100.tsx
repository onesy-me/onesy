import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImagesearchRollerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImagesearchRollerW100'

      short_name='ImagesearchRoller'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M563-92H421v-255h57v-198H132v-229h104v-54h512v136H236v-54h-76v173h346v226h57v255Zm-114-28h86v-199h-86v199ZM264-720h456v-80H264v80Zm185 600h86-86ZM264-720v-80 80Z"/>
    </Icon>
  );
});

IconMaterialImagesearchRollerW100.displayName = 'OnesyIconMaterialImagesearchRollerW100';

export default IconMaterialImagesearchRollerW100;
