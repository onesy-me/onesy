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
      <path d="M226-200q-66.4 0-113.2-46.8T66-360q0-66.4 46.8-113.2T226-520q66.4 0 113.2 46.8T386-360q0 66.4-46.8 113.2T226-200Zm-.24-120q-16.76 0-28.26-11.74-11.5-11.73-11.5-28.5 0-16.76 11.74-28.26 11.73-11.5 28.5-11.5 16.76 0 28.26 11.74 11.5 11.73 11.5 28.5 0 16.76-11.74 28.26-11.73 11.5-28.5 11.5ZM780-200q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33ZM270-614q15 0 27.5 7.5T318-586H130v-28h140Zm-44 386q55 0 93.5-38.5T358-360q0-55-38.5-93.5T226-492q-55 0-93.5 38.5T94-360q0 55 38.5 93.5T226-228Zm554 0q35 0 60.5-25.5T866-314q0-35-25.5-60.5T780-400q-35 0-60.5 25.5T694-314q0 35 25.5 60.5T780-228ZM413-346h228q14-50 53.91-79T785-454q10.14 0 20.07 1t20.93 4v-231H574l-42-44 56-56-28-28-142 142 30 28 56-56 42 42v52q0 49.5-35.25 84.75T426-480h-55q21 26 32.5 57t10.5 64q0 3.33-.5 6.67-.5 3.33-.5 6.33Z"/>
    </Icon>
  );
});

IconMaterialAgricultureW100Filled.displayName = 'OnesyIconMaterialAgricultureW100Filled';

export default IconMaterialAgricultureW100Filled;
