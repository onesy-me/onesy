import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrading = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grading'

      short_name='Grading'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M657-121 544-234l56-56 57 57 127-127 56 56-183 183Zm-537 1v-80h360v80H120Zm0-160v-80h360v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialGrading.displayName = 'OnesyIconMaterialGrading';

export default IconMaterialGrading;
