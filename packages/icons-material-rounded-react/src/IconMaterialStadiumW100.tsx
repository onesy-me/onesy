import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStadiumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StadiumW100'

      short_name='Stadium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M196-704v-80q0-8 7-12.5t15-.5l79 40q8 5 8 13t-8 13l-79 40q-8 4-15-.5t-7-12.5Zm480 0v-80q0-8 7-12.5t15-.5l79 40q8 5 8 13t-8 13l-79 40q-8 4-15-.5t-7-12.5Zm-224-32v-80q0-8 7-12.5t15-.5l79 40q8 5 8 13t-8 13l-79 40q-8 4-15-.5t-7-12.5Zm-68 617q-121-8-189.5-33.5T126-210v-320q0-20 26-37t73-29.5q47-12.5 112-20t143-7.5q78 0 143 7.5t112 20q47 12.5 73 29.5t26 37v320q0 32-69 57.5T575-119q-12 1-20.5-7t-8.5-20v-130H414v129q0 12-9 20.5t-21 7.5Zm96-345q100 0 191.5-17T806-527q-17-26-101.5-47.5T480-596q-140 0-224.5 21.5T154-527q43 29 123 46t203 17Zm-94 317v-129q0-11 8.5-19.5T414-304h132q11 0 19.5 8.5T574-276v129q99-7 158.5-25.5T806-210v-286q-69 33-149 46.5T480-436q-97 0-177-13.5T154-496v286q14 19 67.5 37.5T386-147Zm94-175Z"/>
    </Icon>
  );
});

IconMaterialStadiumW100.displayName = 'OnesyIconMaterialStadiumW100';

export default IconMaterialStadiumW100;
