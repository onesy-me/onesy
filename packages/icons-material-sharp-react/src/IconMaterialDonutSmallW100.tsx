import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDonutSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmallW100'

      short_name='DonutSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M515-826q124.71 12.05 212.35 98.52Q815-641 827-516H579q-9-22-25.5-38T515-577.86V-826Zm28 32v196q17 10 31 23.5t23 30.5h198q-20-95-88.5-163.5T543-794Zm-96-32v247.66q-32 11.34-51 38.53-19 27.2-19 60Q377-447 396.5-421t50.5 37.35V-134q-134-14-224-112.5t-90-233.62q0-135.12 90-234.5T447-826Zm-28 32q-113 21-185.5 110T161-480q0 115 72.5 204T419-166v-200q-30-20-50-49.5t-20-65q0-35.5 19.5-65.5t50.5-50v-198Zm160 348h248q-12.2 124.63-99.79 212.21Q639.63-146.2 515-134v-249.82q22.7-7.86 38.85-24.02Q570-424 579-446Zm18 28q-11 16-24 29.5T543-366v200q96-19 164-87.5T795-418H597Zm-248-62Zm248-64Zm0 126Z"/>
    </Icon>
  );
});

IconMaterialDonutSmallW100.displayName = 'OnesyIconMaterialDonutSmallW100';

export default IconMaterialDonutSmallW100;
