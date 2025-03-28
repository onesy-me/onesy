import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestEcoLeafW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestEcoLeafW100'

      short_name='NestEcoLeaf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-216q-51.66 0-97.33-18.5T301-285l-91 90q-3.67 4-9.33 4-5.67 0-9.67-4t-4-9.67q0-5.66 4-9.33l90-90q-32-36-50.5-82.15Q212-432.31 212-484q0-112.22 77.89-190.11Q367.77-752 480-752h238q13 0 21.5 8.5T748-722v238q0 112.23-77.89 190.11Q592.22-216 480-216Zm0-28q100 0 170-70t70-170v-240H480q-100 0-170 70t-70 170q0 46 16 87t45 73l210-210q3.67-4 9.33-4 5.67 0 9.97 4.3 4.7 4.7 4.7 9.7 0 5-5 10L320-305q32 29 73 45t87 16Zm0-240Z"/>
    </Icon>
  );
});

IconMaterialNestEcoLeafW100.displayName = 'OnesyIconMaterialNestEcoLeafW100';

export default IconMaterialNestEcoLeafW100;
