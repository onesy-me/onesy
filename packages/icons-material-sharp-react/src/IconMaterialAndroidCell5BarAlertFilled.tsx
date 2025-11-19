import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAndroidCell5BarAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidCell5BarAlertFilled'

      short_name='AndroidCell5BarAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-240h120v240H40Zm190 0v-320h120v320H230Zm190 0v-440h120v440H420Zm460 0q-17 0-28.5-11.5T840-200q0-17 11.5-28.5T880-240q17 0 28.5 11.5T920-200q0 17-11.5 28.5T880-160Zm-40-120v-140h80v140h-80Zm-40-193v-327h120v314q-10-2-19.5-3t-20.5-1q-21 0-41.5 4.5T800-473ZM610-160v-520h120v258q-24 27-37 61t-13 70q0 36 12.5 70t35.5 61H610Z"/>
    </Icon>
  );
});

IconMaterialAndroidCell5BarAlertFilled.displayName = 'OnesyIconMaterialAndroidCell5BarAlertFilled';

export default IconMaterialAndroidCell5BarAlertFilled;
