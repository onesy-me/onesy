import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireplaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireplaceW100'

      short_name='Fireplace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-230q13 11 27.5 15.5T480-210q29 0 52.5-18.5T560-282q5-47-29-69.5T480-410q-5 14-5 26t3 26q3 17 7 32t1 32q-5 18-22 37t-40 27Zm-292 38v-576q0-24.75 17.63-42.38Q167.25-828 192-828h576q24.75 0 42.38 17.62Q828-792.75 828-768v576q0 24.75-17.62 42.37Q792.75-132 768-132H192q-24.75 0-42.37-17.63Q132-167.25 132-192Zm348 4q50 0 85-35t35-85q0-26-10-42t-28-28q-38-27-63.5-56.5T458-494q-44 35-71 79.5T360-310q0 35 36 78.5t84 43.5Zm-288 28h84q0-11 8.5-19.5T304-188h100q-32-21-52-55.5T332-310q0-65 30-118t82-91q6-5 13-5.5t13 1.5q6 2 11 5.5t8 10.5q17 38 38.5 61.5T582-398q23 18 34.5 41t11.5 49q0 32-14.5 64T566-188h90q11 0 19.5 8.5T684-160h84q14 0 23-9t9-23v-576q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v576q0 14 9 23t23 9Zm288-28Z"/>
    </Icon>
  );
});

IconMaterialFireplaceW100.displayName = 'OnesyIconMaterialFireplaceW100';

export default IconMaterialFireplaceW100;
