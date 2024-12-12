import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageInternationalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageInternationalW100'

      short_name='LanguageInternational'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-346v-268h28v268h-28Zm100 0v-268h40l136 262-16 2v-264h28v268h-40L218-608l16-2v264h-28Zm330 0v-240h-80v-28h188v28h-80v240h-28Zm170 0v-268h28v240h120v28H706Z"/>
    </Icon>
  );
});

IconMaterialLanguageInternationalW100.displayName = 'OnesyIconMaterialLanguageInternationalW100';

export default IconMaterialLanguageInternationalW100;
