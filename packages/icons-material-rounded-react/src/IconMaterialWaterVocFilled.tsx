import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterVocFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterVocFilled'

      short_name='WaterVoc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M619-73q-11 5-22.5.5T580-88l-5-11q-8-17-11.5-35.5T560-172q0-22 5-43.5t15-41.5q8-17 14-34.5t6-36.5q0-15-3.5-29t-9.5-28l-1-2q-5-11-.5-23t15.5-17q11-5 22.5-.5T640-412l5 9q8 17 11.5 36t3.5 39q0 22-5 43t-15 41q-8 17-14 35t-6 37q0 14 3 27.5t9 26.5l2 5q5 11 .5 23T619-73Zm120 0q-11 5-22.5.5T700-88l-5-11q-8-17-11.5-35.5T680-172q0-22 5-43.5t15-41.5q8-17 14-34.5t6-36.5q0-15-3.5-29t-9.5-28l-1-2q-5-11-.5-23t15.5-17q11-5 22.5-.5T760-412l5 9q8 18 11.5 36.5T780-328q0 22-5 43t-15 41q-8 17-14 35t-6 37q0 14 3 27.5t9 26.5l2 5q5 11 .5 23T739-73Zm102-354q11-5 22.5-.5T880-412l5 9q8 17 11.5 36t3.5 39q0 22-5 43.5T880-243q-8 17-14 34.5t-6 36.5q0 14 3 27.5t9 26.5l2 5q3 6 3 12t-2 11q-2 5-6 9.5T859-73q-11 5-22.5.5T820-88l-5-11q-8-17-11.5-35.5T800-172q0-22 5-43.5t15-41.5q8-17 14-34.5t6-36.5q0-15-3.5-29t-9.5-28l-1-2q-5-11-.5-23t15.5-17ZM480-867q8 0 14.5 2.5T506-857q66 59 132.5 129.5T750-576q11 20-1 38.5T714-519H560q-33 0-56.5 23.5T480-439v314q0 20-13 31t-32 11q-136 0-205.5-91T160-408q0-65 29-128.5T262-658q44-58 95.5-109t95.5-90q6-5 13-7.5t14-2.5Z"/>
    </Icon>
  );
});

IconMaterialWaterVocFilled.displayName = 'OnesyIconMaterialWaterVocFilled';

export default IconMaterialWaterVocFilled;
