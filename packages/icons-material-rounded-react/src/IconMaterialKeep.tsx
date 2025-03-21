import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeep = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Keep'

      short_name='Keep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-760v280l68 68q6 6 9 13.5t3 15.5v23q0 17-11.5 28.5T680-320H520v223q0 8-3 15.5T508-68l-14 14q-6 6-14 6t-14-6l-14-14q-6-6-9-13.5T440-97v-223H280q-17 0-28.5-11.5T240-360v-23q0-8 3-15.5t9-13.5l68-68v-280q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760ZM354-400h252l-46-46v-314H400v314l-46 46Zm126 0Z"/>
    </Icon>
  );
});

IconMaterialKeep.displayName = 'OnesyIconMaterialKeep';

export default IconMaterialKeep;
