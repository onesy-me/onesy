import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGasMeterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GasMeterW100Filled'

      short_name='GasMeter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-132q-44.55 0-76.27-31.73Q212-195.45 212-240v-400q0-44.55 31.73-76.28Q275.45-748 320-748h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h132v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q44.55 0 76.28 31.72Q748-684.55 748-640v400q0 44.55-31.72 76.27Q684.55-132 640-132H320Zm40-454h240q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm119.83 311Q510-275 531-296t21-49.87q0-11.97-2.95-20.42-2.94-8.44-11.05-19.71l-41-49q-7-8-17.07-8t-16.54 7.83l-41.72 49.12q-7.92 11.39-10.79 19.58-2.88 8.18-2.88 20.28Q408-317 428.83-296q20.83 21 51 21Z"/>
    </Icon>
  );
});

IconMaterialGasMeterW100Filled.displayName = 'OnesyIconMaterialGasMeterW100Filled';

export default IconMaterialGasMeterW100Filled;
