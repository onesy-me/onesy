import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPentagonW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='PentagonW100Filled'

      short_name='Pentagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M259-146 111-590l369-258 369 258-148 444H259Z"/>
    </Icon>
  );
};

IconMaterialPentagonW100Filled.displayName = 'OnesyIconMaterialPentagonW100Filled';

export default IconMaterialPentagonW100Filled;
