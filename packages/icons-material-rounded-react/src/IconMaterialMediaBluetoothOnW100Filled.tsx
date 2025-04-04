import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaBluetoothOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOnW100Filled'

      short_name='MediaBluetoothOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M274-182q-45 0-76.5-31.5T166-290q0-45 31.5-76.5T274-398q23 0 44 9t36 27v-386q0-13 8.5-21.5T384-778h122q13 0 21.5 8.5T536-748v24q0 13-8.5 21.5T506-694H382v404q0 45-31.5 76.5T274-182Zm378-178L526-484q-5-4-5-9.5t5-10.5q5-5 10-5t10 5l110 110v-134q0-14 9.5-22t20.5-8q5 0 10.5 2t10.5 7l66 66q5 5 6.5 10t1.5 11q0 6-2 11t-7 10l-82 81 83 81q5 5 7 10t2 11q0 6-2 11t-7 10l-64 65q-5 5-10.5 7t-10.5 2q-11 0-20.5-8t-9.5-22v-133L548-216q-4 4-9.5 4.5T528-216q-5-5-5-10t5-10l124-124Zm32 172 70-70-70-68v138Zm0-206 70-68-70-70v138Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOnW100Filled.displayName = 'OnesyIconMaterialMediaBluetoothOnW100Filled';

export default IconMaterialMediaBluetoothOnW100Filled;
