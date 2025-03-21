import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewListFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListFilled'

      short_name='ViewList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-480ZM160-600q-17 0-28.5-11.5T120-640v-80q0-17 11.5-28.5T160-760h80q17 0 28.5 11.5T280-720v80q0 17-11.5 28.5T240-600h-80Zm200 0q-17 0-28.5-11.5T320-640v-80q0-17 11.5-28.5T360-760h440q17 0 28.5 11.5T840-720v80q0 17-11.5 28.5T800-600H360Zm0 200q-17 0-28.5-11.5T320-440v-80q0-17 11.5-28.5T360-560h440q17 0 28.5 11.5T840-520v80q0 17-11.5 28.5T800-400H360Zm0 200q-17 0-28.5-11.5T320-240v-80q0-17 11.5-28.5T360-360h440q17 0 28.5 11.5T840-320v80q0 17-11.5 28.5T800-200H360Zm-200 0q-17 0-28.5-11.5T120-240v-80q0-17 11.5-28.5T160-360h80q17 0 28.5 11.5T280-320v80q0 17-11.5 28.5T240-200h-80Zm0-200q-17 0-28.5-11.5T120-440v-80q0-17 11.5-28.5T160-560h80q17 0 28.5 11.5T280-520v80q0 17-11.5 28.5T240-400h-80Z"/>
    </Icon>
  );
});

IconMaterialViewListFilled.displayName = 'OnesyIconMaterialViewListFilled';

export default IconMaterialViewListFilled;
