import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResetWrenchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetWrenchFilled'

      short_name='ResetWrench'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m653-208-46 46q-17 17-42 17.5T522-162q-17-17-17-42.5t17-42.5l46-46q-4-11-6-23t-2-24q0-58 41-99t99-41q9 0 18 .5t17 3.5q11 4 13.5 16.5T743-439l-43 43q-12 12-12 28t12 28q11 11 28 11t28-11l43-43q8-8 20.5-5.5T836-375q3 8 3.5 17t.5 18q0 58-41 99t-99 41q-13 0-24.5-2t-22.5-6Zm-399 8q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q111 0 199 60t130 155q7 16 0 31t-23 21q-15 5-29.5-2T735-597q-33-72-101.5-117.5T480-760q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-70q0-17 11.5-28.5T360-360q17 0 28.5 11.5T400-320v160q0 17-11.5 28.5T360-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h54Z"/>
    </Icon>
  );
});

IconMaterialResetWrenchFilled.displayName = 'OnesyIconMaterialResetWrenchFilled';

export default IconMaterialResetWrenchFilled;
