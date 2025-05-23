import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineAxisW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineAxisW100Filled'

      short_name='LineAxis'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m130-270 212-212q17-17 42-17t42 17l94 94q10 10 24 9.5t23-11.5l80-93-239-221q-10-9-23-8.5t-22 9.5L150-490q-4 4-9.5 4.5T130-490q-5-5-5-10t5-10l213-213q17-17 41-18t42 16l240 221 147-170q4-5 9-5t10 4q4 4 4.5 9t-3.5 10L687-485l144 133q5 4 5.5 9.5T832-332q-4 4-9.5 4.5T812-331L668-464l-80 93q-17 20-43 21t-45-18l-93-93q-9-9-23-9t-23 9L150-250q-4 4-9.5 4.5T130-250q-5-5-5-10t5-10Z"/>
    </Icon>
  );
});

IconMaterialLineAxisW100Filled.displayName = 'OnesyIconMaterialLineAxisW100Filled';

export default IconMaterialLineAxisW100Filled;
