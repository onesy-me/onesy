import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialControlPointDuplicateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlPointDuplicateW100'

      short_name='ControlPointDuplicate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M218-207q-76-42-121-114.11-45-72.12-45-159Q52-567 97-639q45-72 121-114 9-5 15.5-1.5T240-740q0 2.81-2 5.91-2 3.09-5 5.09-71 35-112 102.27T80-480q0 79.46 41 146.73T233-231q3 2 5 5t2 6q0 10-6.5 14t-15.5-1Zm382.06 35Q536-172 480-196t-98-66q-42-42-66-97.94-24-55.95-24-120Q292-544 316-600t66-98q42-42 97.94-66 55.95-24 120-24Q664-788 720-764t98 66q42 42 66 97.94 24 55.95 24 120Q908-416 884-360t-66 98q-42 42-97.94 66-55.95 24-120 24ZM600-480Zm0 280q117 0 198.5-81.5T880-480q0-117-81.5-198.5T600-760q-117 0-198.5 81.5T320-480q0 117 81.5 198.5T600-200Zm.04-156q5.96 0 9.96-4.02 4-4.03 4-9.98v-96h96q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4h-96v-96q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v96h-96q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h96v96q0 5.95 4.04 9.98 4.03 4.02 10 4.02Z"/>
    </Icon>
  );
});

IconMaterialControlPointDuplicateW100.displayName = 'OnesyIconMaterialControlPointDuplicateW100';

export default IconMaterialControlPointDuplicateW100;
