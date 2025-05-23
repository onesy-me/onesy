import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWhatshotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotW100Filled'

      short_name='Whatshot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-95 0-173.5-46.5T182-301l138-139 120 100 217-217v142h28v-190H495v28h140L440-380 320-480 167-328q-17-35-26-73.25T132-480q0-72.21 27.39-135.72 27.39-63.51 74.35-110.49 46.96-46.98 110.43-74.38Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.41 135.73-27.4 63.56-74.38 110.57-46.98 47.02-110.49 74.44Q552.21-132 480-132Z"/>
    </Icon>
  );
});

IconMaterialWhatshotW100Filled.displayName = 'OnesyIconMaterialWhatshotW100Filled';

export default IconMaterialWhatshotW100Filled;
