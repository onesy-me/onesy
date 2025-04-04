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
      <path d="M232-212q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v189q0 6-4 9.5t-10 3.5q-6 0-10-4t-4-10v-188q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v360h143q16 0 23 4.5t12 14.5q13 25 37.5 40.5T472-330q5 1 9.5 4.5t4.5 9.5q0 6-4.5 10t-9.5 4q-36 0-69.5-21.5T350-380H200v108q0 14 9 23t23 9h241q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm0-28h-32 291-259Zm435 1q-25-5-41.5-14T594-280l-14 7q-5 2-10 1t-8-6q-4-5-3.5-11t5.5-10l12-9q-9-23-9-45t9-46l-12-10q-5-4-6-9.5t3-10.5l1-1q3-5 8-6t10 1l14 7q14-17 32-26.5t41-14.5l1-13q1-6 5-10t10-4q6 0 10 4t5 10l1 13q23 4 40.5 14t32.5 27l14-7q5-2 10-1t8 6l1 1q4 5 3 10.5t-6 9.5l-12 10q10 25 9.5 46.5T789-308l12 9q3 2 5.5 8t-2.5 13q-3 5-8 6t-10-1l-14-7q-15 17-31.5 26.5T699-239l-1 13q-1 6-5 10t-10 4q-6 0-10-4t-5-10l-1-13Zm16-27q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialInboxCustomizeW100.displayName = 'OnesyIconMaterialInboxCustomizeW100';

export default IconMaterialInboxCustomizeW100;
