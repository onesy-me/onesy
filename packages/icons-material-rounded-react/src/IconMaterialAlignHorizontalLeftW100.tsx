import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftW100'

      short_name='AlignHorizontalLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-132q-6 0-10-4t-4-10v-668q0-6 4-10t10-4q6 0 10 4t4 10v668q0 6-4 10t-10 4Zm159-184q-14 0-24.5-10.5T310-351q0-14 10.5-24.5T345-386h168q14 0 24.5 10.5T548-351q0 14-10.5 24.5T513-316H345Zm0-258q-14 0-24.5-10.5T310-609q0-14 10.5-24.5T345-644h408q14 0 24.5 10.5T788-609q0 14-10.5 24.5T753-574H345Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeftW100.displayName = 'OnesyIconMaterialAlignHorizontalLeftW100';

export default IconMaterialAlignHorizontalLeftW100;
