import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumidityPercentage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityPercentage'

      short_name='HumidityPercentage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-240q25 0 42.5-17.5T640-300q0-25-17.5-42.5T580-360q-25 0-42.5 17.5T520-300q0 25 17.5 42.5T580-240Zm-230-30q12 12 28 12t28-12l204-204q12-12 12-28t-12-28q-12-12-28.5-12T553-530L350-327q-12 12-12 28.5t12 28.5Zm30-170q25 0 42.5-17.5T440-500q0-25-17.5-42.5T380-560q-25 0-42.5 17.5T320-500q0 25 17.5 42.5T380-440ZM480-80q-137 0-228.5-94T160-408q0-62 28-124t70-119q42-57 91-107t91-87q8-8 18.5-11.5T480-860q11 0 21.5 3.5T520-845q42 37 91 87t91 107q42 57 70 119t28 124q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialHumidityPercentage.displayName = 'OnesyIconMaterialHumidityPercentage';

export default IconMaterialHumidityPercentage;
