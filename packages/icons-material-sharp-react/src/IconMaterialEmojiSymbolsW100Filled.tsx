import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiSymbolsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiSymbolsW100Filled'

      short_name='EmojiSymbols'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-806v-28h268v28H146Zm120 260v-192H146v-28h268v28H294v192h-28Zm282 414-20-20 276-276 20 20-276 276Zm32-208q-17 0-28.5-11.5T540-380q0-17 11.5-28.5T580-420q17 0 28.5 11.5T620-380q0 17-11.5 28.5T580-340Zm200 200q-17 0-28.5-11.5T740-180q0-17 11.5-28.5T780-220q17 0 28.5 11.5T820-180q0 17-11.5 28.5T780-140ZM624-546q-30 0-50-20t-20-50q0-30 20-50t50-20q12 0 22.5 3t19.5 11v-182h148v28H694v210q0 30-20 50t-50 20ZM217-105q-30 0-52.5-22.5T142-180q0-14 7-28.5t19-25.5l60-58-32-33q-11-11-16.5-25.5T174-380q0-30 22-51t52-21q32 0 53 20t21 52q0 15-5 29.5T301-325l-33 33 64 64 56-56 20 20-55 55 55 55-20 20-55-55-60 60q-12 12-26.5 18t-29.5 6Zm31-207 33-33q8-8 10.5-15t2.5-18q0-21-14-33.5T248-424q-17 0-31.5 12.5T202-378q0 11 3.5 18.5T216-345l32 33Zm-31 179q9 0 18.5-3t17.5-11l60-60-65-65-61 59q-8 8-12.5 16t-4.5 17q0 18 14.5 32.5T217-133Z"/>
    </Icon>
  );
});

IconMaterialEmojiSymbolsW100Filled.displayName = 'OnesyIconMaterialEmojiSymbolsW100Filled';

export default IconMaterialEmojiSymbolsW100Filled;
