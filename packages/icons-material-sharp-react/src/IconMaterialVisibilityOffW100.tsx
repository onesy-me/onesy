import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVisibilityOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityOffW100'

      short_name='VisibilityOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m610-462-24-24q9-54-30.5-91.5T466-606l-24-24q8-3 17-4.5t21-1.5q57 0 96.5 39.5T616-500q0 12-1.5 22t-4.5 16Zm126 122-22-18q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-22-22q33-12 67-17t67-5q124 0 229 68t155 180q-21 45-52.5 85T736-340Zm52 208L636-284q-24 12-64.5 22T480-252q-125 0-229-68T96-500q24-53 64-99.5t84-76.5L132-788l20-20 656 656-20 20ZM264-656q-36 24-75.5 66.5T128-500q50 101 143.5 160.5T480-280q39 0 79-8t57-16l-74-74q-9 6-28 10t-34 4q-57 0-96.5-39.5T344-500q0-14 4-32.5t10-29.5l-94-94Zm277 125Zm-101 51Z"/>
    </Icon>
  );
});

IconMaterialVisibilityOffW100.displayName = 'OnesyIconMaterialVisibilityOffW100';

export default IconMaterialVisibilityOffW100;
