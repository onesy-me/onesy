import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFontDownload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownload'

      short_name='FontDownload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-240h84l44-122h192l44 122h84L522-720h-84L256-240Zm152-192 70-198h4l70 198H408ZM80-80v-800h800v800H80Zm80-80h640v-640H160v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialFontDownload.displayName = 'OnesyIconMaterialFontDownload';

export default IconMaterialFontDownload;
