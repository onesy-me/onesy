import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMuseumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumFilled'

      short_name='Museum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80h80v-360h-26q-23 0-38.5-16T80-575q0-12 5.5-22t15.5-17l333-234q11-8 22.5-11.5T480-863q12 0 23.5 3.5T526-848l333 234q10 7 15.5 17.5T880-574q0 23-15.5 38.5T826-520h-26v360h80v80H80Zm280-160q17 0 28.5-11.5T400-280v-120l47 70q6 9 14.5 13.5T480-312q10 0 18.5-4.5T513-330l47-70v120q0 17 11.5 28.5T600-240q17 0 28.5-11.5T640-280v-207q0-14-9.5-23.5T607-520h-29q-8 0-15.5 4T550-505l-70 105-68-102q-5-8-14-13t-19-5h-19q-17 0-28.5 11.5T320-480v200q0 17 11.5 28.5T360-240Z"/>
    </Icon>
  );
});

IconMaterialMuseumFilled.displayName = 'OnesyIconMaterialMuseumFilled';

export default IconMaterialMuseumFilled;
