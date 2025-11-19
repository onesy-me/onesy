import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriceChangeFilled = (props: IIcon) => {

  return (
    <Icon
      name='PriceChangeFilled'

      short_name='PriceChange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm240-120h80v-40h40q17 0 28.5-11.5T480-360v-120q0-17-11.5-28.5T440-520H320v-40h160v-80h-80v-40h-80v40h-40q-17 0-28.5 11.5T240-600v120q0 17 11.5 28.5T280-440h120v40H240v80h80v40Zm320-30 80-80H560l80 80Zm-80-250h160l-80-80-80 80Z"/>
    </Icon>
  );
};

IconMaterialPriceChangeFilled.displayName = 'OnesyIconMaterialPriceChangeFilled';

export default IconMaterialPriceChangeFilled;
