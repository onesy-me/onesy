import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowshoeingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowshoeingW100'

      short_name='Snowshoeing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M345-55q-16 0-34-12t-40-40l-77-99q-4-5-3.5-10.5t5.5-9.5q5-4 10.5-3t9.5 6l43 55 134-97 74-383-132 55v113q0 6-4 10t-10 4q-6 0-10-4t-4-10v-112q0-9 5.5-16.5T326-620l129-53q29-12 42-16t24-4q14 0 26 7t20 20l39 63q25 39 64.5 67t89.5 38q6 2 10.5 6t4.5 10q0 6-4.5 9.5T760-470q-57-9-106.5-43.5T568-611l-39 199 77 75q5 5 7 10.5t2 11.5v231q34 0 49-2t36-12q6-3 10.5-5.5t7.5-2.5q5 0 9 4t4 9q0 6-4 10.5T716-75q-21 11-40.5 15T628-56H511q-6 0-10-4t-4-10q0-6 4-10t10-4h76v-205L461-410l-33 147q-2 5-4.5 10t-7.5 8l-139 99 19 26q12 17 24 24.5T347-83q5 2 8 6t3 8q0 5-4 9.5t-9 4.5Zm236-701q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialSnowshoeingW100.displayName = 'OnesyIconMaterialSnowshoeingW100';

export default IconMaterialSnowshoeingW100;
