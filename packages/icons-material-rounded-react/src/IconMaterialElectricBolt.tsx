import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricBolt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBolt'

      short_name='ElectricBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m440-380-237-30q-25-3-32.5-27t10.5-41l409-392q5-5 12-7.5t19-2.5q20 0 30.5 17t.5 35L520-580l237 30q25 3 32.5 27T779-482L370-90q-5 5-12 7.5T339-80q-20 0-30.5-17t-.5-35l132-248Zm62 53 161-154-269-34 63-117-160 154 268 33-63 118Zm-22-153Z"/>
    </Icon>
  );
});

IconMaterialElectricBolt.displayName = 'OnesyIconMaterialElectricBolt';

export default IconMaterialElectricBolt;
