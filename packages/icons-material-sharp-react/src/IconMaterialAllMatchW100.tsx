import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllMatchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatchW100'

      short_name='AllMatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m250-280 130-200-130-200 130 200-20.5 31Q339-418 315-380.5t-44.5 69L250-280Zm-50 28 146-228-146-228h399l161 228q-8-1-17.5-1.5T725-482L583-680H250l130 200-130 200h226q-2 7-2 13.5t-1 14.5H200Zm496 80 106-104-20-20-86 85-38-39-20 20 58 58Zm24 86q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86Z"/>
    </Icon>
  );
});

IconMaterialAllMatchW100.displayName = 'OnesyIconMaterialAllMatchW100';

export default IconMaterialAllMatchW100;
