import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Api'

      short_name='Api'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M14,12l-2,2l-2-2l2-2L14,12z M12,6l2.12,2.12l2.5-2.5L12,1L7.38,5.62l2.5,2.5L12,6z M6,12l2.12-2.12l-2.5-2.5L1,12 l4.62,4.62l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5L23,12l-4.62-4.62l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5L12,23l4.62-4.62 l-2.5-2.5L12,18z"/></g>
    </Icon>
  );
});

IconMaterialApi.displayName = 'OnesyIconMaterialApi';

export default IconMaterialApi;
