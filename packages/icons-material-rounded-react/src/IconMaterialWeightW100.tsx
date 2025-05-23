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
      <path d="M277-200h406q14 0 24-11.5t8-25.5l-48-336q-2-12-11-19.5t-21-7.5H325q-12 0-21 7.5T293-573l-48 336q-2 14 8 25.5t24 11.5Zm203-428q17 0 28.5-11.5T520-668q0-17-11.5-28.5T480-708q-17 0-28.5 11.5T440-668q0 17 11.5 28.5T480-628Zm55 0h101q23 0 39.5 14.5T695-576l48 336q4 27-14 47.5T683-172H277q-28 0-46-20.5T217-240l48-336q3-23 19.5-37.5T324-628h101q-6-8-9.5-18.5T412-668q0-29 19.5-48.5T480-736q29 0 48.5 19.5T548-668q0 11-3.5 21.5T535-628ZM242-200h476-476Z"/>
    </Icon>
  );
});

IconMaterialWeightW100.displayName = 'OnesyIconMaterialWeightW100';

export default IconMaterialWeightW100;
