import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubjectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectFilled'

      short_name='Subject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h320q17 0 28.5 11.5T560-240q0 17-11.5 28.5T520-200H200Zm0-160q-17 0-28.5-11.5T160-400q0-17 11.5-28.5T200-440h560q17 0 28.5 11.5T800-400q0 17-11.5 28.5T760-360H200Zm0-160q-17 0-28.5-11.5T160-560q0-17 11.5-28.5T200-600h560q17 0 28.5 11.5T800-560q0 17-11.5 28.5T760-520H200Zm0-160q-17 0-28.5-11.5T160-720q0-17 11.5-28.5T200-760h560q17 0 28.5 11.5T800-720q0 17-11.5 28.5T760-680H200Z"/>
    </Icon>
  );
});

IconMaterialSubjectFilled.displayName = 'OnesyIconMaterialSubjectFilled';

export default IconMaterialSubjectFilled;
