import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalShippingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalShippingW100'

      short_name='LocalShipping'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M223.76-206Q182-206 153-235.17q-29-29.16-29-70.83H76v-442h580v140h84l144 194v108h-60q0 41.67-29.24 70.83-29.23 29.17-71 29.17Q682-206 653-235.17q-29-29.16-29-70.83H324q0 42-29.24 71-29.23 29-71 29Zm.24-28q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21ZM104-334h24q6-29 33.5-50.5T224-406q33 0 61.5 21t34.5 51h308v-386H104v386Zm620 100q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm-68-180h194L724-580h-68v166ZM366-527Z"/>
    </Icon>
  );
});

IconMaterialLocalShippingW100.displayName = 'OnesyIconMaterialLocalShippingW100';

export default IconMaterialLocalShippingW100;
