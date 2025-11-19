import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBriefcaseMealFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BriefcaseMealFilled'

      short_name='BriefcaseMeal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm-20 520v-120q26-6 43-27.5t17-49.5v-143q0-8-6-14t-14-6q-8 0-14 6t-6 14v131h-30v-131q0-8-6-14t-14-6q-8 0-14 6t-6 14v131h-30v-131q0-8-6-14t-14-6q-8 0-14 6t-6 14v143q0 28 17 49.5t43 27.5v120h60Zm260 0v-88q26-14 43-49.5t17-82.5q0-58-26.5-99T610-560q-38 0-64 41t-26 99q0 46 17 81.5t43 50.5v88h60Z"/>
    </Icon>
  );
});

IconMaterialBriefcaseMealFilled.displayName = 'OnesyIconMaterialBriefcaseMealFilled';

export default IconMaterialBriefcaseMealFilled;
