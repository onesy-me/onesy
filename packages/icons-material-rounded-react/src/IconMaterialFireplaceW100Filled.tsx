import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireplaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireplaceW100Filled'

      short_name='Fireplace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-230q13 11 27.5 15.5T480-210q29 0 52.5-18.5T560-282q5-47-29-69.5T480-410q-5 14-5 26t3 26q3 17 7 32t1 32q-5 18-22 37t-40 27Zm-292 38v-576q0-25 17.5-42.5T192-828h576q25 0 42.5 17.5T828-768v576q0 25-17.5 42.5T768-132H192q-25 0-42.5-17.5T132-192Zm60 32h84q0-11 8.5-19.5T304-188h100q-32-21-52-55.5T332-310q0-65 30-118t82-91q6-5 13-5.5t13 1.5q6 2 11 5.5t8 10.5q17 38 38.5 61.5T582-398q23 18 34.5 41t11.5 49q0 32-14.5 64T566-188h90q11 0 19.5 8.5T684-160h84q14 0 23-9t9-23v-576q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v576q0 14 9 23t23 9Z"/>
    </Icon>
  );
});

IconMaterialFireplaceW100Filled.displayName = 'OnesyIconMaterialFireplaceW100Filled';

export default IconMaterialFireplaceW100Filled;
