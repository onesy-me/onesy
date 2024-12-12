import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandContentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandContentW100Filled'

      short_name='ExpandContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h146q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H282q-12.75 0-21.37-8.63Q252-269.25 252-282v-144q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v146Zm400-400H534q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h144q12.75 0 21.38 8.62Q708-690.75 708-678v144q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-146Z"/>
    </Icon>
  );
});

IconMaterialExpandContentW100Filled.displayName = 'OnesyIconMaterialExpandContentW100Filled';

export default IconMaterialExpandContentW100Filled;
