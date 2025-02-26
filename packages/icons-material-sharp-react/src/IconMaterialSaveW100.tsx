import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSaveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveW100'

      short_name='Save'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-658v486H172v-616h486l130 130Zm-28 12L646-760H200v560h560v-446ZM479.76-316Q508-316 528-335.76q20-19.77 20-48Q548-412 528.24-432q-19.77-20-48-20Q452-452 432-432.24q-20 19.77-20 48Q412-356 431.76-336q19.77 20 48 20ZM280-572h278v-108H280v108Zm-80-74v446-560 114Z"/>
    </Icon>
  );
});

IconMaterialSaveW100.displayName = 'OnesyIconMaterialSaveW100';

export default IconMaterialSaveW100;
