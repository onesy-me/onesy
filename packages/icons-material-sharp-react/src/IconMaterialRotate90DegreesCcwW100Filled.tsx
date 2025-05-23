import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotate90DegreesCcwW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCcwW100Filled'

      short_name='Rotate90DegreesCcw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M509-132q-41 0-80-11t-74-31l20-20q31 17 65 25.5t69 8.5q117 0 198.5-81.5T789-440q0-117-81.5-198.5T509-720h-66l86 86-20 24-124-124 124-124 20 24-86 86h66q128 0 218 90t90 218q0 64-24 120t-66 98q-42 42-98 66t-120 24ZM269-274 103-440l166-166 166 166-166 166Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCcwW100Filled.displayName = 'OnesyIconMaterialRotate90DegreesCcwW100Filled';

export default IconMaterialRotate90DegreesCcwW100Filled;
