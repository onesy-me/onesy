import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayLessonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonW100Filled'

      short_name='PlayLesson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-696h536v345q-6-1-14-1t-14 1q-91 5-152.5 70.5T466-256q0 32 9.5 64.5T502-132H172Zm522 24q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-30-80 94-70-94-70v140ZM306-562l74-44 74 44v-238H306v238Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonW100Filled.displayName = 'OnesyIconMaterialPlayLessonW100Filled';

export default IconMaterialPlayLessonW100Filled;
