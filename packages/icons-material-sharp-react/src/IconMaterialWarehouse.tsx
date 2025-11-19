import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarehouse = (props: IIcon) => {

  return (
    <Icon
      name='Warehouse'

      short_name='Warehouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200h80v-320h480v320h80v-426L480-754 160-626v426Zm-80 80v-560l400-160 400 160v560H640v-320H320v320H80Zm280 0v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80ZM240-520h480-480Z"/>
    </Icon>
  );
};

IconMaterialWarehouse.displayName = 'OnesyIconMaterialWarehouse';

export default IconMaterialWarehouse;
