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
      <path d="M232-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v267q0 6-4 10t-10 4q-6 0-10-4t-4-10v-267q0-12-10-22t-22-10H454v212q0 9-7.5 13.5T431-575l-51-31-51 31q-8 5-15.5.5T306-588v-212h-74q-12 0-22 10t-10 22v576q0 12 10 22t22 10h218q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm462 24q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-6-98 54-40q6-5 6-12t-6-12l-54-40q-8-5-16-1t-8 13v80q0 9 8 13t16-1ZM306-800h148-148ZM200-160v-640 225.5-31.5 31.5V-800v640Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonW100.displayName = 'OnesyIconMaterialPlayLessonW100';

export default IconMaterialPlayLessonW100;
