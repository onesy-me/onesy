import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInboxCustomizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxCustomizeW100Filled'

      short_name='InboxCustomize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m669-212-2-27q-25-5-41.5-14T594-280l-25 12-16-22 23-18q-9-23-9-45t9-46l-23-19 16-22 25 12q14-17 32-26.5t41-14.5l2-27h28l2 27q23 4 40.5 14t32.5 27l25-12 16 22-23 19q10 25 9.5 46.5T789-308l24 18-16 22-25-12q-15 17-31.5 26.5T699-239l-2 27h-28Zm-497 0v-616h616v264q-7-5-13.5-8.5T760-579v-221H200v392h168q10 29 31 48.5t50 27.5q7 35 23 65.5t42 54.5H172Zm511-54q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialInboxCustomizeW100Filled.displayName = 'OnesyIconMaterialInboxCustomizeW100Filled';

export default IconMaterialInboxCustomizeW100Filled;
