import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayLesson = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLesson'

      short_name='PlayLesson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h480q33 0 56.5 23.5T760-800v240q0 17-11.5 28.5T720-520q-17 0-28.5-11.5T680-560v-240H480v245q0 11-10 17t-20 0l-70-42-70 42q-10 6-20 0t-10-17v-245h-80v640h200q17 0 28.5 11.5T440-120q0 17-11.5 28.5T400-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-19-119 102-64q10-6 10-17t-10-17l-102-64q-10-6-20.5-.5T670-304v128q0 12 10.5 17.5t20.5-.5ZM290-800h200-200Zm-90 640v-640 262.5-42.5 42.5V-800v640Z"/>
    </Icon>
  );
});

IconMaterialPlayLesson.displayName = 'OnesyIconMaterialPlayLesson';

export default IconMaterialPlayLesson;
