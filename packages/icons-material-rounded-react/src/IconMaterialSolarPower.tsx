import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSolarPower = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPower'

      short_name='SolarPower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-800q-17 0-28.5-11.5T120-840q0-17 11.5-28.5T160-880h40q17 0 28.5 11.5T240-840q0 17-11.5 28.5T200-800h-40Zm34 560-16 80h262v-80H194Zm23-432 28-28q11-11 27.5-11t28.5 11q12 12 12 28.5T301-643l-28 28q-11 11-27.5 11T217-615q-12-12-12-28.5t12-28.5Zm-7 352h230v-80H226l-16 80Zm270-360q-70 0-123.5-43T286-831q-4-16 4.5-30t24.5-18q16-4 30.5 4.5T364-850q10 39 42 64.5t74 25.5q42 0 74-25.5t42-64.5q4-16 18.5-24.5T645-879q16 4 24.5 18t4.5 30q-17 65-70.5 108T480-680Zm0-200Zm-40 320v-40q0-17 11.5-28.5T480-640q17 0 28.5 11.5T520-600v40q0 17-11.5 28.5T480-520q-17 0-28.5-11.5T440-560Zm80 400h262l-16-80H520v80Zm0-160h230l-16-80H520v80Zm167-296-28-28q-11-11-11.5-27.5T659-700q11-11 28-11t28 11l29 28q12 11 12 27.5T744-616q-12 12-28.5 12T687-616Zm113-184h-40q-17 0-28.5-11.5T720-840q0-17 11.5-28.5T760-880h40q17 0 28.5 11.5T840-840q0 17-11.5 28.5T800-800ZM99-176l48-240q5-28 27.5-46t51.5-18h508q29 0 51.5 18t27.5 46l48 240q8 38-16.5 67T782-80H178q-38 0-62.5-29T99-176Z"/>
    </Icon>
  );
});

IconMaterialSolarPower.displayName = 'OnesyIconMaterialSolarPower';

export default IconMaterialSolarPower;
