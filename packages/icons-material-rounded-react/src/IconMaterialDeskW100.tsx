import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskW100'

      short_name='Desk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M136-280v-324q0-24.75 17.63-42.38Q171.25-664 196-664h568q24.75 0 42.38 17.62Q824-628.75 824-604v324q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-66H599v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-356H196q-14 0-23 9t-9 23v324q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm463-254h197v-70q0-14-9-23t-23-9H599v102Zm0 160h197v-132H599v132Z"/>
    </Icon>
  );
});

IconMaterialDeskW100.displayName = 'OnesyIconMaterialDeskW100';

export default IconMaterialDeskW100;
