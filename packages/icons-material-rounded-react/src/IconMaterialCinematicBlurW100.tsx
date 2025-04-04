import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCinematicBlurW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CinematicBlurW100'

      short_name='CinematicBlur'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m192-788 39 78q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-15-30h80l39 78q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-15-30h80l39 78q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-15-30h56q26 0 43 17t17 43v496q0 26-17 43t-43 17H192q-26 0-43-17t-17-43v-496q0-26 17-43t43-17Zm-32 136v420q0 14 9 23t23 9h576q14 0 23-9t9-23v-420H160Zm0 0v452-452Zm226 366h188q12 0 18.5-9t1.5-19q-5-7-11.5-12t-14.5-9q-19-10-40.5-14.5T480-354q-26 0-47.5 4.5T392-335q-8 4-14.5 9T366-314q-6 8 1 18t19 10Zm94-140q23 0 38.5-15.5T534-480q0-23-15.5-38.5T480-534q-23 0-38.5 15.5T426-480q0 23 15.5 38.5T480-426Z"/>
    </Icon>
  );
});

IconMaterialCinematicBlurW100.displayName = 'OnesyIconMaterialCinematicBlurW100';

export default IconMaterialCinematicBlurW100;
