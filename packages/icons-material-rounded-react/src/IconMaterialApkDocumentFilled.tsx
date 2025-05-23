import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApkDocumentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkDocumentFilled'

      short_name='ApkDocument'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-200h400q-4-49-30-90t-68-65l38-68q2-4 1-9t-6-7q-4-2-8.5-1t-6.5 5l-39 70q-20-8-40-12.5t-41-4.5q-21 0-41 4.5T399-365l-39-70q-2-5-6.5-5t-9.5 2l-4 15 38 68q-42 24-68 65t-30 90Zm110-60q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm180 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560q0 17 11.5 28.5T560-600h160L520-800v160Z"/>
    </Icon>
  );
});

IconMaterialApkDocumentFilled.displayName = 'OnesyIconMaterialApkDocumentFilled';

export default IconMaterialApkDocumentFilled;
