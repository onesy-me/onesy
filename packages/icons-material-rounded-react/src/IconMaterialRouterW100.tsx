import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRouterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouterW100'

      short_name='Router'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h394v-146q0-6 4-10t10-4q6 0 10 4t4 10v146h74q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Zm0-28h496q14 0 23-9t9-23v-96q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v96q0 14 9 23t23 9Zm48-52q12 0 20-8t8-20q0-12-8-20t-20-8q-12 0-20 8t-8 20q0 12 8 20t20 8Zm140 0q12 0 20-8t8-20q0-12-8-20t-20-8q-12 0-20 8t-8 20q0 12 8 20t20 8Zm140 0q12 0 20-8t8-20q0-12-8-20t-20-8q-12 0-20 8t-8 20q0 12 8 20t20 8Zm80-408q-23 0-42 7t-35 21q-5 4-10.5 4.5T542-632q-5-5-4.5-10.5t5.5-9.5q23-19 46.5-27.5T640-688q27 0 50.5 8.5T737-652q5 4 5.5 9.5T738-632q-5 5-10.5 4.5T717-632q-16-14-35-21t-42-7Zm0-140q-56 0-100.5 19.5T463-732q-5 4-10.5 4.5T442-732q-5-5-4-10.5t6-10.5q40-35 89.5-55T640-828q57 0 106.5 20t89.5 55q5 5 6 10.5t-4 10.5q-5 5-10.5 4.5T817-732q-32-29-76.5-48.5T640-800ZM200-200v-160 160Z"/>
    </Icon>
  );
});

IconMaterialRouterW100.displayName = 'OnesyIconMaterialRouterW100';

export default IconMaterialRouterW100;
