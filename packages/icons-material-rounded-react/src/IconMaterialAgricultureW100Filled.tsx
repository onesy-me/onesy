import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAgricultureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AgricultureW100Filled'

      short_name='Agriculture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-200q-66.4 0-113.2-46.8T66-360q0-66.4 46.8-113.2T226-520q66.4 0 113.2 46.8T386-360q0 66.4-46.8 113.2T226-200Zm-.24-120q-16.76 0-28.26-11.74-11.5-11.73-11.5-28.5 0-16.76 11.74-28.26 11.73-11.5 28.5-11.5 16.76 0 28.26 11.74 11.5 11.73 11.5 28.5 0 16.76-11.74 28.26-11.73 11.5-28.5 11.5ZM780-200q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33ZM144-586q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h126q15 0 27.5 7.5T318-586H144Zm82 358q55 0 93.5-38.5T358-360q0-55-38.5-93.5T226-492q-55 0-93.5 38.5T94-360q0 55 38.5 93.5T226-228Zm554 0q35 0 60.5-25.5T866-314q0-35-25.5-60.5T780-400q-35 0-60.5 25.5T694-314q0 35 25.5 60.5T780-228ZM413-346h228q14-50 53.91-79T785-454q10.14 0 20.07 1t20.93 4v-171q0-24.75-17.62-42.38Q790.75-680 766-680H574l-42-44 42-42q6-6 6-14t-6-14q-6-6-14-6t-14 6L433-681q-6 6-5.5 14.5T434-652q6 6 14 6t14-6l42-42 42 42v52q0 49.5-35.25 84.75T426-480h-55q21 26 32.5 57t10.5 64q0 3.33-.5 6.67-.5 3.33-.5 6.33Z"/>
    </Icon>
  );
});

IconMaterialAgricultureW100Filled.displayName = 'OnesyIconMaterialAgricultureW100Filled';

export default IconMaterialAgricultureW100Filled;
