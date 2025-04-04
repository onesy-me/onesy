import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayLessonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonFilled'

      short_name='PlayLesson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m380-580 70 42q10 6 20 .5t10-17.5v-205q0-17-11.5-28.5T440-800H320q-17 0-28.5 11.5T280-760v205q0 12 10 17.5t20-.5l70-42ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-19-119 102-64q10-6 10-17t-10-17l-102-64q-10-6-20.5-.5T670-304v128q0 12 10.5 17.5t20.5-.5ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h480q33 0 56.5 23.5T760-800v253.09q0 11.91-8.5 19.99-8.5 8.09-20.5 8.09-60-1.01-112 17.17-52 18.19-97 63.66-38 38.12-60 88.77-22 50.66-22 108.83 0 29.09 6.5 57.68t17.5 54.67q8 17.05-1 32.55Q454-80 436-80H200Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonFilled.displayName = 'OnesyIconMaterialPlayLessonFilled';

export default IconMaterialPlayLessonFilled;
