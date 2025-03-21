import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSickW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SickW100Filled'

      short_name='Sick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m359-581-33 33q-4 4-4.5 9.5T326-528q5 5 10 5t10-5l30-31q9-9 9-21t-9-21l-32-32q-4-4-9-4t-9 4q-4 4-4 9.5t4 9.5l33 33Zm481-35q-26 0-45-19t-19-45q0-31 17-59.5t34-53.5q2-3 5.5-5t7.5-2q4 0 7 2t5 5q17 25 34.5 53.5T904-680q0 26-19 45t-45 19Zm-238 35 33-33q4-4 3.5-9.5T634-633q-4-4-9.5-4t-9.5 4l-31 32q-9 9-9 21t9 21l31 31q4 4 9.5 4.5T635-528q5-5 5-10t-5-10l-33-33ZM480-132q-72 0-135.5-27.5t-111-75Q186-282 159-345t-27-135q0-72 27-135t74.5-110.5q47.5-47.5 111-75T480-828q60 0 113.5 19.5T692-755q9 7 12 18t0 22q-2 8-3 17t-1 18q0 47 27.5 83.5T799-546q11 3 18.5 11t9.5 19q1 9 1 18v18q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132ZM336-312q3 0 5-1.5t4-3.5q22-34 56.5-54.5T480-392q44 0 78.5 20.5T615-317q2 2 4.5 3.5t4.5 1.5q10 0 14-7.5t-1-14.5q-29-45-71.5-65.5T480-420q-28 0-56 8.5T371-385l-102-59q0-14-5-27.5T247-492q-16-9-33.5-4.5T187-476q-9 16-4.5 34t20.5 27q12 7 26 4.5t26-9.5l94 54q-7 7-13.5 15T323-334q-5 8-.5 15t13.5 7Z"/>
    </Icon>
  );
});

IconMaterialSickW100Filled.displayName = 'OnesyIconMaterialSickW100Filled';

export default IconMaterialSickW100Filled;
