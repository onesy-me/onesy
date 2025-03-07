import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyExchangeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyExchangeW100'

      short_name='CurrencyExchange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-92q-125 0-222.5-69T115-347v139H87v-188h188v28H138q36 112 131 180t211 68q71 0 133.5-25T724-214.5q48-44.5 78.5-106T839-454h28q-5 76-37.5 142t-84 115q-51.5 49-120 77T480-92Zm-16-128v-48q-39-9-67.5-30T350-358l26-12q18 36 46.5 56t63.5 20q36 0 69-19.5t33-64.5q0-35-21.5-54.5T480-476q-66-24-93-49t-27-67q0-35 27-65t79-37v-46h30v46q30 2 56.5 19.5T594-630l-26 10q-14-21-35-34.5T482-668q-41 0-66.5 22T390-592q0 32 17 49t85 41q72 26 98 54t26 70q0 28-11.5 49T575-294.5Q557-281 535.5-274t-41.5 8v46h-30ZM93-506q7-81 40.5-147.5t86-114.5Q272-816 339-842t141-26q122 0 222.5 69.5T845-609v-143h28v188H685v-28h137q-33-108-128.5-178T480-840q-67 0-129 24t-111 67.5q-49 43.5-81 105T121-506H93Z"/>
    </Icon>
  );
});

IconMaterialCurrencyExchangeW100.displayName = 'OnesyIconMaterialCurrencyExchangeW100';

export default IconMaterialCurrencyExchangeW100;
