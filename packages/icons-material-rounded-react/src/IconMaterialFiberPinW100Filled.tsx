import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberPinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberPinW100Filled'

      short_name='FiberPin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M248-460h96q18 0 31-13t13-31v-36q0-18-13-31t-31-13H235.5q-6.2 0-10.85 4.5Q220-575 220-569v179q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-70Zm222.05-124q-6.05 0-10.05 3.97-4 3.96-4 10.03v180q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-180q0-6.07-3.95-10.03-3.96-3.97-10-3.97ZM600-538l106 155q2 3 5.03 5 3.02 2 6.65 2h7.27q6.05 0 10.55-4.38 4.5-4.37 4.5-10.62v-179q0-6.16-3.89-10.08t-10-3.92q-6.11 0-10.11 3.92-4 3.92-4 10.08v148L609-577q-2-3-5.75-5t-8.25-2h-7.46q-6.84 0-11.19 4.48T572-568v178q0 6.16 3.89 10.08t10 3.92q6.11 0 10.11-3.92 4-3.92 4-10.08v-148Zm-352 50v-68h96q6 0 11 5t5 11v36q0 6-5 11t-11 5h-96Zm-56 276q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialFiberPinW100Filled.displayName = 'OnesyIconMaterialFiberPinW100Filled';

export default IconMaterialFiberPinW100Filled;
