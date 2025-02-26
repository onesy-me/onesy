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
      <path d="m240-80 640-642v642H240Zm480-80h80v-368l-80 80v288ZM442-436q-24 0-42-18t-18-42q0-24 18-42t42-18q24 0 42 18t18 42q0 24-18 42t-42 18ZM314-568l-52-52q38-38 84-56t96-18q50 0 96 18t84 56l-52 52q-27-27-60-40.5T442-622q-35 0-68 13.5T314-568ZM212-672l-52-50q59-59 132-88.5T442-840q77 0 151 29.5T726-722l-52 50q-48-48-108.5-71T442-766q-63 0-122.5 23T212-672Z"/>
    </Icon>
  );
});

IconMaterialCellWifi.displayName = 'OnesyIconMaterialCellWifi';

export default IconMaterialCellWifi;
