import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMapsUgcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapsUgcW100Filled'

      short_name='MapsUgc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m116-116 58-196q-19-40-30.5-82.02Q132-436.03 132-480q0-72.21 27.39-135.72 27.39-63.51 74.35-110.49 46.96-46.98 110.43-74.38Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.41 135.73-27.4 63.56-74.38 110.57-46.98 47.02-110.49 74.44Q552.21-132 480-132q-43.97 0-85.98-11.5Q352-155 312-174l-196 58Zm350-230h28v-120h120v-28H494v-120h-28v120H346v28h120v120Z"/>
    </Icon>
  );
});

IconMaterialMapsUgcW100Filled.displayName = 'OnesyIconMaterialMapsUgcW100Filled';

export default IconMaterialMapsUgcW100Filled;
