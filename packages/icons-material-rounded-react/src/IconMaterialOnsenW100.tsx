import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOnsenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnsenW100'

      short_name='Onsen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M287-575q-21-28-35-59.5T238-701v-14.5q0-6.5 1-14.5 1-6 5-10t9-4q6 0 10.5 4t3.5 10q-1 7-1.5 13t-.5 13q0 33 14.5 62.5T314-585q20 26 34.5 56t14.5 63v16q0 6-4 10t-10 4q-6 0-10-4t-4-10q0-5 .5-9t.5-9q0-30-15-56.5T287-575Zm130 0q-21-28-35-59.5T368-701v-14.5q0-6.5 1-14.5 1-6 5-10t9-4q6 0 10.5 4t3.5 10q-1 7-1.5 13t-.5 13q0 33 14.5 62.5T444-585q20 26 34.5 56t14.5 63v16q0 6-4 10t-10 4q-6 0-10-4t-4-10q0-5 .5-9t.5-9q0-30-15-56.5T417-575Zm130 0q-21-28-35-59.5T498-701v-14.5q0-6.5 1-14.5 1-6 5-10t9-4q6 0 10.5 4t3.5 10q-1 7-1.5 13t-.5 13q0 33 14.5 62.5T574-585q20 26 34.5 56t14.5 63v16q0 6-4 10t-10 4q-6 0-10-4t-4-10q0-5 .5-9t.5-9q0-30-15-56.5T547-575Zm-67 359q-127 0-215.5-45T176-371q0-24 17.5-48.5T244-464v31q-20 14-30 30t-10 31q0 52 82 90t194 38q112 0 194-38t82-90q0-15-10-31t-30-30v-31q33 20 50.5 44.5T784-371q0 65-88.5 110T480-216Z"/>
    </Icon>
  );
});

IconMaterialOnsenW100.displayName = 'OnesyIconMaterialOnsenW100';

export default IconMaterialOnsenW100;
