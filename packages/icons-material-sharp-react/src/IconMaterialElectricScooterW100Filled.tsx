import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricScooterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricScooterW100Filled'

      short_name='ElectricScooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M205.58-266q-38.99 0-66.28-27.38-27.3-27.38-27.3-66.5 0-39.12 27.3-66.62 27.29-27.5 66.28-27.5Q236-454 264-434.5t36 60.5h252q6-72 57-125t119-59l-67-308H512v-28h172l78 362h-8q-71.78 0-122.89 51.11Q580-429.77 580-358v12H300q-8 41-36 60.5T205.58-266Zm548.54 2q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5ZM518-58l-194-98h128v-66l194 98H518v66Z"/>
    </Icon>
  );
});

IconMaterialElectricScooterW100Filled.displayName = 'OnesyIconMaterialElectricScooterW100Filled';

export default IconMaterialElectricScooterW100Filled;
