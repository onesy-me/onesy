import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftFilled'

      short_name='Draft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560q0 17 11.5 28.5T560-600h160L520-800v160Z"/>
    </Icon>
  );
});

IconMaterialDraftFilled.displayName = 'OnesyIconMaterialDraftFilled';

export default IconMaterialDraftFilled;
