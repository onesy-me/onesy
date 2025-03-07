import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmoticonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmoticonW100'

      short_name='Emoticon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-306q-14 0-24-10t-10-24.27Q252-354 262-364t24.27-10q13.73 0 23.73 9.92 10 9.91 10 24.08 0 14-9.92 24-9.91 10-24.08 10Zm0-280q-14 0-24-10t-10-24.27Q252-634 262-644t24.27-10q13.73 0 23.73 9.92 10 9.91 10 24.08 0 14-9.92 24-9.91 10-24.08 10Zm154 120q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h80q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-80Zm239-13.72Q679-541 661-596t-50-102q-4-5-4-11.5t5-11q5-4.5 10-3t9 6.5q35 51 55.5 110.92Q707-546.15 707-480q0 54.94-13.5 104.97T655-280q-2.8 5.22-8.4 6.61Q641-272 636-275.5t-5.5-9.5q-.5-6 2.5-12 21.79-41.99 33.89-87.39Q679-429.78 679-479.72Z"/>
    </Icon>
  );
});

IconMaterialEmoticonW100.displayName = 'OnesyIconMaterialEmoticonW100';

export default IconMaterialEmoticonW100;
