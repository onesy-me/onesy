import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowshoeingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowshoeingW100Filled'

      short_name='Snowshoeing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M345-55q-16 0-34-12t-40-40l-86-110 22-17 52 66 134-97 74-383-132 55v127h-28v-146l148-61q29-12 42-16t24-4q14 0 26 7t20 20l39 63q26 42 70 71t99 36v28q-62-6-115.5-41.5T568-611l-39 199 86 84v244q34 0 49-2t36-12q6-3 10.5-5.5t7.5-2.5q5 0 9 4t4 9q0 6-4 10.5T716-75q-21 11-40.5 15T628-56H497v-28h90v-205L461-410l-36 158-148 106 19 26q12 17 24 24.5T347-83q5 2 8 6t3 8q0 5-4 9.5t-9 4.5Zm236-701q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialSnowshoeingW100Filled.displayName = 'OnesyIconMaterialSnowshoeingW100Filled';

export default IconMaterialSnowshoeingW100Filled;
