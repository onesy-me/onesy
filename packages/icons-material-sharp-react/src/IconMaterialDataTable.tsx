import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataTable = (props: IIcon) => {

  return (
    <Icon
      name='DataTable'

      short_name='DataTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-507h560v-133H200v133Zm0 214h560v-134H200v134Zm0 213h560v-133H200v133Zm40-454v-80h80v80h-80Zm0 214v-80h80v80h-80Zm0 214v-80h80v80h-80Z"/>
    </Icon>
  );
};

IconMaterialDataTable.displayName = 'OnesyIconMaterialDataTable';

export default IconMaterialDataTable;
