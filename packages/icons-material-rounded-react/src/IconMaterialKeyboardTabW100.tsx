import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardTabW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabW100'

      short_name='KeyboardTab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M813.96-266q-5.96 0-9.96-4.02-4-4.03-4-9.98v-400q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v400q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM647-466H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h500L487-655q-4-4-3.5-9t4.5-9.17q3.67-3.83 9.33-3.83 5.67 0 9.67 4l172 172q5 5 7 10.13 2 5.14 2 11 0 5.87-2 10.87-2 5-7 10L506-286q-3.75 4-9.37 4-5.63 0-9.63-4-5-4-4.5-10t4.5-10l160-160Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabW100.displayName = 'OnesyIconMaterialKeyboardTabW100';

export default IconMaterialKeyboardTabW100;
