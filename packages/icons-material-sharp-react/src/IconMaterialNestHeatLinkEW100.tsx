import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestHeatLinkEW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestHeatLinkEW100'

      short_name='NestHeatLinkE'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-212q-44.55 0-76.27-31.73Q372-435.45 372-480t31.73-76.28Q435.45-588 480-588t76.28 31.72Q588-524.55 588-480t-31.72 76.27Q524.55-372 480-372Z"/>
    </Icon>
  );
});

IconMaterialNestHeatLinkEW100.displayName = 'OnesyIconMaterialNestHeatLinkEW100';

export default IconMaterialNestHeatLinkEW100;
