import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlatwareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlatwareW100'

      short_name='Flatware'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-146v-394q-32-2-54-23t-22-53v-184q0-6 4-10t10-4q6 0 10 4t4 10v146h48v-146q0-6 4-10t10-4q6 0 10 4t4 10v146h48v-146q0-6 4-10t10-4q6 0 10 4t4 10v184q0 32-22 53t-54 23v394h-28Zm260 0v-394q-39-18-59.5-55T422-676q0-53.01 23.5-95.51Q469-814 516-814t70.5 42.49Q610-729.01 610-676q0 44-20.5 81T530-540v394h-28Zm196 0v-666q44 11 70 48t26 84v214h-68v320h-28Z"/>
    </Icon>
  );
});

IconMaterialFlatwareW100.displayName = 'OnesyIconMaterialFlatwareW100';

export default IconMaterialFlatwareW100;
