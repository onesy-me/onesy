import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRawOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOnW100'

      short_name='RawOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M136-390v-172q0-9 7-15.5t16-6.5h85q24 0 42 18t18 42v8q0 17-10.5 33.5T260-458l28 63q3 7-1 13t-12 6q-4 0-7.5-2t-5.5-6l-32-72h-66v66q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm228-5 61-176q2-6 6.5-9.5T442-584h14q6 0 10.5 3.5t6.5 9.5l62 176q2 7-2 13t-12 6q-5 0-8-2t-5-7l-19-53h-80l-19 53q-2 5-5 7t-8 2q-8 0-11.5-6t-1.5-13Zm263 10-49-181q-2-7 2-12.5t11-5.5q5 0 8.5 2.5t5.5 7.5l37 137 36-138q1-4 4-6.5t7-2.5h6q4 0 7 2.5t4 6.5l36 138 37-137q2-5 5.5-7.5t8.5-2.5q7 0 11 5.5t2 12.5l-49 181q-1 4-4 6.5t-7 2.5h-7q-4 0-7-2.5t-4-6.5l-36-132-36 132q-1 4-4 6.5t-7 2.5h-7q-4 0-7-2.5t-4-6.5Zm-210-79h64l-28-82h-8l-28 82Zm-253-20h80q12 0 22-10t10-22v-8q0-12-10-22t-22-10h-80v72Z"/>
    </Icon>
  );
});

IconMaterialRawOnW100.displayName = 'OnesyIconMaterialRawOnW100';

export default IconMaterialRawOnW100;
