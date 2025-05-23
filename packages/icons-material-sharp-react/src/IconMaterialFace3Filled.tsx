import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFace3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face3Filled'

      short_name='Face3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q134 0 227-93.5T800-560q0-31-5-59.5T779-675q-27 17-57 26t-62 9q-54 0-101.5-24.5T480-734q-31 45-78.5 69.5T300-640q-32 0-62-9t-57-26q-11 27-16 55.5t-5 59.5q0 133 93.5 226.5T480-240ZM360-470q21 0 35.5-14.5T410-520q0-21-14.5-35.5T360-570q-21 0-35.5 14.5T310-520q0 21 14.5 35.5T360-470Zm240 0q21 0 35.5-14.5T650-520q0-21-14.5-35.5T600-570q-21 0-35.5 14.5T550-520q0 21 14.5 35.5T600-470ZM0-80l44-482q8-84 45.5-157t96-126.5q58.5-53.5 134-84T480-960q85 0 160.5 30.5t134 84Q833-792 870.5-719T916-562l44 482H0Z"/>
    </Icon>
  );
});

IconMaterialFace3Filled.displayName = 'OnesyIconMaterialFace3Filled';

export default IconMaterialFace3Filled;
