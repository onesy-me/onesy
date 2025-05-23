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
      <path d="M586-356h28v-110h110v-28H614v-110h-28v110H476v28h110v110ZM240-196q-85-38-136.5-114.5T52-480q0-93 51.5-169.5T240-764v32q-74 35-117 103T80-480q0 81 43 149t117 103v32Zm360.06 24Q536-172 480-196t-98-66q-42-42-66-97.94-24-55.95-24-120Q292-544 316-600t66-98q42-42 97.94-66 55.95-24 120-24Q664-788 720-764t98 66q42 42 66 97.94 24 55.95 24 120Q908-416 884-360t-66 98q-42 42-97.94 66-55.95 24-120 24ZM600-480Zm0 280q117 0 198.5-81.5T880-480q0-117-81.5-198.5T600-760q-117 0-198.5 81.5T320-480q0 117 81.5 198.5T600-200Z"/>
    </Icon>
  );
});

IconMaterialControlPointDuplicateW100.displayName = 'OnesyIconMaterialControlPointDuplicateW100';

export default IconMaterialControlPointDuplicateW100;
