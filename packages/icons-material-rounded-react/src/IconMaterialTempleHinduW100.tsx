import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempleHinduW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHinduW100'

      short_name='TempleHindu'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-134v-346q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v66h125l126-417v-49q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h133v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v44l127 422h125v-66q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v346q0 11-8.5 19.5T826-106H576q-12.75 0-21.37-8.63Q546-123.25 546-136v-170H414v170q0 12.75-8.62 21.37Q396.75-106 384-106H134q-11 0-19.5-8.5T106-134Zm207-360h334l-40-132H353l-40 132Zm48-160h238l-40-132H401l-40 132ZM134-134h252v-172q0-11 8.5-19.5T414-334h132q11 0 19.5 8.5T574-306v172h252v-252H700q-9.12 0-16.66-5.44-7.53-5.44-10.34-14.56l-18-54-350-6-18 60q-2.81 9.12-10.34 14.56Q269.12-386 260-386H134v252Zm346-326Z"/>
    </Icon>
  );
});

IconMaterialTempleHinduW100.displayName = 'OnesyIconMaterialTempleHinduW100';

export default IconMaterialTempleHinduW100;
