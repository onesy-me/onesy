import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterOrpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterOrpW100Filled'

      short_name='WaterOrp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M304-132q-11 0-19.5-8.5T276-160v-152q0-11 8.5-19.5T304-340h92q11 0 19.5 8.5T424-312v152q0 11-8.5 19.5T396-132h-92Zm0-28h92v-152h-92v152Zm220-52v66q0 6-4 10t-10 4q-6 0-10-4t-4-10v-172q0-9 7-15.5t16-6.5h99q19 0 32.5 13.5T664-294v38q0 17-12.5 29.5T621-212l26 60q3 7-1 13.5t-12 6.5q-5 0-8-2.5t-5-6.5l-30-71h-67Zm240 0v66q0 6-4 10t-10 4q-6 0-10-4t-4-10v-172q0-9 7-15.5t16-6.5h99q19 0 32.5 13.5T904-294v36q0 19-13.5 32.5T858-212h-94Zm-240-28h94q8 0 13-4.5t5-11.5v-38q0-8-5-13t-13-5h-94v72Zm240 0h94q8 0 13-5t5-13v-36q0-8-5-13t-13-5h-94v72ZM400-801q5 0 10 2t10 6q36 34 78 76.5t79 90.5q31 41 54 83.5t32 87.5q3 14-6.5 24.5T633-420H256q-25 0-42.5 17.5T196-360v46q0 10-5.5 16t-13.5 8q-8 2-15-1t-11-11q-11-24-15-50.5t-4-55.5q0-54 25-108t62.5-104.5q37.5-50.5 80.5-95t79-77.5q5-4 10.5-6t10.5-2Z"/>
    </Icon>
  );
});

IconMaterialWaterOrpW100Filled.displayName = 'OnesyIconMaterialWaterOrpW100Filled';

export default IconMaterialWaterOrpW100Filled;
