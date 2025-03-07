import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewInArOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArOff'

      short_name='ViewInArOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M552-522Zm-72 42Zm280-161v327L348-726l132-76 280 161ZM200-319v-323l76-42 204 204 204 204-204 118-280-161Zm323-232Zm-83 94Zm141-36Zm-61 53ZM406-668l117 117 115-68-158-91-74 42Zm34 395v-184l-160-93v185l160 92Zm240-121v-156l-99 57 99 99ZM520-273l106-61-106-106v167ZM818-28l-52-52h-86v-80h14v8L146-700h14v20H80v-86l-54-54 57-57L875-85l-57 57Zm62-252v86l-80-80v-6h80ZM280-880v80h-6l-80-80h86Zm0 800H80v-200h80v120h120v80Zm520-600v-120H680v-80h200v200h-80Z"/>
    </Icon>
  );
});

IconMaterialViewInArOff.displayName = 'OnesyIconMaterialViewInArOff';

export default IconMaterialViewInArOff;
