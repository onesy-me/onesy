import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileUpload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileUpload'

      short_name='FileUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 16V7.85l-2.6 2.6L7 9l5-5 5 5-1.4 1.45-2.6-2.6V16Zm-7 4v-5h2v3h12v-3h2v5Z"/>
    </Icon>
  );
});

IconMaterialFileUpload.displayName = 'OnesyIconMaterialFileUpload';

export default IconMaterialFileUpload;
