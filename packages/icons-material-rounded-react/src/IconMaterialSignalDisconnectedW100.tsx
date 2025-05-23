import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalDisconnectedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalDisconnectedW100'

      short_name='SignalDisconnected'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M708-559q0 35-10 69t-31 62q-5 5-10.5 6t-10.5-4q-5-5-4-11t5-11q17-25 25-53.5t8-58.5q0-36-12-69.5T633-690q-5-5-5.5-11t4.5-11q5-5 10.5-4t10.5 6q27 32 41 70.5t14 80.5Zm-228-71q29 0 49.5 20.5T550-560v4q-1 9-9.5 12t-16.5-5l-55-55q-7-7-4.5-15.5T476-630h4Zm360 70q0 62-20 119.5T760-335q-5 5-10.5 6t-10.5-4q-5-5-4-11t5-11q35-44 53.5-96T812-560q0-63-22.5-120T725-783q-5-5-5.5-10.5T724-804q5-5 11-4t11 6q45 50 69.5 112T840-560Zm-56 424L494-426v246q0 6-4 10t-10 4q-6 0-10-4t-4-10v-274L292-628q-6 17-9 34t-3 34q0 36 12 69.5t35 60.5q5 5 5.5 11t-4.5 11q-5 5-10.5 4t-10.5-6q-26-31-40.5-69.5T252-560q0-23 4-45.5t15-43.5l-77-77q-23 38-34.5 79.5T148-560q0 63 22.5 120T235-337q5 5 5.5 10.5T236-316q-5 5-11 4t-11-6q-45-50-69.5-112.5T120-560q0-50 13-97.5t40-89.5l-37-37q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialSignalDisconnectedW100.displayName = 'OnesyIconMaterialSignalDisconnectedW100';

export default IconMaterialSignalDisconnectedW100;
