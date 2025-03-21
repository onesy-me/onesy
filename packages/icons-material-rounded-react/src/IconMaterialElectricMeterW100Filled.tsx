import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricMeterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMeterW100Filled'

      short_name='ElectricMeter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-162v-66q-94-30-154-110t-60-184q0-64.08 24-120.04Q220-698 262-740q42-42 97.91-66 55.92-24 119.09-24 64 0 120 24t98 66q42 42 66.5 97.96Q788-586.08 788-522q0 103.1-60 183.05Q668-259 574-229v67q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-59q-17 4-33.5 5.5T479-214q-16.9 0-32.95-1.5Q430-217 414-221v59q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm-26-464h240q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm122 231-44 44q-5 5-4.5 11t5.48 11q4.99 5 11.5 5 6.52 0 11.52-5l45.24-45.24Q516-383 516-395q0-12-9-21l-29-29 44-44q5-4.98 5-11.49T522.02-512q-4.99-5-11.5-5-6.52 0-11.52 5l-46.08 46.21q-8.92 8.94-8.92 20.87 0 11.92 9 20.92l29 29Z"/>
    </Icon>
  );
});

IconMaterialElectricMeterW100Filled.displayName = 'OnesyIconMaterialElectricMeterW100Filled';

export default IconMaterialElectricMeterW100Filled;
