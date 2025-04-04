import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNephrologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NephrologyW100Filled'

      short_name='Nephrology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-322q-84 0-139-63.5T142-536v-48q0-87 55-150.5T336-798q39.17 0 66.58 27.38Q430-743.24 430-704.12q0 39.12-27.42 66.62Q375.17-610 336-610v100q39 0 66.5 27.42Q430-455.17 430-416v240q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-173q-14 13-30.47 20-16.46 7-35.53 7Zm288 0q-19.07 0-35.53-7Q572-336 558-349v173q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-240q0-39.17 27.42-66.58Q584.83-510 624-510v-100q-39 0-66.5-27.38t-27.5-66.5q0-39.12 27.42-66.62Q584.83-798 624-798q84 0 139 63.5T818-584v48q0 87-55 150.5T624-322Z"/>
    </Icon>
  );
});

IconMaterialNephrologyW100Filled.displayName = 'OnesyIconMaterialNephrologyW100Filled';

export default IconMaterialNephrologyW100Filled;
