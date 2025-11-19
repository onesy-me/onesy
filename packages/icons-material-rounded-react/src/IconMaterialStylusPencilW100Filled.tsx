import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusPencilW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusPencilW100Filled'

      short_name='StylusPencil'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-356q-16 0-25-13t-3-28l149-378q2-6 7.5-9.5T472-788h15q6 0 11.5 3.5t7.5 9.5l149 378q6 15-3 28t-25 13H332Zm-77 184q-16 0-24.5-12.5T227-212l3-9q6-16 19-25.5t30-9.5h402q17 0 30 9.5t19 25.5l3 9q5 15-3.5 27.5T705-172H255Z"/>
    </Icon>
  );
});

IconMaterialStylusPencilW100Filled.displayName = 'OnesyIconMaterialStylusPencilW100Filled';

export default IconMaterialStylusPencilW100Filled;
