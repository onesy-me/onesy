import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignEndW100Filled'

      short_name='AlignEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Zm190-414q-12.75 0-21.37-8.63Q306-563.25 306-576v-8q0-12.75 8.63-21.38Q323.25-614 336-614h288q12.75 0 21.38 8.62Q654-596.75 654-584v8q0 12.75-8.62 21.37Q636.75-546 624-546H336Zm0 240q-12.75 0-21.37-8.63Q306-323.25 306-336v-8q0-12.75 8.63-21.38Q323.25-374 336-374h288q12.75 0 21.38 8.62Q654-356.75 654-344v8q0 12.75-8.62 21.37Q636.75-306 624-306H336Z"/>
    </Icon>
  );
});

IconMaterialAlignEndW100Filled.displayName = 'OnesyIconMaterialAlignEndW100Filled';

export default IconMaterialAlignEndW100Filled;
