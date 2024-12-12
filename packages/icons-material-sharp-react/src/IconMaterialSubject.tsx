import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubject = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subject'

      short_name='Subject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-80h400v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Z"/>
    </Icon>
  );
});

IconMaterialSubject.displayName = 'OnesyIconMaterialSubject';

export default IconMaterialSubject;
