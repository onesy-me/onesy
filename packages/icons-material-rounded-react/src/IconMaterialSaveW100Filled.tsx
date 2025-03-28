import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSaveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveW100Filled'

      short_name='Save'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h401q12.44 0 23.72 5T676-770l94 94q8 8 13 19.28 5 11.28 5 23.72v401q0 26-17 43t-43 17H232Zm247.76-144Q508-316 528-335.76q20-19.77 20-48Q548-412 528.24-432q-19.77-20-48-20Q452-452 432-432.24q-20 19.77-20 48Q412-356 431.76-336q19.77 20 48 20ZM310-572h217.78q13.22 0 21.72-8.63 8.5-8.62 8.5-21.37v-48q0-12.75-8.62-21.38Q540.75-680 528-680H310.22q-13.22 0-21.72 8.62-8.5 8.63-8.5 21.38v48q0 12.75 8.63 21.37Q297.25-572 310-572Z"/>
    </Icon>
  );
});

IconMaterialSaveW100Filled.displayName = 'OnesyIconMaterialSaveW100Filled';

export default IconMaterialSaveW100Filled;
