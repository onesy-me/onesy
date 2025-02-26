import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHistoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryW100'

      short_name='History'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-172q-117 0-204-76T173-440h28q17 103 94.5 171.5T478-200q117 0 198.5-81.5T758-480q0-117-81.5-198.5T478-760q-60 0-113 24.5T270-668h96v28H222v-144h28v96q45-47 104-73.5T478-788q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm133-158L467-474v-206h28v194l136 136-20 20Z"/>
    </Icon>
  );
});

IconMaterialHistoryW100.displayName = 'OnesyIconMaterialHistoryW100';

export default IconMaterialHistoryW100;
