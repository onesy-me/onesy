import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPresentToAll = (props: IIcon) => {

  return (
    <Icon
      name='PresentToAll'

      short_name='PresentToAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-320h80v-166l64 63 57-57-161-160-160 160 57 56 63-63v167ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialPresentToAll.displayName = 'OnesyIconMaterialPresentToAll';

export default IconMaterialPresentToAll;
