import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumidityIndoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityIndoorW100Filled'

      short_name='HumidityIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.5-326q55.5 0 94.5-38.5t39-93.31q0-26.58-9.96-50.25Q594.09-531.73 575-550l-74-73q-9-8-21-8t-21 8l-74 73q-19.09 18.27-29.04 41.94-9.96 23.67-9.96 50.25 0 54.81 39.5 93.31t95 38.5ZM374-460q0-20 8.5-38.5t22.9-32.78L480-604l74.6 72.72Q569-517 577.5-498.5 586-480 586-460H374ZM272-212q-24.75 0-42.37-17.63Q212-247.25 212-272v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-801 516-789l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-212 688-212H272Z"/>
    </Icon>
  );
});

IconMaterialHumidityIndoorW100Filled.displayName = 'OnesyIconMaterialHumidityIndoorW100Filled';

export default IconMaterialHumidityIndoorW100Filled;
