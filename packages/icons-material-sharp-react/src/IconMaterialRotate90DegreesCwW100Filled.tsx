import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotate90DegreesCwW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCwW100Filled'

      short_name='Rotate90DegreesCw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M451-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-128 90-218t218-90h66l-86-86 20-24 124 124-124 124-20-24 86-86h-66q-117 0-198.5 81.5T171-440q0 117 81.5 198.5T451-160q35 0 69-8.5t65-25.5l20 20q-35 20-74 31t-80 11Zm240-142L525-440l166-166 166 166-166 166Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCwW100Filled.displayName = 'OnesyIconMaterialRotate90DegreesCwW100Filled';

export default IconMaterialRotate90DegreesCwW100Filled;
