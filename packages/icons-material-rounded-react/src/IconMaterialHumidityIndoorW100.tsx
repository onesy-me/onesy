import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumidityIndoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityIndoorW100'

      short_name='HumidityIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.5-326q55.5 0 94.5-38.5t39-93.31q0-26.58-9.96-50.25Q594.09-531.73 575-550l-74-73q-9-8-21-8t-21 8l-74 73q-19.09 18.27-29.04 41.94-9.96 23.67-9.96 50.25 0 54.81 39.5 93.31t95 38.5ZM374-460q0-20 8.5-38.5t22.9-32.78L480-604l74.6 72.72Q569-517 577.5-498.5 586-480 586-460H374ZM272-212q-24.75 0-42.37-17.63Q212-247.25 212-272v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-801 516-789l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-212 688-212H272Zm0-28h416q14 0 23-9t9-23v-312q0-8-3.5-14.5T707-610L499-766q-8-7-19-7t-19 7L253-610q-6 5-9.5 11.5T240-584v312q0 14 9 23t23 9Zm208-267Z"/>
    </Icon>
  );
});

IconMaterialHumidityIndoorW100.displayName = 'OnesyIconMaterialHumidityIndoorW100';

export default IconMaterialHumidityIndoorW100;
