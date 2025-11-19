import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarehouseFilled = (props: IIcon) => {

  return (
    <Icon
      name='WarehouseFilled'

      short_name='Warehouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-560l400-160 400 160v560H640v-320H320v320H80Zm280 0v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80Z"/>
    </Icon>
  );
};

IconMaterialWarehouseFilled.displayName = 'OnesyIconMaterialWarehouseFilled';

export default IconMaterialWarehouseFilled;
