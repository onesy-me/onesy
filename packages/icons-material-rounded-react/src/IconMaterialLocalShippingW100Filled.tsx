import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalShippingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalShippingW100Filled'

      short_name='LocalShipping'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M223.76-206Q182-206 153-235.17q-29-29.16-29-70.83h-18q-12.75 0-21.37-8.63Q76-323.25 76-336v-352q0-26 17-43t43-17h460q24.75 0 42.38 17.62Q656-712.75 656-688v80h54q14.25 0 27 6.37 12.75 6.38 21 17.63l120 162q3 3.75 4.5 8.25T884-404v68q0 12.75-8.62 21.37Q866.75-306 854-306h-30q0 41.67-29.24 70.83-29.23 29.17-71 29.17Q682-206 653-235.17q-29-29.16-29-70.83H324q0 42-29.24 71-29.23 29-71 29Zm.24-28q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm500 0q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm-68-180h194L734-567q-5-6-11.5-9.5T708-580h-52v166Z"/>
    </Icon>
  );
});

IconMaterialLocalShippingW100Filled.displayName = 'OnesyIconMaterialLocalShippingW100Filled';

export default IconMaterialLocalShippingW100Filled;
