import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElderlyWomanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElderlyWomanW100'

      short_name='ElderlyWoman'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m268-56-23-16 108-158h-75q8-91 26-174t44-147.14Q374-616 407-654t69-38q23 0 38 15.5t33 45.5q32 54 60.5 82t71.5 56q6-11 17.5-17t25.5-6q23 0 38 15t15 37v408h-28v-408q0-9.6-7.2-16.8-7.2-7.2-16.8-7.2-9.6 0-16.8 7.2-7.2 7.2-7.2 16.8v19h-28v-19q-41-27-82-69t-66-84l-41 178 81 196v187h-28v-174H388L268-56Zm261-700q-26.4 0-45.2-18.8Q465-793.6 465-820q0-2 3-19-8-4-13.5-11.72-5.5-7.72-5.5-17.47 0-13.81 9.2-22.81 9.2-9 22.8-9 9.68 0 17.34 5.5t11.75 13.5q4.91-2 9.62-2.5 4.7-.5 9.41-.5Q555-884 574-865.2q19 18.8 19 45.2 0 26.4-18.8 45.2Q555.4-756 529-756Z"/>
    </Icon>
  );
});

IconMaterialElderlyWomanW100.displayName = 'OnesyIconMaterialElderlyWomanW100';

export default IconMaterialElderlyWomanW100;
