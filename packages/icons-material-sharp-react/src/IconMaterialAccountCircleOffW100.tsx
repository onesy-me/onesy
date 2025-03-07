import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountCircleOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleOffW100'

      short_name='AccountCircleOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M536-536Zm-76 76Zm20 300q57 0 110.5-19t95.5-57q-44-35-96.52-52.5-52.51-17.5-109.5-17.5-56.98 0-110.48 16.5Q316-273 274-236q42 38 95.5 57T480-160Zm86-345-20-20q10-11 15-25.67 5-14.66 5-29.33 0-35-25.5-60.5T480-666q-14.67 0-29.33 5Q436-656 425-646l-20-20q15.58-14 34.85-21 19.27-7 40.59-7Q528-694 561-661t33 80.56q0 21.32-7 40.59-7 19.27-21 34.85Zm210 210-21-21q22-38 33.5-79t11.5-85q0-134-93-227t-227-93q-44 0-85 11.5T316-755l-21-21q42-26 88.83-39T480-828q72.21 0 135.72 27.41 63.51 27.4 110.49 74.38t74.38 110.49Q828-552.21 828-480q0 49.34-13 96.17T776-295ZM479.61-132q-71.98 0-135.3-27.5Q281-187 233.95-233.95q-47.06-46.95-74.5-110.42Q132-407.84 132-480q0-62 20.5-120T214-705L90-830l20-20L872-88l-20 20-618-617q-36 44-55 96t-19 109q0 63.37 23.5 121.19Q207-301 252-256q51-35 108.62-56.5Q418.23-334 480-334q58 0 112.5 19T695-264l31 31q-49 50-113 75.5T479.61-132Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleOffW100.displayName = 'OnesyIconMaterialAccountCircleOffW100';

export default IconMaterialAccountCircleOffW100;
