import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageviewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewW100'

      short_name='Pageview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17q-13 0-24-4.5T724-230L548-406q-18 17-40 25.5t-48 8.5q-53 0-90.5-37.5T332-500q0-53 37.5-90.5T460-628q53 0 90.5 37.5T588-500q0 20-4 36t-18 36l188 188h14q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h402q7 0 10.5 4.5t3.5 9.5q0 5-3.5 9.5T594-212H192Zm268-188q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialPageviewW100.displayName = 'OnesyIconMaterialPageviewW100';

export default IconMaterialPageviewW100;
