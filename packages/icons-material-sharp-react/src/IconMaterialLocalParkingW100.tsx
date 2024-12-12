import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalParkingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalParkingW100'

      short_name='LocalParking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-172v-616h228q77 0 132.5 55.5T708-600q0 77-55.5 132.5T520-412H348v240h-56Zm56-296h172q54.45 0 93.22-38.77Q652-545.55 652-600t-38.78-93.22Q574.45-732 520-732H348v264Z"/>
    </Icon>
  );
});

IconMaterialLocalParkingW100.displayName = 'OnesyIconMaterialLocalParkingW100';

export default IconMaterialLocalParkingW100;
