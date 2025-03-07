import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRadiologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadiologyFilled'

      short_name='Radiology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm190-80q13 0 21.5-8.5T420-190v-53q0-6-7-19l-80-94q-7-8-10-17t-3-18q11 5 22.5 7.5T366-381q20 0 39.5-8t34.5-24q8-8 18.5-12t21.5-4q12 0 22.5 4t17.5 12q15 16 35 24t40 8q12 0 23-2.5t22-7.5q0 9-3 18t-10 17l-80 94q-3 5-5 9.5t-2 9.5v53q0 13 8.5 21.5T570-160q13 0 21.5-8.5T600-190v-42l72-84q11-11 19.5-30t8.5-44q0-13-3-25.5t-9-24.5q5-11 8.5-23.5T700-489q0-20-6.5-38.5T673-562l-73-86v-42q0-13-8.5-21.5T570-720q-13 0-21.5 8.5T540-690v53q0 5 1.5 10t5.5 9l80 95q6 8 9.5 16.5T640-489q0 19-13 33.5T594-441q-8 0-16-3t-15-10q-17-17-38.5-26t-44.5-9q-23 0-44.5 9T397-454q-6 7-14 10t-17 3q-20 0-33-14.5T320-490q0-9 3-17.5t10-16.5l80-94q3-5 5-9.5t2-9.5v-53q0-13-8.5-21.5T390-720q-13 0-21.5 8.5T360-690v42l-72 84q-11 11-19.5 30t-8.5 44q0 14 3 26.5t8 23.5q-6 12-8.5 24.5T260-390q0 25 8.5 44t19.5 30l72 84v42q0 13 8.5 21.5T390-160Z"/>
    </Icon>
  );
});

IconMaterialRadiologyFilled.displayName = 'OnesyIconMaterialRadiologyFilled';

export default IconMaterialRadiologyFilled;
