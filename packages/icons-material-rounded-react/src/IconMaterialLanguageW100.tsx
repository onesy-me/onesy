import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageW100'

      short_name='Language'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Zm0-27q38-48 62-93t39-102H379q17 61 40 106t61 89Zm-35-3q-31-33-57-85.5T350-354H186q36 82 105 133t154 59Zm70 0q85-8 154-59t105-133H610q-17 55-43 107.5T515-162ZM175-382h169q-5-26-7-50.5t-2-47.5q0-23 2-47.5t7-50.5H175q-7 21-11 47t-4 51q0 25 4 51t11 47Zm197 0h216q5-26 7-49.5t2-48.5q0-25-2-48.5t-7-49.5H372q-5 26-7 49.5t-2 48.5q0 25 2 48.5t7 49.5Zm244 0h169q7-21 11-47t4-51q0-25-4-51t-11-47H616q5 26 7 50.5t2 47.5q0 23-2 47.5t-7 50.5Zm-6-224h164q-37-84-103.5-133T515-799q31 38 56 89t39 104Zm-231 0h202q-17-60-41.5-107.5T480-801q-35 40-59.5 87.5T379-606Zm-193 0h164q14-53 39-104t56-89q-90 11-156 60.5T186-606Z"/>
    </Icon>
  );
});

IconMaterialLanguageW100.displayName = 'OnesyIconMaterialLanguageW100';

export default IconMaterialLanguageW100;
