import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddChartFilled'

      short_name='AddChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280q17 0 28.5-11.5T360-320v-200q0-17-11.5-28.5T320-560q-17 0-28.5 11.5T280-520v200q0 17 11.5 28.5T320-280Zm160 0q17 0 28.5-11.5T520-320v-320q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v320q0 17 11.5 28.5T480-280Zm160 0q17 0 28.5-11.5T680-320v-80q0-17-11.5-28.5T640-440q-17 0-28.5 11.5T600-400v80q0 17 11.5 28.5T640-280Zm80-320q-17 0-28.5-11.5T680-640v-40h-40q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h40v-40q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v40h40q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680h-40v40q0 17-11.5 28.5T720-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320q17 0 28.5 11.5T560-800v160q0 33 23.5 56.5T640-560h160q17 0 28.5 11.5T840-520v320q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialAddChartFilled.displayName = 'OnesyIconMaterialAddChartFilled';

export default IconMaterialAddChartFilled;
