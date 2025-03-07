import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandscape2Off = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landscape2Off'

      short_name='Landscape2Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M792-55 55-791q-12-12-12-28.5T55-848q12-12 28.5-12t28.5 12l737 737q12 12 12 28t-12 28q-12 12-28.5 12T792-55ZM240-560q-50 0-85-35.5T120-680q0-32 16-59t42-43l164 164q-16 26-43 42t-59 16Zm123 280Zm227-206Zm152-171 115 330q7 19-2 32.5T832-276q-14 5-29-.5T781-301L666-632q-7-21-24.5-34.5T601-680q-23 0-41 13.5T535-631l-2 5q-5 16-19.5 24t-30.5 3q-16-5-24-19.5t-3-30.5l2-5q14-48 53.5-77t89.5-29q48 0 87 28.5t54 74.5ZM184-436q10-20 28.5-32t41.5-12q24 0 44 12.5t29 35.5l27 66q2 6 9 5.5t9-6.5l51-170 65 65-39 128q-9 28-32.5 46T363-280q-27 0-50-14.5T280-335l-27-66-107 219q-5 10-14.5 16t-20.5 6q-23 0-34.5-19T75-218l109-218Z"/>
    </Icon>
  );
});

IconMaterialLandscape2Off.displayName = 'OnesyIconMaterialLandscape2Off';

export default IconMaterialLandscape2Off;
