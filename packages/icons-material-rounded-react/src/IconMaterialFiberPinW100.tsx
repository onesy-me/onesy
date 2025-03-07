import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberPinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberPinW100'

      short_name='FiberPin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M248-460h96q18 0 31-13t13-31v-36q0-18-13-31t-31-13H235q-6 0-10.5 4.5T220-569v179q0 6 4 10t10 4q6 0 10-4t4-10v-70Zm222-124q-6 0-10 4t-4 10v180q0 6 4 10t10 4q6 0 10-4t4-10v-180q0-6-4-10t-10-4Zm130 46 106 155q2 3 5 5t7 2h7q6 0 10.5-4.5T740-391v-179q0-6-4-10t-10-4q-6 0-10 4t-4 10v148L609-577q-2-3-6-5t-8-2h-7q-7 0-11.5 4.5T572-568v178q0 6 4 10t10 4q6 0 10-4t4-10v-148Zm-352 50v-68h96q6 0 11 5t5 11v36q0 6-5 11t-11 5h-96Zm-56 276q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFiberPinW100.displayName = 'OnesyIconMaterialFiberPinW100';

export default IconMaterialFiberPinW100;
