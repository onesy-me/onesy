import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguagePinyinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguagePinyinW100Filled'

      short_name='LanguagePinyin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M524-463h117v-137H524v137ZM220-212l-7-28h73v-207q-17 8-35 14l-36 12-4-25q20-6 38.5-13t36.5-15v-126h-60v-28h60v-120h28v120h40v28h-40v113q14-7 28-15l28-16v29q-14 8-28 15.5T314-459v247h-94Zm179 0-16-23q51-34 80.5-87T496-435h-80v-28h80v-137h-60v-28h293v28h-60v137h80v28h-80v223h-28v-223H524q-3 68-35.5 126.5T399-212Zm251-413-22-9q14-20 26-40t23-41l23 8q-10 23-23 42.5T650-625Zm-145-13q-13-19-26.5-37.5T451-712l23-11q14 18 27 36t26 37l-22 12Z"/>
    </Icon>
  );
});

IconMaterialLanguagePinyinW100Filled.displayName = 'OnesyIconMaterialLanguagePinyinW100Filled';

export default IconMaterialLanguagePinyinW100Filled;
