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
      <path d="M255.96-146q-5.96 0-9.96-4.02-4-4.03-4-9.98v-380q-32-2-54-23t-22-53v-184q0-6 4-10t10-4q6 0 10 4t4 10v146h48v-146q0-6 4-10t10-4q6 0 10 4t4 10v146h48v-146q0-6 4-10t10-4q6 0 10 4t4 10v184q0 32-22 53t-54 23v380q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm260 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-380q-39-18-59.5-55T422-676q0-53.01 23.5-95.51Q469-814 516-814t70.5 42.49Q610-729.01 610-676q0 44-20.5 81T530-540v380q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm196 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-617q0-10.2 6.21-17.1 6.2-6.9 15.79-6.9 26 0 50 33t24 88v184q0 12.75-8.62 21.37Q776.75-466 764-466h-38v306q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialFlatwareW100.displayName = 'OnesyIconMaterialFlatwareW100';

export default IconMaterialFlatwareW100;
