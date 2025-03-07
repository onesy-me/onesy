import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGenresW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GenresW100Filled'

      short_name='Genres'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M403.76-256q43.24 0 73.74-30.33Q508-316.67 508-360v-288h84q11 0 19.5-8.05T620-676q0-11-8.5-19.5T592-704h-84q-11 0-19.5 8.5T480-676v244q-16-14-35.57-23-19.56-9-40.43-9-43.33 0-73.67 30.26Q300-403.47 300-360.24q0 43.24 30.26 73.74 30.27 30.5 73.5 30.5Zm76.41 124q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialGenresW100Filled.displayName = 'OnesyIconMaterialGenresW100Filled';

export default IconMaterialGenresW100Filled;
