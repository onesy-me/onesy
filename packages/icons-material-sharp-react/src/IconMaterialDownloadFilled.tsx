import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownloadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadFilled'

      short_name='Download'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM160-160v-200h80v120h480v-120h80v200H160Z"/>
    </Icon>
  );
});

IconMaterialDownloadFilled.displayName = 'OnesyIconMaterialDownloadFilled';

export default IconMaterialDownloadFilled;
