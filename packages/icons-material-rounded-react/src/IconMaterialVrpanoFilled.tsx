import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVrpanoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoFilled'

      short_name='Vrpano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m431-442-50-60q-2-3-15-7-5 0-8.5 2t-6.5 6l-99 119q-9 11-3 22.5t20 9.5q52-5 105-7.5t106-2.5q53 0 104.5 2.5T688-350q15 2 22-9.5t-2-22.5L575-542q-2-3-15-7-5 0-8.5 1.5T545-542l-84 100q-2 3-15 7-5 0-8.5-1.5T431-442ZM120-160q-17 0-28.5-11.5T80-200v-560q0-17 11.5-28.5T120-800q8 0 35.5 9.5T229-770q46 11 108.5 20.5T480-740q80 0 142.5-9.5T731-770q46-11 73.5-20.5T840-800q17 0 28.5 11.5T880-760v560q0 17-11.5 28.5T840-160q-8 0-35.5-9.5T731-190q-46-11-108.5-20.5T480-220q-80 0-142.5 9.5T229-190q-46 11-73.5 20.5T120-160Z"/>
    </Icon>
  );
});

IconMaterialVrpanoFilled.displayName = 'OnesyIconMaterialVrpanoFilled';

export default IconMaterialVrpanoFilled;
