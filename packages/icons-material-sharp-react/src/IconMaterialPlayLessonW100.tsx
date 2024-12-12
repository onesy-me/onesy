import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayLessonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonW100'

      short_name='PlayLesson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-696h536v345q-6-1-14-1t-14 1v-317H454v238l-74-44-74 44v-238H200v640h288q2 8 5.5 15t8.5 13H172Zm522 24q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-30-80 94-70-94-70v140ZM306-800h148-148Zm-106 0h480-214 22-288Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonW100.displayName = 'OnesyIconMaterialPlayLessonW100';

export default IconMaterialPlayLessonW100;
