import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirPurifierGenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirPurifierGenW100Filled'

      short_name='AirPurifierGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-522q0-39 27.5-66.5T266-788h134q39 0 66.5 27.5T494-694v80h-56q-25 0-42.5 17.5T378-554v188q0 25 17.5 42.5T438-306h56v134H172Zm491-135q-17 0-34.5-4T594-321l9-27q16 5 31.5 9t28.5 4q16 0 31-4.5t32-15.5q20-14 42-19.5t39-5.5q16 0 33.5 3.5T875-367l-9 28q-18-6-33-9.5t-27-3.5q-17 0-35.5 6T734-327q-14 10-32.5 15t-38.5 5Zm-169-27h-56q-14 0-23-9t-9-23v-188q0-14 9-23t23-9h56v252Zm168-109q-17 0-34-4t-34-10l9-26q16 6 31 9t29 3q16 0 31.5-4.5T726-491q20-14 41-19.5t39-5.5q17 0 34.5 3.5T875-503l-10 28q-21-7-32-10t-27-3q-16 0-33.5 5T735-464q-17 12-35.5 16.5T662-443Zm1-136q-17 0-34.5-4T594-593l9-27q18 6 32.5 9.5T663-607q16 0 31-4.5t32-15.5q21-14 41-19.5t39-5.5q17 0 34 3.5t35 9.5l-10 28q-18-6-32-9.5t-27-3.5q-17 0-34 5t-38 20q-14 10-33 15t-38 5Z"/>
    </Icon>
  );
});

IconMaterialAirPurifierGenW100Filled.displayName = 'OnesyIconMaterialAirPurifierGenW100Filled';

export default IconMaterialAirPurifierGenW100Filled;
