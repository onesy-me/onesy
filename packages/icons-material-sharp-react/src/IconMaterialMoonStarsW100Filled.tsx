import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoonStarsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoonStarsW100Filled'

      short_name='MoonStars'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m585-661-83-83 83-83 83 83-83 83Zm200 120-43-43 43-43 43 43-43 43ZM483-132q-73 0-137-27.5T234-235q-48-48-75.5-112T131-484q0-108 59.5-196.5T350-809q0 92 34 176t99 149q65 65 149 99t176 34q-40 100-128.5 159.5T483-132Z"/>
    </Icon>
  );
});

IconMaterialMoonStarsW100Filled.displayName = 'OnesyIconMaterialMoonStarsW100Filled';

export default IconMaterialMoonStarsW100Filled;
