import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubject = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subject'

      short_name='Subject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/>
    </Icon>
  );
});

IconMaterialSubject.displayName = 'OnesyIconMaterialSubject';

export default IconMaterialSubject;
