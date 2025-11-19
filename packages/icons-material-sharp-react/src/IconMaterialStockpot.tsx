import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStockpot = (props: IIcon) => {

  return (
    <Icon
      name='Stockpot'

      short_name='Stockpot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-480h720v480H120Zm80-80h560v-320H200v320Zm-80-440v-80h240v-80h240v80h240v80H120Zm360 280Z"/>
    </Icon>
  );
};

IconMaterialStockpot.displayName = 'OnesyIconMaterialStockpot';

export default IconMaterialStockpot;
