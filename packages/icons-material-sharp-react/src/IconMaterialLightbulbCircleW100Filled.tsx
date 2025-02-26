import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightbulbCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbCircleW100Filled'

      short_name='LightbulbCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-96q14 0 25-7.5t16-20.5h-82q5 13 16 20.5t25 7.5Zm-104-88h208v-28H376v28Zm-10-88h228q31.98-24.55 50.99-62.27Q664-504 664-548q0-76.36-53.82-130.18Q556.36-732 480-732q-76.36 0-130.18 53.82Q296-624.36 296-548q0 44 19.01 81.73Q334.02-428.55 366-404Zm11-28q-24.65-23.66-38.83-53.83Q324-516 324-548.26q0-64.52 45.69-110.13Q415.37-704 480-704t110.31 45.61Q636-612.78 636-548.26q0 32.26-14.17 62.43Q607.65-455.66 583-432H377Z"/>
    </Icon>
  );
});

IconMaterialLightbulbCircleW100Filled.displayName = 'OnesyIconMaterialLightbulbCircleW100Filled';

export default IconMaterialLightbulbCircleW100Filled;
