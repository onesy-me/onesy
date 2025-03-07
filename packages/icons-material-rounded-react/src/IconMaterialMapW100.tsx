import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapW100'

      short_name='Map'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m581-183-221-77-147.09 56.84q-7.91 3.16-15.03 2.03-7.13-1.14-13.13-4.92-6-3.78-9.37-10.21Q172-222.68 172-231v-464.67q0-10.76 4.5-19.05Q181-723 190-726l150-51q4.62-2 9.62-3 5-1 10.38-1 5.38 0 10.38 1 5 1 9.62 3l220 77 147.09-56.84q7.91-3.16 15.04-2.03 7.12 1.14 13.12 4.92 6 3.78 9.38 10.21Q788-737.32 788-729v469.13q0 10.87-6 18.87-6 8-16 11l-147 48q-5 2-9.57 2.5-4.58.5-9.5.5-4.93 0-9.43-1t-9.5-3Zm5-27v-468l-212-74v468l212 74Zm28 0 146-48v-474l-146 54v468Zm-414-18 146-56v-468l-146 50v474Zm414-450v468-468Zm-268-74v468-468Z"/>
    </Icon>
  );
});

IconMaterialMapW100.displayName = 'OnesyIconMaterialMapW100';

export default IconMaterialMapW100;
