import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModelTraining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModelTraining'

      short_name='ModelTraining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-220q0-23-15.5-45.5t-34.5-47q-19-24.5-34.5-51T340-420q0-58 41-99t99-41q58 0 99 41t41 99q0 30-15.5 56.5t-34.5 51q-19 24.5-34.5 47T520-220h-80Zm40 100q-17 0-28.5-11.5T440-160v-20h80v20q0 17-11.5 28.5T480-120Zm240-120q-9-9-10.5-23t6.5-25q21-33 32.5-71.5T760-440q0-55-19.5-103.5T686-630q-11-13-11.5-28.5T686-686q12-12 29-12t28 12q45 48 71 111t26 135q0 54-15 103.5T783-245q-11 17-30 18t-33-13Zm-543-5q-27-42-42-91.5T120-440q0-150 105-255t255-105h8l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-628q-12 12-28 11.5T452-629q-12-12-12-28.5t12-28.5l34-34h-6q-116 0-198 82t-82 198q0 42 11.5 80.5T244-288q8 11 6.5 25T240-240q-14 14-33 13t-30-18Z"/>
    </Icon>
  );
});

IconMaterialModelTraining.displayName = 'OnesyIconMaterialModelTraining';

export default IconMaterialModelTraining;
