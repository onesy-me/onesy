import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBluetoothSearchingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothSearchingW100'

      short_name='BluetoothSearching'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-446 202-246q-4 4-9.5 4.5T182-246q-5-5-5-10t5-10l214-214-214-214q-4-4-4.5-9.5T182-714q5-5 10-5t10 5l200 200v-272q0-14 9.5-22t20.5-8q5 0 10.5 2t10.5 7l134 134q5 5 7 10t2 11q0 6-2 11t-7 10L436-480l151 151q5 5 7 10t2 11q0 6-2 11t-7 10L453-153q-5 5-10.5 7t-10.5 2q-11 0-20.5-8t-9.5-22v-272Zm28-68 138-138-138-138v276Zm0 344 138-138-138-138v276Zm220-274-25-25q-5-5-5-11t5-11l25-25q8-8 16.5-6t10.5 13q2 8 2.5 14.5t.5 14.5q0 8-.5 14.5T677-451q-2 11-10.5 13t-16.5-6Zm87 87q-3-3-4-7t1-8q12-26 19-52.5t7-55.5q0-29-7-55.5T734-588q-2-4-1-8t4-7q5-5 11.5-4.5T759-600q14 28 21.5 58t7.5 62q0 32-7.5 62T759-360q-4 7-10.5 7.5T737-357Z"/>
    </Icon>
  );
});

IconMaterialBluetoothSearchingW100.displayName = 'OnesyIconMaterialBluetoothSearchingW100';

export default IconMaterialBluetoothSearchingW100;
