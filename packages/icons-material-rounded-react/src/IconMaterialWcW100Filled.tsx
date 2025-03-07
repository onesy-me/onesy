import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WcW100Filled'

      short_name='Wc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M254-136v-244h-30q-12.75 0-21.37-8.63Q194-397.25 194-410v-190q0-23 15.5-38.5T248-654h104q23 0 38.5 15.5T406-600v190q0 12.75-8.62 21.37Q388.75-380 376-380h-30v244q0 12.75-8.62 21.37Q328.75-106 316-106h-32q-12.75 0-21.37-8.63Q254-123.25 254-136Zm46-560q-27 0-45.5-18.5T236-760q0-27 18.5-45.5T300-824q27 0 45.5 18.5T364-760q0 27-18.5 45.5T300-696Zm326 560v-184h-52q-14 0-23.5-11.5T545-357l65-261q5.02-17.33 18.51-26.67Q642-654 660-654t31.49 9.33Q704.98-635.33 710-618l65 261q4 14-5.5 25.5T746-320h-52v184q0 12.75-8.62 21.37Q676.75-106 664-106h-8q-12.75 0-21.37-8.63Q626-123.25 626-136Zm34-560q-27 0-45.5-18.5T596-760q0-27 18.5-45.5T660-824q27 0 45.5 18.5T724-760q0 27-18.5 45.5T660-696Z"/>
    </Icon>
  );
});

IconMaterialWcW100Filled.displayName = 'OnesyIconMaterialWcW100Filled';

export default IconMaterialWcW100Filled;
