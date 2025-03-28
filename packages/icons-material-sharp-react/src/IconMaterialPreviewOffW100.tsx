import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPreviewOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewOffW100'

      short_name='PreviewOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M485-332q-61 0-111-30t-77-78q20-35 51.5-61t72.5-38l23 23q-35 8-64.5 27.5T327-440q29 38 70.5 59t87.5 21q24 0 47-6.5t44-17.5l21 21q-25 15-53 23t-59 8Zm172-84-19-19q1-2 2-2.5t2-2.5q-14-18-30-31.5T577-496l-47-47q47 10 84 37t58 66q-4 6-7 12t-8 12Zm115 268-24-24H172v-576l-24-24 20-20 624 624-20 20Zm-572-52h520L200-720v520Zm588-85-28-28v-319H441L285-788h503v503Z"/>
    </Icon>
  );
});

IconMaterialPreviewOffW100.displayName = 'OnesyIconMaterialPreviewOffW100';

export default IconMaterialPreviewOffW100;
