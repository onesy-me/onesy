import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieEditW100'

      short_name='MovieEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-372 372Zm32 28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17l39 78q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-15-30h80l39 78q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-15-30h80l39 78q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-15-30h56q26 0 43 17t17 43v91q0 11-8.5 19.5T800-569v-43H160v340q0 14 9 23t23 9h266q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm380 10v-36q0-6 2-11t7-10l202-201q5-5 10-6.5t10-1.5q5 0 10.5 2t9.5 6l37 38q4 5 6 10t2 10q0 5-2 10t-6 10L659-181q-5 5-10 7t-11 2h-36q-13 0-21.5-8.5T572-202Zm268-200-37-38 37 38ZM600-200h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z"/>
    </Icon>
  );
});

IconMaterialMovieEditW100.displayName = 'OnesyIconMaterialMovieEditW100';

export default IconMaterialMovieEditW100;
