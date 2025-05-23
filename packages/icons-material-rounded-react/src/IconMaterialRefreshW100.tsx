import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRefreshW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RefreshW100'

      short_name='Refresh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M484-212q-112.23 0-190.11-77.84-77.89-77.84-77.89-190T293.89-670q77.88-78 190.11-78 72 0 134 35.5t98 98.5v-120q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v144q0 12.75-8.62 21.37Q726.75-560 714-560H570q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h128q-31-61-88-96.5T484-720q-100 0-170 70t-70 170q0 100 70 170t170 70q72.51 0 132.75-40Q677-320 705-386q2-6 7.5-8.5t11.31-.5q6.19 2 7.69 8t-.5 12q-31 74-98 118.5Q565.99-212 484-212Z"/>
    </Icon>
  );
});

IconMaterialRefreshW100.displayName = 'OnesyIconMaterialRefreshW100';

export default IconMaterialRefreshW100;
