import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAcute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Acute'

      short_name='Acute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-160q-134 0-227-93t-93-227q0-133 93-226.5T600-800q133 0 226.5 93.5T920-480q0 134-93.5 227T600-160Zm0-80q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm40-256v-104q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600v121q0 8 3.5 15.5T572-451l91 91q12 12 28.5 12t28.5-12q12-12 12-28.5T720-417l-80-79ZM120-600q-17 0-28.5-11.5T80-640q0-17 11.5-28.5T120-680h80q17 0 28.5 11.5T240-640q0 17-11.5 28.5T200-600h-80ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h120q17 0 28.5 11.5T240-480q0 17-11.5 28.5T200-440H80Zm40 160q-17 0-28.5-11.5T80-320q0-17 11.5-28.5T120-360h80q17 0 28.5 11.5T240-320q0 17-11.5 28.5T200-280h-80Zm480-200Z"/>
    </Icon>
  );
});

IconMaterialAcute.displayName = 'OnesyIconMaterialAcute';

export default IconMaterialAcute;
