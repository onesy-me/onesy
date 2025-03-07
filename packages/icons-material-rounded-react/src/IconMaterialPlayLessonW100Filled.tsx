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
      <path d="m380-606 51 31q8 5 15.5.5T454-588v-182q0-13-8.5-21.5T424-800h-88q-13 0-21.5 8.5T306-770v182q0 9 7.5 13.5t15.5-.5l51-31Zm314 498q-62 0-105-43t-43-105q0-62 43.5-105T699-404q58 0 100.5 43T842-256q0 62-43 105t-105 43Zm-6-98 54-40q6-5 6-12t-6-12l-54-40q-8-5-16-1t-8 13v80q0 9 8 13t16-1Zm-456 74q-25 0-42.5-17.5T172-192v-576q0-25 17.5-42.5T232-828h416q25 0 42.5 17.5T708-768v264q0 9-6 15t-15 7q-44 3-82 18t-70 47q-32 31-50.5 72T466-256q0 23 4 45t13 43q5 13-1.5 24.5T462-132H232Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonW100Filled.displayName = 'OnesyIconMaterialPlayLessonW100Filled';

export default IconMaterialPlayLessonW100Filled;
