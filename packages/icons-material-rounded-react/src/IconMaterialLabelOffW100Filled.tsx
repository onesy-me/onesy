import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffW100Filled'

      short_name='LabelOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M673-340q-6 0-11-2t-10-7L343-657q-7-7-8-15.5t2-16.5q3-8 10.5-13.5T365-708h215q21 0 41.5 11.5T654-668l109 153q5 8 8 17t3 18q0 9-3 18t-8 17l-65 92q-5 6-11.5 9.5T673-340Zm-441 88q-26 0-43-17t-17-43v-336q0-5 1-11.5t3-12.5l-70-70q-4-4-4.5-9.5T106-762q5-5 10-5t10 5l616 616q4 4 4.5 9.5T742-126q-5 5-10 5t-10-5L592-256q-3 2-10.5 3t-13.5 1H232Z"/>
    </Icon>
  );
});

IconMaterialLabelOffW100Filled.displayName = 'OnesyIconMaterialLabelOffW100Filled';

export default IconMaterialLabelOffW100Filled;
