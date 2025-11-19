import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPentagonFilled = (props: IIcon) => {

  return (
    <Icon
      name='PentagonFilled'

      short_name='Pentagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M298-120q-26 0-47-15t-29-40L99-543q-8-26 0-51t30-40l305-214q21-14 46-14t46 14l305 214q22 15 30 40t0 51L738-175q-8 25-29 40t-47 15H298Z"/>
    </Icon>
  );
};

IconMaterialPentagonFilled.displayName = 'OnesyIconMaterialPentagonFilled';

export default IconMaterialPentagonFilled;
