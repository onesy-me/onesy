import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAgricultureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AgricultureW100'

      short_name='Agriculture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M130-586v-28h140q15 0 27.5 7.5T318-586H130Zm96 358q55 0 93.5-38.5T358-360q0-55-38.5-93.5T226-492q-55 0-93.5 38.5T94-360q0 55 38.5 93.5T226-228Zm554 0q35 0 60.5-25.5T866-314q0-35-25.5-60.5T780-400q-35 0-60.5 25.5T694-314q0 35 25.5 60.5T780-228Zm-554.24-92q-16.76 0-28.26-11.74-11.5-11.73-11.5-28.5 0-16.76 11.74-28.26 11.73-11.5 28.5-11.5 16.76 0 28.26 11.74 11.5 11.73 11.5 28.5 0 16.76-11.74 28.26-11.73 11.5-28.5 11.5ZM798-427l14 3.5q6 1.5 14 5.5v-262H574l-42-44 56-56-28-28-142 142 30 28 56-56 42 42v52q0 49.5-35.25 84.75T426-480h-94q8 8 13 14t12 14h69q62 0 105-43t43-105v-52h224v225Zm-128 81q3-8 5.43-14.23 2.43-6.22 7.57-13.77H385q1 8.07 1 14.04 0 5.96-1 13.96h285Zm110 146q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33Zm-554 0q-66.4 0-113.2-46.8T66-360q0-66.4 46.8-113.2T226-520q66.4 0 113.2 46.8T386-360q0 66.4-46.8 113.2T226-200Zm368-313Z"/>
    </Icon>
  );
});

IconMaterialAgricultureW100.displayName = 'OnesyIconMaterialAgricultureW100';

export default IconMaterialAgricultureW100;
