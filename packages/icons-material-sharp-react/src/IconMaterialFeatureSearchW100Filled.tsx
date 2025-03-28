import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeatureSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeatureSearchW100Filled'

      short_name='FeatureSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m728-612 134 134-20 20-134-134q-17 17-40.5 24.5T620-560q-59 0-99.5-40.5T480-700q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 27-8.5 49T728-612Zm-108.03 24q47.03 0 79.53-32.47t32.5-79.5q0-47.03-32.47-79.53t-79.5-32.5q-47.03 0-79.53 32.47t-32.5 79.5q0 47.03 32.47 79.53t79.5 32.5ZM132-132v-616h274q-4 11-4.5 26.5T401-695q0 91 63 152.5T621.04-481q17.01 0 34.53-2.27 17.52-2.28 35.43-7.73l57 51v308H132Z"/>
    </Icon>
  );
});

IconMaterialFeatureSearchW100Filled.displayName = 'OnesyIconMaterialFeatureSearchW100Filled';

export default IconMaterialFeatureSearchW100Filled;
