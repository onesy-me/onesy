import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrassFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GrassFilled'

      short_name='Grass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h190q-17-63-56-114t-94-83q-22-13-21-28.5t27-14.5q131 2 222.5 95T480-160H120Zm440 0q0-42-9-83.5T525-323q42-69 112.5-112T794-480q24-1 25 15.5T800-437q-55 32-94 83t-56 114h190q17 0 28.5 11.5T880-200q0 17-11.5 28.5T840-160H560Zm-80-239q0-106 60.5-188.5T696-702q23-8 34 5t-9 32q-32 30-55.5 67T626-519q-44 21-80.5 51.5T480-399Zm-73-75q-12-9-24-17t-25-16q0-6 1-12.5t1-12.5q0-53-11.5-101T315-726q-11-22 1.5-32.5T349-753q36 29 63.5 66t44.5 81q-18 30-31 63.5T407-474Z"/>
    </Icon>
  );
});

IconMaterialGrassFilled.displayName = 'OnesyIconMaterialGrassFilled';

export default IconMaterialGrassFilled;
