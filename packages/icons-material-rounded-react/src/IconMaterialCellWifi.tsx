import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCellWifi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellWifi'

      short_name='CellWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-80q-27 0-37-24.5t9-43.5l504-505q19-19 43.5-9t24.5 37v485q0 25-17.5 42.5T820-80H336Zm384-80h80v-368l-80 80v288ZM442-436q-24 0-42-18t-18-42q0-24 18-42t42-18q24 0 42 18t18 42q0 24-18 42t-42 18Zm0-186q-26 0-51.5 7.5T342-591q-13 8-28 8t-26-11q-11-11-10.5-26t12.5-24q34-25 72.5-37.5T442-694q41 0 79.5 12.5T594-644q12 9 12.5 24T596-594q-11 11-26 11t-28-8q-23-16-48.5-23.5T442-622Zm0-144q-54 0-105.5 17T240-697q-12 10-27.5 10.5T186-697q-11-11-10-26t13-25q55-46 120-69t133-23q68 0 133.5 23T697-748q12 10 13 25t-10 26q-11 11-26.5 10.5T646-697q-45-35-97.5-52T442-766Z"/>
    </Icon>
  );
});

IconMaterialCellWifi.displayName = 'OnesyIconMaterialCellWifi';

export default IconMaterialCellWifi;
