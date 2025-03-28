import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalFloristW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalFloristW100Filled'

      short_name='LocalFlorist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-561q34 0 56.5-22.5T559-640q0-34-22.5-56.5T480-719q-34 0-56.5 22.5T401-640q0 34 22.5 56.5T480-561Zm0 128q-29 0-52-17.5T397-499q-5 3-11.5 3.5t-12.5.5q-35 0-59.5-24T289-578q0-17 7.5-32.5T315-640q-11-14-18-29.5t-7-32.5q0-35 24-59t59-24q6 0 12.5.5T398-782q8-30 30.5-47.5T480-847q29 0 51.5 17.5T562-782q6-2 12.5-2.5t12.5-.5q35 0 59 24t24 59q0 17-7 33t-18 29q11 14 18 29.5t7 32.5q0 35-24 59t-59 24q-6 0-12.5-.5T561-499q-7 31-29.5 48.5T480-433Zm0 293q0-51 24.5-101t64.5-90q40-40 90-64.5T760-420q0 51-24.5 101T671-229q-40 40-90 64.5T480-140Zm0 0q0-51-24.5-101T391-331q-40-40-90-64.5T200-420q0 51 24.5 101t64.5 90q40 40 90 64.5T480-140Z"/>
    </Icon>
  );
});

IconMaterialLocalFloristW100Filled.displayName = 'OnesyIconMaterialLocalFloristW100Filled';

export default IconMaterialLocalFloristW100Filled;
