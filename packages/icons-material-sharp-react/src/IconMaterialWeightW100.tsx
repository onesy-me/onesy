import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeightW100'

      short_name='Weight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200h480l-57-400H297l-57 400Zm240-428q17 0 28.5-11.5T520-668q0-17-11.5-28.5T480-708q-17 0-28.5 11.5T440-668q0 17 11.5 28.5T480-628ZM207-172l65-456h153q-6-8-9.5-18.5T412-668q0-29 19.5-48.5T480-736q29 0 48.5 19.5T548-668q0 11-3.5 21.5T535-628h153l65 456H207Zm33-28h480-480Z"/>
    </Icon>
  );
});

IconMaterialWeightW100.displayName = 'OnesyIconMaterialWeightW100';

export default IconMaterialWeightW100;
