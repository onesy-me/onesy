import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Upload'

      short_name='Upload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM160-160v-200h80v120h480v-120h80v200H160Z"/>
    </Icon>
  );
});

IconMaterialUpload.displayName = 'OnesyIconMaterialUpload';

export default IconMaterialUpload;
