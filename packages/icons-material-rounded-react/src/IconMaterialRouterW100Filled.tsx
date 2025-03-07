import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRouterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouterW100Filled'

      short_name='Router'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h394v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h74q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Zm48.07-80q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q268-308 260-299.93t-8 20q0 11.93 8.07 19.93t20 8Zm140 0q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q408-308 400-299.93t-8 20q0 11.93 8.07 19.93t20 8Zm140 0q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q548-308 540-299.93t-8 20q0 11.93 8.07 19.93t20 8ZM640-660q-23.14 0-42.07 7T563-632q-5 4-10.5 4.5T542-632q-5-5-4.5-10.5t5.5-9.5q23-19 46.5-27.5T640-688q26.64 0 50.32 8.5T737-652q5 4 5.5 9.5T738-632q-5 5-10.5 4.5T717-632q-16-14-35-21t-42-7Zm0-140q-56 0-100.5 19.5T463-732q-5 4-10.5 4.5t-10.28-4.28Q437-737 438-742.5q1-5.5 6-10.5 40-35 89.5-55T640-828q57 0 106.5 20t89.5 55q5 5 6 10.5t-4.22 10.72Q833-727 827.5-727.5 822-728 817-732q-32-29-76.5-48.5T640-800Z"/>
    </Icon>
  );
});

IconMaterialRouterW100Filled.displayName = 'OnesyIconMaterialRouterW100Filled';

export default IconMaterialRouterW100Filled;
