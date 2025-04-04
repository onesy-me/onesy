import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeightW100Filled'

      short_name='Weight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-628q17 0 28.5-11.5T520-668q0-17-11.5-28.5T480-708q-17 0-28.5 11.5T440-668q0 17 11.5 28.5T480-628Zm55 0h101q23 0 39.5 14.5T695-576l48 336q4 27-14 47.5T683-172H277q-28 0-46-20.5T217-240l48-336q3-23 19.5-37.5T324-628h101q-6-8-9.5-18.5T412-668q0-29 19.5-48.5T480-736q29 0 48.5 19.5T548-668q0 11-3.5 21.5T535-628Z"/>
    </Icon>
  );
});

IconMaterialWeightW100Filled.displayName = 'OnesyIconMaterialWeightW100Filled';

export default IconMaterialWeightW100Filled;
