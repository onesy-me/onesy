import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPsychologyAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychologyAltFilled'

      short_name='PsychologyAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80q-17 0-28.5-11.5T240-120v-132q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v40q0 17-11.5 28.5T560-80H280Zm200-240q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm1-128q11 0 20.5-7.5T514-476q3-12 9.5-23.5T544-526q32-35 42-53t10-41q0-42-32.5-71T483-720q-32 0-60.5 15.5T377-662q-6 10-.5 21t16.5 16q11 5 21.5 1.5T433-638q10-12 23-18.5t27-6.5q22 0 36.5 12t14.5 31q0 16-8.5 30.5T492-549q-19 20-27.5 35.5T453-478q-2 12 6.5 21t21.5 9Z"/>
    </Icon>
  );
});

IconMaterialPsychologyAltFilled.displayName = 'OnesyIconMaterialPsychologyAltFilled';

export default IconMaterialPsychologyAltFilled;
