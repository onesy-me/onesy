import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationHomeW100Filled'

      short_name='LocationHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.88-386q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM477-324q-58 0-112.5 18.5T263-252q-8 6-15.5 13t-7.5 17q0 10 7.5 16t18.5 6h428q11 0 18.5-6.5T720-223v1q0-10-7.5-17.5T697-253q-48-35-104.13-53-56.13-18-115.87-18ZM272-172q-24.75 0-42.37-17.63Q212-207.25 212-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-761 516-749l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-172 688-172H272Z"/>
    </Icon>
  );
});

IconMaterialLocationHomeW100Filled.displayName = 'OnesyIconMaterialLocationHomeW100Filled';

export default IconMaterialLocationHomeW100Filled;
