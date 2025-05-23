import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSevereColdW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SevereColdW100'

      short_name='SevereCold'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-586q-6 0-10-4t-4-10q0-5 4-9.5t10-4.5q5 0 9.5 4.5t4.5 9.5q0 6-4.5 10t-9.5 4ZM426-287 305-166q-4 4-9.5 4t-9.5-4q-4-4-4-9.5t4-9.5l140-140v-101H325L185-286q-4 4-9.5 4t-9.5-4q-4-4-4-9.5t4-9.5l121-121H119q-5 0-9-4t-4-10q0-5 4-9.5t10-4.5h167L166-574q-4-4-4-9.5t4-9.5q4-4 9.5-4t9.5 4l140 139h101v-101L286-694q-4-4-4-9.5t4-9.5q4-4 9.5-4t9.5 4l121 120v-167q0-5 4-9.5t10-4.5q5 0 9.5 4.5t4.5 9.5v167l120-120q4-4 9.5-4t9.5 4q4 4 4 9.5t-4 9.5L454-555v101h306q5 0 9.5 4.5t4.5 9.5q0 6-4.5 10t-9.5 4H593l120 121q4 4 4 9.5t-4 9.5q-4 4-9.5 4t-9.5-4L555-426H454v101l139 140q4 4 4 9.5t-4 9.5q-4 4-9.5 4t-9.5-4L454-287v168q0 5-4.5 9t-9.5 4q-6 0-10-4t-4-10v-167Zm374-407q-6 0-10-4t-4-10v-132q0-5 4-9.5t10-4.5q5 0 9.5 4.5t4.5 9.5v133q0 5-4.5 9t-9.5 4Z"/>
    </Icon>
  );
});

IconMaterialSevereColdW100.displayName = 'OnesyIconMaterialSevereColdW100';

export default IconMaterialSevereColdW100;
