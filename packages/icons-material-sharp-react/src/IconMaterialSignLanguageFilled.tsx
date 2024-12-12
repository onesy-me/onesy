import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignLanguageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignLanguageFilled'

      short_name='SignLanguage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-40v-80h200v-40H80v-80h280v-40H40v-80h320v-40H120v-80h284l-62-107 66-66 312 233v380H160Zm110-493-47-33 37-51 17 12 31 72h-38Zm48-113-87-63 46-65 97 70-56 58Zm497 223L522-642 271-829l47-66 257 191 24-32-193-143 46-64 230 169 16-123 91-14 111 374-85 114Z"/>
    </Icon>
  );
});

IconMaterialSignLanguageFilled.displayName = 'OnesyIconMaterialSignLanguageFilled';

export default IconMaterialSignLanguageFilled;
