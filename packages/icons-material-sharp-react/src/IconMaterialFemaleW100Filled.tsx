import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFemaleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemaleW100Filled'

      short_name='Female'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-146v-80h-80v-28h80v-132q-76-7-128-62.5T286-580q0-80.98 56.5-137.49Q399-774 480-774t137.5 56.51Q674-660.98 674-580q0 76-52 131.5T494-386v132h80v28h-80v80h-28Zm14.16-268q68.84 0 117.34-48.66t48.5-117.5q0-68.84-48.66-117.34T479.84-746Q411-746 362.5-697.34T314-579.84q0 68.84 48.66 117.34t117.5 48.5Z"/>
    </Icon>
  );
});

IconMaterialFemaleW100Filled.displayName = 'OnesyIconMaterialFemaleW100Filled';

export default IconMaterialFemaleW100Filled;
