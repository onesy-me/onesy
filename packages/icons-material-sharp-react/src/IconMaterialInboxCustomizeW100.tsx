import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInboxCustomizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxCustomizeW100'

      short_name='InboxCustomize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-240h291q6 8 11.5 14.5T515-212H172v-616h616v264q-7-5-13.5-8.5T760-579v-221H200v392h168q9 28 31 48t51 28q2 8 4 15t4 15q-35-5-63-25.5T350-380H200v140Zm0 0h291-291Zm469 28-2-27q-25-5-41.5-14T594-280l-25 12-16-22 23-18q-9-23-9-45t9-46l-23-19 16-22 25 12q14-17 32-26.5t41-14.5l2-27h28l2 27q23 4 40.5 14t32.5 27l25-12 16 22-23 19q10 25 9.5 46.5T789-308l24 18-16 22-25-12q-15 17-31.5 26.5T699-239l-2 27h-28Zm14-54q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialInboxCustomizeW100.displayName = 'OnesyIconMaterialInboxCustomizeW100';

export default IconMaterialInboxCustomizeW100;
