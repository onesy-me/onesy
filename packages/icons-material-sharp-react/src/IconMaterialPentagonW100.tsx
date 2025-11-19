import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPentagonW100 = (props: IIcon) => {

  return (
    <Icon
      name='PentagonW100'

      short_name='Pentagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M279-174h402l135-405-336-235-336 235 135 405Zm-20 28L111-590l369-258 369 258-148 444H259Zm221-348Z"/>
    </Icon>
  );
};

IconMaterialPentagonW100.displayName = 'OnesyIconMaterialPentagonW100';

export default IconMaterialPentagonW100;
