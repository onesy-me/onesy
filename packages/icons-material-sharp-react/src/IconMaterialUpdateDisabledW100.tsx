import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpdateDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateDisabledW100'

      short_name='UpdateDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 678-242q-41 33-91 51.5T481-172q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-57 19-106.5t52-89.5L126-794l20-20 668 668-20 20Zm-313-74q50 0 95-17t81-46L263-657q-29 37-45.5 81.5T201-480q0 117 81.5 198.5T481-200Zm112-440v-28h96q-42-43-95-67.5T481-760q-37 0-71 8.5T346-726l-20-20q34-20 73-31t82-11q65 0 124 26.5T709-688v-96h28v144H593Zm-98 63-28-28v-75h28v103Zm252 252-21-21q12-22 20-45t12-49h28q-4 32-14 60.5T747-325Z"/>
    </Icon>
  );
});

IconMaterialUpdateDisabledW100.displayName = 'OnesyIconMaterialUpdateDisabledW100';

export default IconMaterialUpdateDisabledW100;
