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
      <path d="M160-200v-80h400v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Z"/>
    </Icon>
  );
});

IconMaterialSubjectFilled.displayName = 'OnesyIconMaterialSubjectFilled';

export default IconMaterialSubjectFilled;
