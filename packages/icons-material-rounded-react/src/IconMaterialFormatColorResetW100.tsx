import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatColorResetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorResetW100'

      short_name='FormatColorReset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-112 0-190-76.5T212-434q0-57 23.5-106.5T294-626L140-780q-4-4-4.5-9.5T140-800q5-5 10-5t10 5l646 646q4 4 4.5 9.5T806-134q-5 5-10 5t-10-5L670-250q-33 36-84.5 57T480-172Zm0-28q56 0 101-21.5t69-48.5L314-606q-29 29-51.5 73.5T240-434q0 98 70 166t170 68Zm0-240Zm190-182q54 53 70.5 126.5T736-352q-2 5-5 7t-8 2q-8 0-12-6.5t-1-14.5q23-58 3-126t-63-110L480-768l-86 84q-4 4-9.5 4.5T374-684q-5-5-5-10t5-10l85-83q5-5 10-7t11-2q6 0 11 2t10 7l169 165Zm-103 56Z"/>
    </Icon>
  );
});

IconMaterialFormatColorResetW100.displayName = 'OnesyIconMaterialFormatColorResetW100';

export default IconMaterialFormatColorResetW100;
