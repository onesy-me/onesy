import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadW100Filled'

      short_name='Download'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-342 356-466l20-20 90 90v-352h28v352l90-90 20 20-124 124ZM212-212v-150h28v122h480v-122h28v150H212Z"/>
    </Icon>
  );
});

IconMaterialDownloadW100Filled.displayName = 'OnesyIconMaterialDownloadW100Filled';

export default IconMaterialDownloadW100Filled;
