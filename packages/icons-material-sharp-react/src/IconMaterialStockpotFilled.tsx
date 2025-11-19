import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStockpotFilled = (props: IIcon) => {

  return (
    <Icon
      name='StockpotFilled'

      short_name='Stockpot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-480h720v480H120Zm0-520v-80h240v-80h240v80h240v80H120Z"/>
    </Icon>
  );
};

IconMaterialStockpotFilled.displayName = 'OnesyIconMaterialStockpotFilled';

export default IconMaterialStockpotFilled;
