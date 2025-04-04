import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElevationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevationW100Filled'

      short_name='Elevation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M712-214H226q-18 0-27-16t2-31l131-184q8-12 21.5-18.5T381-470h154q7 0 13-3t11-8l160-187q14-16 33.5-8.5T772-648v374q0 25-17.5 42.5T712-214ZM289-570 156-384q-3 5-8.5 5.5T137-381q-5-3-5.5-8.5T134-400l123-173q8-12 21.5-18.5T306-598h170l169-198q4-5 9.5-5t10.5 4q5 4 5.5 9t-3.5 10L506-591q-8 10-19.5 15.5T461-570H289Z"/>
    </Icon>
  );
});

IconMaterialElevationW100Filled.displayName = 'OnesyIconMaterialElevationW100Filled';

export default IconMaterialElevationW100Filled;
